import { Module } from "@nestjs/common";
import { UserModule } from "./models/user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { LoginModule } from "./models/authentication/login.module";

@Module({
  imports: [PrismaModule, UserModule, LoginModule],
})
export class AppModule {}
