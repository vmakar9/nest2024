import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostgresService} from "./postgress.service";

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useClass: PostgresService,
        }),
    ],
    controllers: [],
    providers: [],
})
export class PostgresModule {}