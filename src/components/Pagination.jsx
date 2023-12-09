const Pagination = ({ page, disabled }) => {
  const decreasePage = () => {
    page.value = page.value > 1 ? page.value - 1 : 1;
  };
  const increasePage = () => {
    page.value += 1;
  };
  return (
    <div className='flex justify-center items-center p-2 my-2 text-lg '>
      <button
        className='mx-8 px-2 py-0.5  border-2 border-gray-200 text-gray-400 hover:text-gray-500
        bg-white hover:border-gray-400 cursor-pointer disabled:opacity-75'
        onClick={() => decreasePage()}
        disabled={disabled.value}
      >
        prev
      </button>
      <div className='mx-8 text-lg rounded-full'>
        <span>{page}</span>
      </div>
      <button
        className='mx-8 px-2 py-0.5  border-2 border-gray-200 text-gray-400 hover:text-gray-500
        bg-white hover:border-gray-400 cursor-pointer disabled:opacity-75'
        onClick={() => increasePage()}
        disabled={disabled.value}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
