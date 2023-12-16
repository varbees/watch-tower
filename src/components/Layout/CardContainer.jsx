const CardContainer = ({ children }) => {
  return (
    <div className='group max-w-[250px] lg:max-w-[200px]  m-1 shadow-md hover:shadow-xl border border-gray-300 rounded-lg hover:scale-105 transition-transform dim-on-hover'>
      {children}
    </div>
  );
};

export default CardContainer;
