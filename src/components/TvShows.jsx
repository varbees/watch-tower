import { Link } from 'react-router-dom';
import Loader from './Loader';
import Pagination from './Pagination';
import useShowState from '../utils/useShowState';

const TvShows = () => {
  const [shows, page, loading] = useShowState('tv');
  return (
    <div className=''>
      <h1 className='my-2 pl-3 text-3xl tracking-tight '>Trending Movies</h1>
      <Pagination page={page} disabled={loading} />
      {shows.value.length > 0 ? (
        <>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 m-auto'>
            {shows.value.map(show => {
              return (
                <div
                  key={show.id}
                  className='max-w-[250px] lg:max-w-[200px]  m-2 overflow-hidden shadow-lg border border-gray-300 rounded-lg hover:scale-105 transition-transform'
                >
                  <Link
                    to=''
                    className='max-w-[250px] md:max-w-[250px] lg:max-w-[200px] h-[30vh]'
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/t/p/w500/${show.poster_path}`}
                      alt={show.title}
                      className='object-cover rounded-t-lg'
                    />
                  </Link>
                  <div className='p-2  '>
                    <h4 className='mb-1   tracking-tighter '>
                      <Link to=''>
                        <span
                          className='text-gray-900 truncate max-w-xs block'
                          title={show.title}
                        >
                          {show.title}
                        </span>
                      </Link>
                    </h4>
                    <div className='flex justify-between items-center text-sm '>
                      <p className='mr-1'>
                        {show.first_air_date.split('-')[0]}
                      </p>
                      <div>
                        <div className='flex items-center gap-1'>
                          <span className='text-[12px]'>
                            {show.vote_average > 0
                              ? show.vote_average.toFixed(1)
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

export default TvShows;
