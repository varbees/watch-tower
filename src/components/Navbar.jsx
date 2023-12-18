import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/tower.png';
import { useSignal } from '@preact/signals-react';
import { useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const currentLocation = useSignal(location.pathname);

  useEffect(() => {
    currentLocation.value = location.pathname;
  }, [location]);

  return (
    <div className='flex justify-between items-center border'>
      <div className='flex space-x-6 items-center pl-3 py-4'>
        <Link to='/'>
          <img src={Logo} alt='Watch Tower Movies' className='w-[50px]' />
        </Link>
        <Link
          to='/movies'
          className={`text-teal-600 hover:text-teal-600  p-2 rounded-md  duration-300 ${
            currentLocation.value === '/movies' && ' bg-black/90 text-teal-400'
          }`}
        >
          Movies
        </Link>
        <Link
          to='/tv'
          className={`text-teal-600 hover:text-teal-600  p-2 rounded-md  duration-300 ${
            currentLocation.value === '/tv' && ' bg-black/90 text-teal-400'
          }`}
        >
          TV
        </Link>
        <Link
          to='/watchlist'
          className={`text-teal-600 hover:text-teal-600  p-2 rounded-md  duration-300 ${
            currentLocation.value === '/watchlist' &&
            ' bg-black/90 text-teal-400'
          }`}
        >
          Watchlist
        </Link>
      </div>
      <div className='space-x-8 pr-3 py-4'>
        <Link
          to='/about'
          className={`text-teal-600 hover:text-teal-600  p-2 rounded-md  duration-300 ${
            currentLocation.value === '/about' && ' bg-black/90 text-teal-400'
          }`}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
