import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    sayhello(){
        return '앱 컨트롤러 동작';
    }
}
