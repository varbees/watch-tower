import Logo from '../assets/tower.png';

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row  my.05 p-4 text-gray-800 text-sm justify-between '>
      <div className='w-[20%]  hidden lg:block'>
        <img src={Logo} alt='watch tower' className='w-[60px] object-cover' />
        <p className='text-xs mt-2'>© Watch Tower</p>
      </div>
      <div className='float-right text-left width-[45%] md:mx-[80px]'>
        <p className='line-height-[1.3rem] pr-6'>
          Watch Tower is a movie browsing app. Powered by the magic of TMDB,
          browse movies and shows and save them to your watchlist! Discover a
          whole new universe of cinematic delights, seamlessly built with
          React.js and Tailwind CSS.
        </p>
        <p className='line-height-[1.3rem] pr-6 mt-1 italic tracking-tight'>
          Watch Tower is crafted with Preact signals for a lightning-fast
          experience.
        </p>
      </div>
      <div className='ml-10 pt-4 sm:pt-0 width-[35%] text-right pr-2'>
        <p>
          Made by{' '}
          <a
            href='https://github.com/varbees'
            className='text-blue-500'
            target='_blank'
            rel='noreferrer'
          >
            @varbees
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
