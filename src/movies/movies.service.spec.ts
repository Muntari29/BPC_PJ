import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll_Test_movie_service', () => {
    it('should return an Array', async () => {
      const result = await service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  });

  describe('getOne_Test_movie_service', () => {
    it('shoudl return a movie', async () => {
      service.create({
        title: 'Test movie',
        year: 2025,
        genres: ['Test']
      });
      const movie = await service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
      expect(movie.title).toEqual('Test movie');
    });
    it('should throw 404 error', async () => {
      try {
        await service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.status).toEqual(404);
        expect(e.message).toEqual('Not Found ID : 999');
      }
    });
  });

  describe('delete_Test_movie_service', () => {
    it('should be delete movie', async () => {
      await service.create({
        title: 'Test movie',
        year: 2025,
        genres: ['Test']
      });
      const beforeDelete = await service.getAll().length; //1
      await service.deleteOne(1);
      const afterDelete = await service.getAll().length; // 0
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it('should throw 404 error => getOne_error', async () => {
      try {
        await service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.status).toEqual(404);
      }
    });
  });

  describe('create_Test_movie_service', () => {
    it('create_Done', async () => {
      const beforeData = await service.getAll().length;
      const movie = await service.create({
        title: 'Test movie',
        year: 2025,
        genres: ['Test']
      });
      const afterData = await service.getAll().length;
      expect(movie).toBeDefined();
      expect(beforeData).toBeLessThan(afterData);
    });
  });

  describe('update_Test_movie_servie', () => {
    it('update_Done', async () => {
      await service.create({
        title: 'Test movie',
        year: 2025,
        genres: ['Test']
      });
      await service.update(1, {year : 2000});
      const movie = await service.getOne(1);
      expect(movie.year).toEqual(2000);
    })

    it('should throw 404 error => getOne_error', async () => {
      try {
        await service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.status).toEqual(404);
      }
    });
  })
});
