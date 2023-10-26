import { Series } from '../model/serie';
import { serieSelector } from './seriesList';

describe('Given a series list', (): void => {
  describe('When score=0, it is a pending serie.', (): void => {
    test('Should separate the series on watched and pending', (): void => {
      const data: Series[] = [
        {
          id: 1,
          score: 0,
          year: 1980,
          poster: 'ljk',
          watched: false,
          name: 'hjlk',
          creator: 'jkh',
        },
        {
          id: 2,
          score: 3,
          year: 1980,
          poster: 'ljk',
          watched: true,
          name: 'hjlk',
          creator: 'jkh',
        },
        {
          id: 3,
          score: 0,
          year: 1980,
          poster: 'ljk',
          watched: false,
          name: 'hjlk',
          creator: 'jkh',
        },
      ];

      const result = serieSelector(data);

      expect(result).toStrictEqual({
        watchedSerie: [
          {
            id: 2,
            score: 3,
            year: 1980,
            poster: 'ljk',
            watched: true,
            name: 'hjlk',
            creator: 'jkh',
          },
        ],
        pendingSerie: [
          {
            id: 1,
            score: 0,
            year: 1980,
            poster: 'ljk',
            watched: false,
            name: 'hjlk',
            creator: 'jkh',
          },
          {
            id: 3,
            score: 0,
            year: 1980,
            poster: 'ljk',
            watched: false,
            name: 'hjlk',
            creator: 'jkh',
          },
        ],
      });
    });
  });
});
