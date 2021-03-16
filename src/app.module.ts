import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}


// 여러가지를 App.module에서 import 한다.
// 왜냐하면 Nest가 앱을 구동하면 main.ts -> app.moudle에서 Import 한것들을 하나의 모듈로 생성하여 동작시키기 떄문이다.
