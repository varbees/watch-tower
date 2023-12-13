import { Link } from 'react-router-dom';
import snow from '../assets/snow.gif';
import { FaSnowflake } from 'react-icons/fa';

const NotFound = () => {
  document.body.classList.add('overflow-hidden');
  return (
    <div className='relative '>
      <img
        src={snow}
        alt='Snow in darkness'
        className='object-cover w-full h-screen blur-sm'
      />
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center text-teal-500 flex flex-col items-center'>
        <FaSnowflake className='text-8xl mb-10 animate-pulse duration-1000' />
        <h1 className='text-5xl font-bold mb-4'>Lost in a blizzard</h1>
        <p className='text-lg'>
          Go Back
          <Link to='/' className='font-bold hover:text-white'>
            {' '}
            Home
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
