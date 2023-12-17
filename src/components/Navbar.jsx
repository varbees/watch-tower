import { Link } from 'react-router-dom';
import Logo from '../assets/tower.png';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center border'>
      <div className='flex space-x-8 items-center pl-3 py-4'>
        <Link to='/'>
          <img src={Logo} alt='Watch Tower Movies' className='w-[50px]' />
        </Link>
        <Link to='/movies' className='text-teal-600'>
          Movies
        </Link>
        <Link to='/tv' className='text-teal-600'>
          TV Shows
        </Link>
        <Link to='/watchlist' className='text-teal-600'>
          Watchlist
        </Link>
      </div>
      <div className='space-x-8 pr-3 py-4'>
        <Link to='/about' className='text-teal-600'>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
