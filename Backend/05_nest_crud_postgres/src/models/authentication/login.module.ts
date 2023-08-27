import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { JwtModule } from "@nestjs/jwt";
import { configs } from "./configs";

@Module({
	imports: [
		JwtModule.register({
			secret: configs.secret,
			signOptions: { expiresIn: configs.expiresIn },
		}),
	],

	controllers: [LoginController],
	providers: [LoginService],
})
export class LoginModule {}
