import { Link } from 'react-router-dom';
import CardContainer from '../components/Layout/CardContainer';
import { watchlist } from '../utils/useShowState';
import { MdDelete } from 'react-icons/md';

const Watchlist = () => {
  const deleteWatchlistItem = show => {
    const updatedWatchlist = watchlist.value.filter(
      item => item.id !== show.id
    );
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    watchlist.value = updatedWatchlist;
  };

  return (
    <>
      <div className='flex items-center justify-between my-2'>
        <h1 className='my-2 px-5 text-3xl tracking-tight '>
          Favorites To Binge Wach
        </h1>
      </div>
      {watchlist.value.length > 0 ? (
        <div className=' ml-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 m-auto'>
          {watchlist.value.map(show => {
            return (
              <div key={show.id} className='relative'>
                <CardContainer>
                  <div className='absolute top-2 right-2 text-3xl cursor-pointer opacity-0 transition-opacity group-hover:opacity-100'>
                    <MdDelete
                      className='text-rose-500'
                      onClick={() => deleteWatchlistItem(show)}
                    />
                  </div>
                  <Link
                    to=''
                    className='max-w-[250px] md:max-w-[250px] lg:max-w-[200px] h-[30vh]'
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/t/p/w500/${show.poster_path}`}
                      alt={show.media_type === 'movie' ? show.title : show.name}
                      className='object-cover rounded-t-lg'
                    />
                  </Link>
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
        <p>No Favorites yet</p>
      )}
    </>
  );
};

export default Watchlist;
