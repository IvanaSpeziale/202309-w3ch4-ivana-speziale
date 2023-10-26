import { type Series } from '../model/serie';

export const serieSelector = (data: Series[]) => {
  const watchedSerie = data.filter((serie: Series) => serie.score > 0);
  const pendingSerie = data.filter((serie: Series) => serie.score === 0);
  return { watchedSerie, pendingSerie };
};
