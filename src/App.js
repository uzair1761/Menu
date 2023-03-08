import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCatagories = ['all', ...new Set (items.map((item)=>item.category))]
  const [menuItem,setManuitem] =useState(items);
  const [catagories,setcatagories] =useState(allCatagories);

  const filterItem =(catagory)=>{
    if(catagory === 'all'){
      setManuitem(items)
      return 
    }
  const Newitem =items.filter((item)=> item.category === catagory
  )
  setManuitem(Newitem);
  }



  return <main>
    <section className='menu section'>
      <div className='title'>
       <h2>our Menu item</h2>
       <div className='underline'></div>
      </div>
      <Categories catagories={catagories}  filterItem={filterItem}/>
      <Menu  items={menuItem}/>

    </section>
  </main>;
 
}

export default App;
