import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className='container'>
        <h1 className='display-4'>Oopss! There is no such page is present!!!</h1>
        <Link to='/'>Go to home</Link>
    </div>
  );
}
export default Error;
