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
    <div className=' flex justify-end items-center pr-3 my-1 mx-auto py-1'>
      <button
        className='border-gray-400 hover:border-white p-1 m-1 rounded-full
        bg-white cursor-pointer hover:bg-teal-600 hover:text-white disabled:pointer-events-none'
        onClick={() => decreasePage()}
        disabled={page.value <= 1 || disabled.value}
      >
        <MdOutlineSkipPrevious className='text-xl rounded-full' />
      </button>

      <div className='text-lg  rounded-full'>
        <span className='m-1 p-1'>{page.value}</span>
      </div>
      <button
        className='border-gray-400 hover:border-white p-1 m-0.5 rounded-full
        bg-white cursor-pointer hover:bg-teal-600 hover:text-white disabled:pointer-events-none'
        onClick={() => increasePage()}
        disabled={disabled.value}
      >
        <MdOutlineSkipNext className='text-xl rounded-full' />
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
