import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { IUpdateUser } from "src/interfaces/user";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		const users = await this.prisma.user.findMany({});
		return users;
	}

	async getOne(id: string) {
		const user = await this.prisma.user.findUnique({ where: { id } });
		if (!user) throw new NotFoundException("notFound: User not found.");
		return user;
	}

	async create(data: Prisma.UserCreateInput) {
		const isDuplicatedEmail = await this.prisma.user.findUnique({ where: { email: data.email } });
		if (isDuplicatedEmail) throw new ConflictException("duplicated: This email is already in use.");

		const newUser = await this.prisma.user.create({ data });
		return newUser;
	}

	async updateOne(data: IUpdateUser) {
		const user = await this.prisma.user.findUnique({ where: { id: data.id } });
		if (!user) throw new NotFoundException("notFound: User not found");

		if (data.email !== user.email) {
			const isDuplicatedEmail = await this.prisma.user.findUnique({ where: { email: data.email } });
			if (isDuplicatedEmail) throw new ConflictException("duplicated: This email is already in use.");
		}

		const newUser = await this.prisma.user.update({ where: { id: data.id }, data });
		return newUser;
	}

	// Delete
}
