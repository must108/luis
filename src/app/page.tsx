"use client";

import React from 'react';
import InstagramEmbed from '@/components/InstagramEmbed';
import TikTokEmbed from '@/components/TikTokEmbed';
import AdComponent from '@/components/AdComponent';

export default function Home() {  return (
    <main className='mx-auto pt-10 pb-40'>
        <header className='font-zyHeaven text-white text-center text-4xl sm:text-5xl select-none'>
          Luis Hidalgo
        </header>
        {/* <div className='flex justify-center'>
          <a href="mailto:luis.hidalgo@bruh.com" className="font-inter text-md text-white" target="_blank">
            luis.hidalgo@bruh.com
          </a>
        </div> */}
      <div className="flex justify-center flex-col lg:flex-row items-center gap-12 pt-10 ">
      <div className='order-2 lg:order-1 flex flex-col gap-4 '>
            <h1 className='text-xl text-white font-zyHeaven mx-auto'>English</h1>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUTIgHSsEoMMAJWWrZxlT1yQ"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUTIgHSsEoMMAJWWrZxlT1yQ&index=2"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUTIgHSsEoMMAJWWrZxlT1yQ&index=3"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUTIgHSsEoMMAJWWrZxlT1yQ&index=4"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
        </div>
        <div className='order-1 lg:order-2 flex flex-col justify-center gap-4 pt-0 lg:pt-12 mx-auto sm:mx-0'>
          <InstagramEmbed />
          <TikTokEmbed />
        </div>
        <div className='order-3 lg:order-3 flex flex-col gap-4'>
            <h1 className='text-white text-xl font-zyHeaven mx-auto'>Espanol</h1>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=2"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=3"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
            <div className='relative'>
              <iframe
                src="https://www.youtube.com/embed?listType=playlist&list=UUQzQF3X3qyESt5Tz99DOpxA&index=4"
                className='w-1/2.5 h-[190px] rounded-2xl'>
              </iframe>
            </div>
        </div>
      </div>
      <AdComponent />
      <div className='flex justify-center pt-16'>
        <p className='text-xs mt-auto font-bold text-white'>
          built by <a href="https://mustaeen.dev/" target="_blank" className='hover:underline'>must</a>
        </p>
      </div>
    </main>
  );
}
