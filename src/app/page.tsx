"use client";

import React from 'react';

export default function Home() {  return (
    <main className='w-full flex justify-center align-items pt-10 pb-40'>
      <div className="flex flex-col gap-6">
        <header className='font-ZYHeaven text-4xl sm:text-5xl select-none'>
          Luis Hidalgo
        </header>
        <div className='relative pb-[56.25%] h-0'>
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA"
            className='absolute top-0 left-0 w-full h-full'>
          </iframe>
        </div>
        <div className='relative pb-[56.25%] h-0'>
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=2"
            className='absolute top-0 left-0 w-full h-full'>
          </iframe>
        </div>
        <div className='relative pb-[56.25%] h-0'>
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=3"
            className='absolute top-0 left-0 w-full h-full'>
          </iframe>
        </div>
        <div className='relative pb-[56.25%] h-0'>
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=4"
            className='absolute top-0 left-0 w-full h-full'>
          </iframe>
        </div>
      </div>
    </main>
  );
}

// UUQzQF3X3qyESt5Tz99DOpxA