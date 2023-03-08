import React from 'react';

const Categories = ({catagories, filterItem}) => {
  
  return (
    <div className='btn-container' >
    {catagories.map((catagory,index)=>{
      return <button type='button' className='filter-btn' onClick={()=>filterItem(catagory)} key={index}>{catagory}</button>

    })}
     
     </div>
  );
};

export default Categories;
