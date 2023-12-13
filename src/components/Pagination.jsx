import PropTypes from 'prop-types';
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from 'react-icons/md';

const Pagination = ({ page, disabled }) => {
  const decreasePage = () => {
    page.value = page.value > 1 ? page.value - 1 : 1;
  };
  const increasePage = () => {
    page.value += 1;
  };
  return (
    <div className='flex justify-end items-center my-1 mx-2 pr-5 text-xl md:text-2xl align-text-top'>
      <button
        className='border-gray-400 hover:border-white p-1 m-1 rounded-full
        bg-white cursor-pointer hover:bg-teal-600 hover:text-white disabled:pointer-events-none'
        onClick={() => decreasePage()}
        disabled={page.value <= 1 || disabled.value}
      >
        <MdOutlineSkipPrevious />
      </button>

      <div className='text-lg rounded-full'>
        <span className='m-1 p-1'>{page.value}</span>
      </div>
      <button
        className='border-gray-400 hover:border-white p-1 m-0.5 rounded-full
        bg-white cursor-pointer hover:bg-teal-600 hover:text-white disabled:pointer-events-none'
        onClick={() => increasePage()}
        disabled={disabled.value}
      >
        <MdOutlineSkipNext />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }),
  disabled: PropTypes.shape({
    value: PropTypes.bool.isRequired,
  }),
};

export default Pagination;
