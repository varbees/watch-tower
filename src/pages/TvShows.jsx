import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import useShowState from '../utils/useShowState';
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md';
import CardContainer from '../components/Layout/CardContainer';

const TvShows = () => {
  const showPagination = window.location.pathname === '/tv';
  const [shows, page, watchlist, loading, toggleWatchlistItem] =
    useShowState('tv');
  const watchlistIds = watchlist.value.map(tv => tv.id);
  return (
    <>
      <div className='flex items-center justify-between my-4'>
        <h1 className='px-5 text-3xl tracking-tight  mb-2'>Trending Shows</h1>
        {showPagination && <Pagination page={page} disabled={loading} />}
      </div>
      {shows.value.length > 0 ? (
        <>
          <div className=' ml-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 m-auto'>
            {shows.value.map(show => {
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
                        alt={show.name}
                        className='object-cover rounded-t-lg'
                      />
                    </Link>
                    <div
                      style={{}}
                      className='absolute top-1 right-1 text-3xl cursor-pointer opacity-0 transition-opacity group-hover:opacity-100'
                    >
                      {watchlistIds.includes(show.id) ? (
                        <MdBookmark
                          className='text-red-400'
                          onClick={() => toggleWatchlistItem(show)}
                          title='Remove from watchlist '
                        />
                      ) : (
                        <MdBookmarkBorder
                          className='text-red-500'
                          onClick={() => toggleWatchlistItem(show)}
                          title='Add to watchlist '
                        />
                      )}
                    </div>
                    <div className='p-2'>
                      <h4 className='mb-1 tracking-tighter text-sm md:text-md'>
                        <Link to=''>
                          <p
                            className='text-gray-900 truncate max-w-xs block'
                            title={show.name}
                          >
                            {show.name}
                          </p>
                        </Link>
                      </h4>
                      <div className='flex justify-between items-center text-sm '>
                        <span className='text-[14px]'>
                          {show.first_air_date
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
                            <p className='border border-gray-400 text-gray-600 text-xs px-1 py-0.5 rounded-sm uppercase'>
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
        </>
      ) : (
        <Loader />
      )}
      <Pagination page={page} disabled={loading} />
    </>
  );
};

export default TvShows;
