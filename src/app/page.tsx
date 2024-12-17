"use client";

import React from 'react';
import InstagramEmbed from '@/components/InstagramEmbed';
import TikTokEmbed from '@/components/TikTokEmbed';

export default function Home() {  return (
    <main className='mx-auto pt-10 pb-20 sm:pb-40'>
        <header className='font-zyHeaven text-white text-center text-4xl sm:text-5xl select-none'>
          Luis Hidalgo
        </header>
        <a href="mailto:luis.hidalgo@bruh.com" target="_blank">
          <p className='font-inter text-center text-md text-white'>
          luis.hidalgo@bruh.com
          </p>
        </a>
      <div className="flex justify-center flex-row gap-12 pt-10">
        <div className='flex flex-col gap-4'>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=2"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=3"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=4"
                className='w-1/2.5 h-[190px]'>
              </iframe>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
          <InstagramEmbed />
          <TikTokEmbed />
        </div>
      </div>
      <div className='flex justify-center pt-16'>
        <p className='text-xs mt-auto font-bold text-white'>
          built by <a href="https://mustaeen.dev/" target="_blank" className='hover:underline'>must</a>
        </p>
      </div>
    </main>
  );
}

// UUQzQF3X3qyESt5Tz99DOpxA