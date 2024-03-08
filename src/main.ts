import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.setGlobalPrefix('api');
  app.use(json({ limit: "5mb" }))
  // app.useStaticAssets(join(__dirname, "..", 'src', 'assurance', 'files'))

  const options = new DocumentBuilder()
    .setTitle(' ENDPOINT POWERED FOR EL-NEBRAS')
    .setDescription('Les end-point fournie ici dessous est la premier verion du backend  El nebras ')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addServer('https://production.yourapi.com/', 'Production')
    .addTag('Documentation Api')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
