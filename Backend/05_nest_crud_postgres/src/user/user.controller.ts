import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { Prisma } from "@prisma/client";

@Controller("user")
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async getAll() {
		return this.userService.getAll();
	}

	@Post()
	async createUser(@Body() data: Prisma.UserCreateInput) {
		if (!data.name) throw new BadRequestException("emptyFields: Field name is required");
		return this.userService.create(data);
	}
}
