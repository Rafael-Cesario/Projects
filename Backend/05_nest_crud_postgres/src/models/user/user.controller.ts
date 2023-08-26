import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { Prisma } from "@prisma/client";
import { verifyEmptyValues } from "src/utils/verify-empty-values";
import { IDeleteUser, IUpdateUser } from "src/interfaces/user";

@Controller("user")
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async getAll() {
		return this.userService.getAll();
	}

	@Get(":id")
	async getOne(@Param("id") id: string) {
		return this.userService.getOne(id);
	}

	@Post()
	async createUser(@Body() data: Prisma.UserCreateInput) {
		const hasEmptyValues = verifyEmptyValues(data);
		if (hasEmptyValues) throw new BadRequestException(`emptyValues: ${hasEmptyValues}`);

		return this.userService.create(data);
	}

	@Put()
	async updateOne(@Body() data: IUpdateUser) {
		const { id, newUser } = data;

		const hasEmptyValues = verifyEmptyValues({ id, ...newUser });
		if (hasEmptyValues) throw new BadRequestException(`emptyValues: ${hasEmptyValues}`);

		return this.userService.updateOne(data);
	}

	@Delete()
	async deleteOne(@Body() data: IDeleteUser) {
		return this.userService.deleteOne(data);
	}
}
