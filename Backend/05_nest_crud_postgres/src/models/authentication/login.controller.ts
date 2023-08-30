import { Body, Controller, Post } from "@nestjs/common";
import { ILogin } from "../..//interfaces/login";
import { LoginService } from "./login.service";

@Controller("authentication")
export class LoginController {
	constructor(private loginService: LoginService) {}

	@Post()
	async login(@Body() data: ILogin) {
		return this.loginService.login(data);
	}
}
