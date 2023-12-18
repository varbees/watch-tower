import { useSignal } from '@preact/signals-react';
import { banners } from '../utils/useShowState';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Banner = () => {
  const curInd = useSignal(0);

  const preloadNext = () => {
    const nextIndex = curInd.value + 1;
    if (nextIndex < banners.value.length) {
      const nextBanner = banners.value[nextIndex]?.backdrop_path;
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/original/${nextBanner}`;
    }
  };

  return (
    <div className='relative max-w-auto mx-auto w-full m-auto  '>
      {banners.value.length > 0 && (
        <div>
          <div
            className='w-full bg-cover bg-top bg-no-repeat aspect-[16/12] sm:aspect-[16/9] lg:aspect-[12/5] xl:aspect-[14/6]  rounded-sm brightness-75 duration-500'
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                banners.value[curInd.value]?.backdrop_path
              })`,
            }}
          ></div>
          <div className='absolute bottom-[60px] right-5 text-white text-2xl md:text-3xl lg:text-4xl brightness-125 font-semibold py-2 px-3 bg-black/60 rounded-md italic duration-1000 select-none'>
            {banners.value[curInd.value]?.title}
          </div>
          <div
            className='absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/60 duration-500 select-none'
            onClick={() =>
              curInd.value === 0
                ? (curInd.value = banners.value.length - 1)
                : curInd.value--
            }
          >
            <BsChevronCompactLeft />
          </div>
          <div
            className='absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/60 duration-500 select-none'
            onClick={() => {
              curInd.value < banners.value.length - 1
                ? curInd.value++
                : (curInd.value = 0);
              preloadNext();
            }}
          >
            <BsChevronCompactRight />
          </div>
          <div className='flex text-2xl top-4 justify-center pt-2 pb-1'>
            {banners.value.map((_, index) => (
              <RxDotFilled
                key={index}
                className={`mx-1  cursor-pointer select-none ${
                  curInd.value === index ? 'text-black' : 'text-gray-500'
                }`}
                onClick={() => (curInd.value = index)}
              />
            ))}
          </div>{' '}
        </div>
      )}
    </div>
  );
};

export default Banner;
