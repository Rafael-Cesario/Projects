import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";
import { ICreateUser } from "../src/interfaces/user";

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

		it("Throws a new exceptions due to a duplicated user", async () => {
			const input: ICreateUser = { email: "user01@email.com", name: "user01", password: "123123" };
			await request(app.getHttpServer()).post("/user").send(input);
			const { body, statusCode } = await request(app.getHttpServer()).post("/user").send(input);
			expect(body.error).toBe("Conflict");
			expect(statusCode).toBe(409);
		});
	});
});
