import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthModule } from "./health/health.module";

@Module({
  imports: [UserModule,HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
