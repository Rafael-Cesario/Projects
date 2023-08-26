import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ILogin } from "src/interfaces/login";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LoginService {
	constructor(private prisma: PrismaService) {}

	async login(data: ILogin) {
		const { email, password } = data;

		const user = await this.prisma.user.findUnique({ where: { email } });
		if (!user) throw new UnauthorizedException("invalidCredentials: Wrong email or password");

		const isSamePassword = user.password === password;
		if (!isSamePassword) throw new UnauthorizedException("invalidCredentials: Wrong email or password");

		// Generate Token with email
		// return user id , email, token

		return data;
	}
}
