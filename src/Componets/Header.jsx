import React from 'react';
import weatherIcon from '../Assets/logo.webp'; 

export default function Header() {
  return (
    <div className='sticky top-0'>
      <header>
        <nav className='h-16 p-4 sticky shadow-lg flex justify-center items-center bg-gray-900 text-4xl italic text-white'>
          <img src={weatherIcon} alt="Weather Icon" className="h-12 w-12" />
         <span className=' hover:text-gray-700 cursor-pointer'> Weather App</span>
        </nav>
      </header>
    </div>
  );
}
