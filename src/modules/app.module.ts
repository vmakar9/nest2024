import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthModule } from "./health/health.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "../configs/configs"
import {PostgresModule} from "./postgres/postgres.module";
import {RepositoryModule} from "./repository/repository.module";
import {RedisModule} from "./redis/redis.module";
import {AuthModule} from "./auth/auth.module";
@Module({
    imports: [
        PostgresModule,
        RedisModule,
      ConfigModule.forRoot({
        load: [configuration],
        isGlobal: true,
      }),
        AuthModule,
      UserModule,
      HealthModule,
        RepositoryModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
