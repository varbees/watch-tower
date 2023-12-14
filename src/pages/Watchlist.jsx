import { Link } from 'react-router-dom';
import CardContainer from '../components/Layout/CardContainer';
import { watchlist } from '../utils/useShowState';
import { MdDelete } from 'react-icons/md';
import { useSignal } from '@preact/signals-react';
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

const Watchlist = () => {
  const allGenreIds = [
    ...new Set(watchlist.value.map(show => show.genre_ids).flat()),
  ];
  const allGenreNames = allGenreIds
    .map(genreId => genres[genreId])
    .filter(names => names !== undefined);

  const selectedGenre = useSignal('');
  console.log(selectedGenre.value);
  const handleGenreChange = e => {
    selectedGenre.value = e.target.value;
    console.log(selectedGenre.value);
  };

  const filteredShows = useMemo(() => {
    if (!selectedGenre.value || selectedGenre.value === 'All')
      return watchlist.value;
    return watchlist.value.filter(show =>
      show.genre_ids.some(id => genres[id] === selectedGenre.value)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchlist.value, selectedGenre.value]);

  const deleteWatchlistItem = show => {
    const updatedWatchlist = watchlist.value.filter(
      item => item.id !== show.id
    );
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    watchlist.value = updatedWatchlist;
  };

  return (
    <>
      <div className='flex items-center justify-between my-2 pr-4 lg:pr-7'>
        <h1 className='my-2 px-5 text-3xl tracking-tight '>
          Favorites To Binge Watch
        </h1>

        <select
          id='genres'
          className='w-[30%] md:w-[12%] lg:w-[10%] bg-teal-50 border border-teal-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block  p-2.5'
          value={selectedGenre.value}
          onChange={handleGenreChange}
          title='Genre'
        >
          <option value='All'>All</option>
          {allGenreNames.map(genreName => (
            <option key={genreName} value={genreName}>
              {genreName}
            </option>
          ))}
        </select>
      </div>
      {filteredShows.length > 0 ? (
        <div className=' ml-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 m-auto'>
          {filteredShows.map(show => {
            return (
              <div key={show.id} className='relative'>
                <CardContainer>
                  <Link
                    to=''
                    className='max-w-[250px] md:max-w-[250px] lg:max-w-[200px] h-[30vh]'
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/t/p/w500/${show.poster_path}`}
                      alt={show.media_type === 'movie' ? show.title : show.name}
                      className='object-cover rounded-t-lg '
                    />
                  </Link>
                  <div className='absolute top-1 right-1 text-3xl cursor-pointer opacity-0 transition-opacity group-hover:opacity-100'>
                    <MdDelete
                      className='text-rose-500'
                      onClick={() => deleteWatchlistItem(show)}
                      title='Delete from watchlist'
                    />
                  </div>
                  <div className='p-2'>
                    <h4 className='mb-1 tracking-tighter text-sm md:text-md'>
                      <Link to=''>
                        <p
                          className='text-gray-900 truncate max-w-xs block'
                          title={
                            show.media_type === 'movie' ? show.title : show.name
                          }
                        >
                          {show.media_type === 'movie' ? show.title : show.name}
                        </p>
                      </Link>
                    </h4>
                    <div className='flex justify-between items-center text-sm '>
                      <span className='text-[14px]'>
                        {show.media_type === 'movie'
                          ? show.release_date.split('-')[0]
                          : show.first_air_date
                          ? show.first_air_date.split('-')[0]
                          : 'NA'}
                      </span>

                      <div>
                        <div className='flex items-center gap-1'>
                          <span className='text-[12px]'>
                            {show.vote_average > 0
                              ? show.vote_average.toFixed(1)
                              : 'NA'}
                            /10
                          </span>
                          <p
                            className={`border border-gray-400 text-gray-600 text-xs px-1 py-0.5 rounded-sm ${
                              show.media_type === 'movie'
                                ? 'capitalize'
                                : 'uppercase'
                            }`}
                          >
                            {show.media_type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='flex items-center justify-center h-1/2'>
          <p className='pt-24 text-2xl font-light'>Clear as a sunny 🌞 day!!</p>
        </div>
      )}
    </>
  );
};

export default Watchlist;
