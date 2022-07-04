import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(3000)
  .then(() => {
    console.log("Successfully started on port 3000");
  })
  .catch((error) => {
    console.log(error);
  });
}
bootstrap();
