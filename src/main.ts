import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerHelper } from './common/helpers/swagger.helper';

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

  await app.listen(3000);
}
bootstrap();
