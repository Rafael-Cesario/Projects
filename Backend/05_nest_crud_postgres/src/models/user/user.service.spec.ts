import { Test } from "@nestjs/testing";
import { UserService } from "./user.service";
import { PrismaService } from "../../prisma/prisma.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { IUser } from "../../interfaces/user";

describe("User service", () => {
	let userService: UserService;

	const mockDatabase: IUser[] = [
		{ id: "1", email: "user01@email.com", name: "user01", password: "123123" },
		{ id: "2", email: "user02@email.com", name: "user02", password: "123123" },
	];

	const mockPrismaService = {
		user: {
			findMany: () => mockDatabase,
			findUnique: jest.fn().mockImplementation((args) => mockDatabase.find((user) => user.id === args.where.id)),
		},
	};

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({ providers: [UserService], imports: [PrismaModule] })
			.overrideProvider(PrismaService)
			.useValue(mockPrismaService)
			.compile();

		userService = moduleRef.get(UserService);
	});

	describe("Get all", () => {
		it("Get all users", async () => {
			const users = await userService.getAll();
			expect(users).toHaveLength(mockDatabase.length);
		});
	});

	describe("Get one", () => {
		it("Get one user", async () => {
			const user = await userService.getOne("1");
			expect(user).toEqual(mockDatabase[0]);
		});

		it("Throws an exception due to user not found", async () => {
			await expect(userService.getOne("99999")).rejects.toThrowError("notFound: User not found.");
		});
	});
});
