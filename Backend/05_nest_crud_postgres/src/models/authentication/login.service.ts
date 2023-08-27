import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ILogin } from "src/interfaces/login";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LoginService {
	constructor(
		private prisma: PrismaService,
		private jwtService: JwtService
	) {}

	async login(data: ILogin) {
		const { email, password } = data;

		const user = await this.prisma.user.findUnique({ where: { email } });
		if (!user) throw new UnauthorizedException("invalidCredentials: Wrong email or password");

		const isSamePassword = user.password === password;
		if (!isSamePassword) throw new UnauthorizedException("invalidCredentials: Wrong email or password");

		const token = await this.jwtService.signAsync({ email });
		return { id: user.id, email, token };
	}
}
