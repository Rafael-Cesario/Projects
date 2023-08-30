import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/prisma/prisma.service";

describe("Users", () => {
	let app: INestApplication;
	let prisma: PrismaService;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
		prisma = moduleRef.get(PrismaService);
		app = moduleRef.createNestApplication();
		await app.init();
	});

	beforeEach(async () => {
		await prisma.user.deleteMany({});
	});

	afterAll(async () => {
		await app.close();
	});

	describe("/POST user", () => {});
});
