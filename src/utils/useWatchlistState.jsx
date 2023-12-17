import { useSignal } from '@preact/signals-react';
import { watchlist } from './useShowState';
import { useMemo } from 'react';

const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

const useWatchlistState = () => {
  const selectedGenre = useSignal('');
  const searchShow = useSignal('');

  const filteredShows = useMemo(() => {
    if (!selectedGenre.value || selectedGenre.value === 'All')
      return watchlist.value;
    return watchlist.value.filter(show =>
      show.genre_ids.some(id => genres[id] === selectedGenre.value)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchlist.value, selectedGenre.value, searchShow.value]);

  const searchFilteredShows = filteredShows.filter(
    show =>
      show.original_title?.toLowerCase().includes(searchShow.value) ||
      show.original_name?.toLowerCase().includes(searchShow.value)
  );

  const allGenreIds = [
    ...new Set(watchlist.value.map(show => show.genre_ids).flat()),
  ];

  // other way using reduce
  // const allGenreIds = [
  //   ...new Set(
  //     watchlist.value.reduce((acc, val) => {
  //       acc.push(...val.genre_ids);
  //       return acc;
  //     }, [])
  //   ),
  // ];

  const genreNames = allGenreIds
    .map(id => genres[id])
    .filter(names => names !== undefined);

  return [genreNames, selectedGenre, searchShow, searchFilteredShows];
};

export default useWatchlistState;
