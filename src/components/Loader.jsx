const Loader = () => {
  return (
    <div role='status' className='h-[80vh] flex justify-center items-center'>
      <div className='flex gap-2'>
        <div className='w-5 h-5 rounded-full animate-pulse bg-teal-600'></div>
        <div className='w-5 h-5 rounded-full animate-pulse bg-teal-600'></div>
        <div className='w-5 h-5 rounded-full animate-pulse bg-teal-600'></div>
      </div>
    </div>
  );
};

export default Loader;
