import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MoviesService {
    // Non Real Database!!!
    private movies: Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id: number): Movie {
        const moive = this.movies.find(movie => movie.id === id);
        if (!moive){
            throw new NotFoundException(`Not Found ID : ${id}`)
        }
        return moive;
    }

    deleteOne(id: number){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(data: CreateMovieDto){
        return this.movies.push({
            id: this.movies.length +1,
            ...data,
        })
    }

    update(id:number, movieData: UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...movieData}); 
    }

}
