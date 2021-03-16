import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(readonly MoviesService: MoviesService){}

    @Get()
    getAll(): Movie []{
        return this.MoviesService.getAll();
    }

    // @Get('search')
    // movieSearch(@Query('year') searchingData:string){
    //     return `Get Search year : ${searchingData}`
    // }

    @Get(':id')
    getOne(@Param('id') movieId:number): Movie{
        return this.MoviesService.getOne(movieId);
    }

    @Post('post')
    create(@Body() data:CreateMovieDto){
        return this.MoviesService.create(data);
    }

    @Delete(':id')
    deleteOne(@Param('id') movieId:number){
        return this.MoviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId:number, @Body() movieData:UpdateMovieDto){
        return this.MoviesService.update(movieId, movieData)
    }
}
