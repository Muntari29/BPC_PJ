import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // dto를 활용한 유효성검사를 하기 위함
  app.useGlobalPipes(new ValidationPipe({
    // true로 화이트리스트(여기서는 Dto)에 포함되지 않은 속성은 결과 객체에서 자동으로 제거된다.
    whitelist:true, // 예를 들어, email및 password속성을 기대 하지만 요청에 age속성 도 포함 된 경우이 속성은 결과 DTO에서 자동으로 제거 될 수 있다.
    //true로 설정하면 화이트리스트에없는 속성 검사기를 제거하는 대신 예외가 발생한다.
    forbidNonWhitelisted:true, // 위의 예에서 age속성은 응답으로 필요없는 속성임을 알려준다.
    // 요청에 대한 내용을 코드 로직상에서 필요한 타입으로 자동으로 변환해주는 옵션이다.
    transform:true 
    // 기본적으로 req => string 타입인데 이 옵션을 이용해 우리가 원하는 id값을 string이 아닌 number로 자동 변환해주며
    // 별도의 설정없이 이 옵션만으로 자동으로 변환된 값을 입력받을 수 있게된다. 따라서 이전 id:string => id:number로 표시해도 문제없이 동작하게 된다.

  }));
  await app.listen(3000);
}
bootstrap();
