import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { IUser } from "../src/interfaces/user";
import { ILogin } from "../src/interfaces/login";

describe("Authentication", () => {
	let app: INestApplication;
	let prisma: PrismaService;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
		prisma = await moduleRef.get(PrismaService);
		app = moduleRef.createNestApplication();
		await app.init();
	});

	afterAll(async () => {
		await prisma.user.deleteMany();
		await app.close();
	});

	describe("Login", () => {
		let user: IUser;

		beforeAll(async () => {
			user = await prisma.user.create({ data: { email: "user01@email.com", name: "user01", password: "123123" } });
		});

		it("Login", async () => {
			const input: ILogin = { email: user.email, password: user.password };
			const { body } = await request(app.getHttpServer()).post("/authentication").send(input);
			expect(body.token).toBeDefined();
		});

		it("Throws an error due to wrong email", async () => {
			const input: ILogin = { email: "wrong", password: user.password };
			const { body } = await request(app.getHttpServer()).post("/authentication").send(input);
			expect(body.error).toBe("Unauthorized");
		});

		it("Throws an error due to wrong password", async () => {
			const input: ILogin = { email: user.email, password: "wrong" };
			const { body } = await request(app.getHttpServer()).post("/authentication").send(input);
			expect(body.error).toBe("Unauthorized");
		});
	});
});
