import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import useShowState from '../utils/useShowState';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import CardContainer from '../components/Layout/CardContainer';

const Movies = () => {
  const [movies, page, watchlist, loading, toggleWatchlistItem] =
    useShowState('movie');

  return (
    <div className=''>
      <h1 className='my-2 pl-3 text-3xl tracking-tight '>Trending Movies</h1>
      <Pagination page={page} disabled={loading} />
      {movies.value.length > 0 ? (
        <>
          <div className=' ml-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 m-auto'>
            {movies.value.map(movie => {
              return (
                <div key={movie.id} className='relative group'>
                  <CardContainer>
                    <div className='absolute top-2 right-2 text-3xl cursor-pointer opacity-0 transition-opacity group-hover:opacity-100'>
                      {watchlist.value.includes(movie.id) ? (
                        <MdBookmark
                          className='text-fuchsia-300'
                          onClick={() => toggleWatchlistItem(movie.id)}
                        />
                      ) : (
                        <MdBookmarkBorder
                          className='text-teal-100'
                          onClick={() => toggleWatchlistItem(movie.id)}
                        />
                      )}
                    </div>

                    <Link
                      to=''
                      className='max-w-[250px] md:max-w-[250px] lg:max-w-[200px] h-[30vh]'
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className='object-cover rounded-t-lg'
                      />
                    </Link>
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
                            <p className='border border-gray-400 text-gray-600 text-xs px-1 py-0.5 rounded-sm'>
                              Movie
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
