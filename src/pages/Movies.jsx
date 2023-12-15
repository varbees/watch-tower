import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import useShowState from '../utils/useShowState';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import CardContainer from '../components/Layout/CardContainer';

const Movies = () => {
  const [movies, page, watchlist, loading, toggleWatchlistItem] =
    useShowState('movie');
  const watchlistIds = watchlist.value.map(movie => movie.id);
  return (
    <div>
      <div className='flex items-center justify-between my-2'>
        <h1 className='px-5 text-3xl tracking-tight '>Trending Movies</h1>
        <Pagination page={page} disabled={loading} />
      </div>
      {movies.value.length > 0 ? (
        <>
          <div className=' ml-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 m-auto'>
            {movies.value.map(movie => {
              return (
                <div key={movie.id} className='relative'>
                  <CardContainer>
                    <Link
                      to=''
                      className='aspect-[9/12] block relative max-w-[250px] md:max-w-[250px] lg:max-w-[220px]'
                    >
                      <img
                        loading='lazy'
                        src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className={`object-cover rounded-t-lg`}
                      />
                    </Link>

                    <div className='absolute top-1 right-1 text-3xl cursor-pointer opacity-0 transition-opacity group-hover:opacity-100'>
                      {watchlistIds.includes(movie.id) ? (
                        <MdBookmark
                          className='text-red-400'
                          onClick={() => toggleWatchlistItem(movie)}
                          title='Remove from watchlist'
                        />
                      ) : (
                        <MdBookmarkBorder
                          className='text-red-500'
                          onClick={() => toggleWatchlistItem(movie)}
                          title='Add to watchlist'
                        />
                      )}
                    </div>

                    <div className='p-2'>
                      <h4 className='mb-1 tracking-tighter text-sm md:text-md'>
                        <Link to=''>
                          <span
                            className='text-gray-900 truncate max-w-xs block'
                            title={movie.title}
                          >
                            {movie.title}
                          </span>
                        </Link>
                      </h4>
                      <div className='flex justify-between items-center text-sm '>
                        <p className='mr-1'>
                          {movie.release_date.split('-')[0]}
                        </p>
                        <div>
                          <div className='flex items-center gap-1'>
                            <span className='text-[12px]'>
                              {movie.vote_average > 0
                                ? movie.vote_average.toFixed(1)
                                : 'NA'}
                              /10
                            </span>
                            <p className='border border-gray-400 text-gray-600 text-xs px-1 py-0.5 rounded-sm capitalize'>
                              {movie.media_type}
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
        </>
      ) : (
        <Loader />
      )}
      <Pagination page={page} disabled={loading} />
    </div>
  );
};

export default Movies;
