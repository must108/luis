"use client";

import React from 'react';

export default function Home() {  return (
    <main className='max-w-screen-md mx-auto pt-10 pb-40 '>
        <header className='font-zyHeaven text-white text-center text-4xl sm:text-5xl select-none'>
          Luis Hidalgo
        </header>
        <a href="mailto:luis.hidalgo@bruh.com" target="_blank">
          <p className='font-inter text-center text-md text-white'>
          luis.hidalgo@bruh.com
          </p>
        </a>
      <div className="flex flex-col gap-6 pt-6">
        <div className='flex flex-col'>
            <div className='relative pb-5'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
            <div className='relative pb-5'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=2"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
            <div className='relative pb-5'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=3"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
            <div className='relative pb-5'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=4"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
        </div>
      </div>
    </main>
  );
}

// UUQzQF3X3qyESt5Tz99DOpxA