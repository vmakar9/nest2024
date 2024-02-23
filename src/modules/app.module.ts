import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthModule } from "./health/health.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "../configs/configs"
import {PostgresModule} from "./postgres/postgres.module";
@Module({
    imports: [
        PostgresModule,
      ConfigModule.forRoot({
        load: [configuration],
        isGlobal: true,
      }),
      UserModule,
      HealthModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
