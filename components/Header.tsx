import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
          <img
            className='w-44 object-contain cursor-pointer'
            src='https://links.papareact.com/yvf'
            alt='logo'
          />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
          <button className='hover:text-green-600'>About</button>
          <button className='hover:text-green-600'>Contact</button>
          <button className='text-white bg-green-600 px-4 py-1 rounded-full hover:text-green-600 hover:border hover:border-green-600 hover:bg-white'>
            Follow
          </button>
        </div>
      </div>

      <div className='flex items-center space-x-5 text-green-600'>
        <button className='hover:text-black'>Sign In</button>
        <button className='border px-4 py-1 rounded-full border-green-600 hover:border-black hover:text-black'>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
