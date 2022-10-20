import React from 'react';
import {NavLink} from 'react-router-dom';

function Error() {
  return (
    <div className='container'>
        <h1 className='display-4'>Oopss! There is no such page is present!!!</h1>
        {/* <NavLink to='/'>Go to home</NavLink> */}
        <a href="/">Go to home</a>
    </div>
  );
}
export default Error;
