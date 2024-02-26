import {Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";
import {Config, PostgresConfig} from "../../configs/config.type";
import * as path from "node:path";


@Injectable()
export class PostgresService implements TypeOrmOptionsFactory {

    constructor(private readonly configsService:ConfigService<Config>) {
    }
    createTypeOrmOptions(): TypeOrmModuleOptions {
       const postgresConfig = this.configsService.get<PostgresConfig>("postgres")
        return {
            type: 'postgres',
            host: postgresConfig.host,
            port: postgresConfig.port,
            username: postgresConfig.user,
            password: postgresConfig.password,
            database: postgresConfig.dbName,
            entities: [path.join(process.cwd(),'dist','src','database','entities','*.entity.js')],
            migrations:[
                path.join(process.cwd(),'dist','src','database','migrations','*.js')
            ],
            migrationsRun:true,
            synchronize: false,
        };
    }
}