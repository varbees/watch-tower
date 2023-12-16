import { useSignal } from '@preact/signals-react';
import { banners } from '../pages/Movies';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Banner = () => {
  const curInd = useSignal(0);

  return (
    <div className='relative max-w-auto mx-auto w-full m-auto  '>
      <div
        className='w-full bg-cover bg-center bg-no-repeat aspect-[16/14] sm:aspect-[16/8] lg:aspect-[16/7]  rounded-sm brightness-50 duration-500'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            banners.value[curInd.value]
          })`,
        }}
      ></div>
      <div
        className='absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 duration-300'
        onClick={() =>
          curInd.value === 0
            ? (curInd.value = banners.value.length - 1)
            : curInd.value--
        }
      >
        <BsChevronCompactLeft />
      </div>
      <div
        className='absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 duration-300'
        onClick={() =>
          curInd.value < banners.value.length - 1
            ? curInd.value++
            : (curInd.value = 0)
        }
      >
        <BsChevronCompactRight />
      </div>
      <div className='flex text-2xl top-4 justify-center pt-2 pb-1'>
        {banners.value.map((_, index) => (
          <RxDotFilled
            key={index}
            className={`mx-1  cursor-pointer ${
              curInd.value === index ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => (curInd.value = index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
