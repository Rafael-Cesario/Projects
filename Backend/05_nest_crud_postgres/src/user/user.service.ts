import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		const users = await this.prisma.user.findMany({});
		return users;
	}

	async create(data: Prisma.UserCreateInput) {
		const newUser = await this.prisma.user.create({ data });
		return newUser;
	}
}
