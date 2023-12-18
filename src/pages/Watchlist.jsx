import { Link } from 'react-router-dom';
import CardContainer from '../components/Layout/CardContainer';
import { watchlist } from '../utils/useShowState';
import { MdDelete } from 'react-icons/md';
import useWatchlistState from '../utils/useWatchlistState';

const Watchlist = () => {
  const [genreNames, selectedGenre, searchShow, searchFilteredShows] =
    useWatchlistState();

  const deleteWatchlistItem = show => {
    const updatedWatchlist = watchlist.value.filter(
      item => item.id !== show.id
    );
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    watchlist.value = updatedWatchlist;
  };

  return (
    <>
      <div className='flex items-center justify-between flex-col md:flex-row my-2 p-4 lg:pr-7 text-center'>
        <h1 className='my-1 mt-4 px-4 text-3xl tracking-tight w-full md:w-[30%] md:text-left'>
          Binge Watch
        </h1>
        <div className='w-[50%]'>
          <input
            type='text'
            className='text-xs sm:text-sm border-2 w-full md:w-[75%] border-teal-700 focus:border-gray-300 text-center p-2 my-2 rounded-md'
            placeholder='Search for Movies/TV Shows'
            value={searchShow.value}
            onChange={e => (searchShow.value = e.target.value)}
          />
        </div>
        <select
          id='genres'
          className='w-[30%] md:w-[12%] lg:w-[10%] bg-teal-50 border border-teal-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block  p-2.5'
          value={selectedGenre.value}
          onChange={e => (selectedGenre.value = e.target.value)}
          title='Genre'
        >
          <option value='All'>All</option>
          {genreNames.map(genreName => (
            <option key={genreName} value={genreName}>
              {genreName}
            </option>
          ))}
        </select>
      </div>
      {searchFilteredShows.length > 0 ? (
        <div className='ml-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 m-auto'>
          {searchFilteredShows.map(show => {
            return (
              <div key={show.id} className='relative'>
                <CardContainer>
                  <Link
                    to=''
                    className='aspect-[9/12] block relative max-w-[250px] md:max-w-[250px] lg:max-w-[220px]'
                  >
                    <img
                      loading='lazy'
                      src={`https://image.tmdb.org/t/p/original/t/p/w500/${show.poster_path}`}
                      alt={show.media_type === 'movie' ? show.title : show.name}
                      className='object-cover rounded-t-lg '
                    />
                  </Link>
                  <div className='absolute top-1 right-1 text-3xl cursor-pointer opacity-0 transition-opacity group-hover:opacity-100 select-none'>
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
        <div className='flex flex-col items-center justify-center h-[50vh]'>
          <p className='text-center text-9xl'>🤷</p>
          <p className='pt-2 text-2xl font-light'>Nope, not here!</p>
        </div>
      )}
    </>
  );
};

export default Watchlist;
