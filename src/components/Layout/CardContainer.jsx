const CardContainer = ({ children }) => {
  return (
    <div className='max-w-[250px] lg:max-w-[200px]  m-2 overflow-hidden shadow-md hover:shadow-xl border border-gray-300 rounded-lg hover:scale-105 transition-transform'>
      {children}
    </div>
  );
};

export default CardContainer;
