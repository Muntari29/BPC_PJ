import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";

// 베이스 타입은 CreateMovieDto란 뜻이다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// OOO? ?를 이용해 필요한 정보지만 필수는 아니게 만들 수 있다!!
// 더 나아가 Nest의 기능 중 하나인 extends PartialType()을 사용하자
// 타입을 변환시키고 사용할 수 있게 해주는 @nestjs/mapped-types 를 설치해줘야 한다.