import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get('search')
    movieSearch(@Query('year') searchingData:string){
        return `Get Search year : ${searchingData}`
    }

    @Get(':id')
    getmovieid(@Param('id') movieId:string){
        return `Get movieID : ${movieId}`
    }

    @Post('post')
    create(@Body() data){
        return `Post body : ${data}`
    }
}
