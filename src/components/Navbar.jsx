import { Link } from 'react-router-dom';
import Logo from '../assets/tower.png';
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <Link to='/'>
        <img src={Logo} alt='Watch Tower Movies' className='w-[50px]' />
      </Link>
      <Link to='/movies' className='text-teal-600'>
        Movies
      </Link>
      <Link to='/watchlist' className='text-teal-600'>
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
