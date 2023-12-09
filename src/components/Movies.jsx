import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import Loader from './Loader';
import Pagination from './Pagination';
import { signal } from '@preact/signals-react';
import axios from 'axios';
import { useEffect } from 'react';

const movies = signal([]);
const page = signal(1);
const loading = signal(false);

const Movies = () => {
  useEffect(() => {
    async function getAllMovies() {
      movies.value = [];
      loading.value = true;
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=6ed9eba4505892b51f147b962cf7acfc`
      );
      movies.value = res.data.results;
      page.value = res.data.page;
      loading.value = false;
    }

    getAllMovies();
  }, [page.value]);
  return (
    <div className=''>
      <h1 className='my-2 pl-3 text-3xl tracking-tight '>Trending Movies</h1>
      <Pagination page={page} disabled={loading} />
      {movies.value.length > 0 ? (
        <>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 m-auto'>
            {movies.value.map(movie => {
              return (
                <div
                  key={movie.id}
                  className='max-w-[250px] lg:max-w-[200px]  m-2 overflow-hidden shadow-lg border border-gray-300 rounded-lg hover:scale-105 transition-transform'
                >
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
                  <div className='p-2  '>
                    <h4 className='mb-1   tracking-tighter '>
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
                      <div className='flex items-center gap-1'>
                        <p className='mr-1'>
                          {movie.release_date.split('-')[0]}
                        </p>
                        {/* <span className='text-xs'>
                  <FaRegStar />
                </span> */}
                        <span>
                          {movie.vote_average > 0 ? movie.vote_average : 'NA'}
                          /10
                        </span>
                      </div>
                      <div>
                        <p className='border border-gray-400 text-gray-600 text-xs px-1 py-0.5 rounded-sm'>
                          Movie
                        </p>
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

export default Movies;
