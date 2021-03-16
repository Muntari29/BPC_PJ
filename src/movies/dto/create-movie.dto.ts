import { IsNumber, IsString } from "class-validator";

export class CreateMovieDto{
    @IsString()
    readonly title:string;
    
    @IsNumber()
    readonly year: number;

    @IsString({ each: true })
    readonly genres: string[];
}

// dto를 이용해 유효성검사를 할 수 있다. 어떤 요청으로 이루어져야하는지 틀을 dto를 이용해 정의할 수 있다.
// 이렇게 만든 dto는 유효성검사에서의 한 타입으로 적용 시킬 수 있다.

// dto를 사용하는 이유는
// 코드를 간결하게 작성할 수 있도록 도와주며
// Nest가 들어오는 쿼리에 대해 유효성검사를 할 수 있도록 도와준다.

// 단순하게 dto를 만든 후 컨트롤러, 서비스에 적용만 하면 우리가 원하는
// 원치않는 요청일때 에러를 발생시키는 유효성검사를 할 수 없다.
// 추가적으로 main.ts에 나의 코드가 지나가는 유효성 검사 파이프라인을 구축해줘야한다.(line 미들웨어)

// 지금 단계에선 클래스의 유효성을 검사하고 싶기 떄문에
// npm 패키지매니저를 통해 class-vaildator, class-transformer를 설치한다.

// 설치 완료 후 데코레이터를 이용해 유효성검사를 할 수 있게된다.

// main.ts에서 선언한 ValidationPipe 와 Dto를 활용해 유효성검사를 할 수 있게되었다.