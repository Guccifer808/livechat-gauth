import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 flex justify-between'>
      <a className='btn btn-ghost normal-case text-xl'>LiveChat</a>
      <button className='btn'>Logout</button>
    </div>
  );
};

export default Navbar;
