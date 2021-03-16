import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Module, Controller } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule {}
