import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";
import { ICreateUser, IDeleteUser, IUpdateUser, IUser } from "../src/interfaces/user";

describe("Users", () => {
	let app: INestApplication;
	let prisma: PrismaService;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
		prisma = moduleRef.get(PrismaService);
		app = moduleRef.createNestApplication();
		await app.init();
	});

	afterAll(async () => {
		await app.close();
	});

	describe("/POST user", () => {
		afterEach(async () => {
			await prisma.user.deleteMany({});
		});

		it("Creates a new user", async () => {
			const input: ICreateUser = { email: "user01@email.com", name: "user01", password: "123123" };
			const { body } = await request(app.getHttpServer()).post("/user").send(input);
			expect(body).toHaveProperty("id");
			expect(body).toHaveProperty("email");
			expect(body).toHaveProperty("password", "");
		});

		it("Sends a request without email", async () => {
			const input: ICreateUser = { email: "", name: "user01", password: "123123" };
			const { body, statusCode } = await request(app.getHttpServer()).post("/user").send(input);
			expect(body.error).toBe("Bad Request");
			expect(statusCode).toBe(400);
		});

		it("Throws a exception due to a duplicated user", async () => {
			const input: ICreateUser = { email: "user01@email.com", name: "user01", password: "123123" };
			await request(app.getHttpServer()).post("/user").send(input);
			const { body, statusCode } = await request(app.getHttpServer()).post("/user").send(input);
			expect(body.error).toBe("Conflict");
			expect(statusCode).toBe(409);
		});
	});

	describe("/GET user", () => {
		let user: IUser;

		beforeAll(async () => {
			const data: ICreateUser = { email: "user01@email.com", name: "user01", password: "123123" };
			user = await prisma.user.create({ data });
		});

		afterAll(async () => {
			await prisma.user.deleteMany();
		});

		it("Get all users", async () => {
			const { body } = await request(app.getHttpServer()).get("/user");
			expect(body).toHaveLength(1);
		});

		it("Get one user", async () => {
			const { body } = await request(app.getHttpServer()).get(`/user/${user.id}`);
			expect(body.name).toBe(user.name);
		});

		it("Didn't find the user", async () => {
			const { body, statusCode } = await request(app.getHttpServer()).get(`/user/wrong-id`);
			expect(body.error).toBe("Not Found");
			expect(statusCode).toBe(404);
		});
	});

	describe("/PUT user", () => {
		let user: IUser;

		beforeEach(async () => {
			const data: ICreateUser = { email: "user01@email.com", name: "user01", password: "123123" };
			user = await prisma.user.create({ data });
		});

		afterEach(async () => {
			await prisma.user.deleteMany();
		});

		it("Update a user", async () => {
			const input: IUpdateUser = { id: user.id, password: user.password, newUser: { email: "new@new.com", name: "new", password: "new123" } };
			const { body } = await request(app.getHttpServer()).put("/user").send(input);
			expect(body.name).toBe(input.newUser.name);
			expect(body.password).toBe("");
		});

		it("Throws a exception due to empty values", async () => {
			const input: IUpdateUser = { id: user.id, password: user.password, newUser: { email: "", name: "", password: "new123" } };
			const { body } = await request(app.getHttpServer()).put("/user").send(input);
			expect(body.message).toBe("emptyValues: email is empty, name is empty");
			expect(body.error).toBe("Bad Request");
		});

		it("Didn't find the user", async () => {
			const input: IUpdateUser = { id: "wrong", password: user.password, newUser: { email: "new@new.com", name: "new", password: "new123" } };
			const { body } = await request(app.getHttpServer()).put("/user").send(input);
			expect(body.message).toMatch(/notFound/);
			expect(body.error).toBe("Not Found");
		});

		it("Throws a exception due to wrong password", async () => {
			const input: IUpdateUser = { id: user.id, password: "wrong", newUser: { email: "new@new.com", name: "new", password: "new123" } };
			const { body } = await request(app.getHttpServer()).put("/user").send(input);
			expect(body.message).toBe("unauthorized");
			expect(body.error).toBe("Unauthorized");
		});

		it("Throws a exception due to duplicated email", async () => {
			await prisma.user.create({ data: { email: "user02@email.com", name: "user02", password: "123" } });
			const input: IUpdateUser = { id: user.id, password: user.password, newUser: { email: "user02@email.com", name: "new", password: "new123" } };
			const { body } = await request(app.getHttpServer()).put("/user").send(input);
			expect(body.message).toBe("duplicated: This email is already in use.");
			expect(body.error).toBe("Conflict");
		});
	});

	describe("/DELETE user", () => {
		afterEach(async () => {
			await prisma.user.deleteMany();
		});

		it("Delete a user", async () => {
			const user = await prisma.user.create({ data: { email: "toBeDeleted@deleteMe.com", name: "Delete me", password: "goodbye" } });
			const input: IDeleteUser = { id: user.id, password: user.password };
			const { text } = await request(app.getHttpServer()).delete("/user").send(input);
			expect(text).toBe("Success: Your account was deleted");
		});

		it("Throws an exception due to user not found", async () => {
			const input: IDeleteUser = { id: "123", password: "123" };
			const { body } = await request(app.getHttpServer()).delete("/user").send(input);
			expect(body.error).toBe("Not Found");
		});

		it("Throws an exception due to wrong password", async () => {
			const user = await prisma.user.create({ data: { email: "toBeDeleted@deleteMe.com", name: "Delete me", password: "goodbye" } });
			const input: IDeleteUser = { id: user.id, password: "wrong" };
			const { body } = await request(app.getHttpServer()).delete("/user").send(input);
			expect(body.error).toBe("Unauthorized");
		});
	});
});
