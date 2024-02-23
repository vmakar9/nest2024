import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerHelper } from './common/helpers/swagger.helper';
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest2024 example')
    .setDescription('Learning Nest2024')
    .setVersion('1.0.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'barer',
      bearerFormat: 'JWT',
      in: 'reader',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerHelper.setDefaultResponses(document);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'list',
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      forbidNonWhitelisted:true,
      whitelist: true
    })
  )
 const configService = app.get(ConfigService)
  const appConfig = configService.get('app')
  console.log(appConfig)
  await app.listen(appConfig.port,()=>{
    const url = `http://${appConfig.host}:${appConfig.port}`;
    Logger.log(`Server running ${url}`);
    Logger.log(`Swagger running ${url}/api`);
  });
}
void bootstrap();
