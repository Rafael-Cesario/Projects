import { BadRequestException, Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { Prisma } from "@prisma/client";
import { verifyEmptyValues } from "src/utils/verify-empty-values";
import { IUpdateUser } from "src/interfaces/user";

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
		const { id, email, name, password } = data;

		const hasEmptyValues = verifyEmptyValues({ id, email, name, password });
		if (hasEmptyValues) throw new BadRequestException(`emptyValues: ${hasEmptyValues}`);

		return this.userService.updateOne({id, email, name, password });
	}
}
