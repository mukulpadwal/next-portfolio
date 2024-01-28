import React from 'react'
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed md:absolute left-4 bottom-4 flex items-center justify-center md:right-3 md:left-auto md:top-0 md:bottom-auto'>
        <div className='w-48 h-auto flex items-center justify-center relative md:w-20'>
            <CircularText className={'animate-spin-slow fill-dark dark:fill-light'} />
            <Link href={'mailto:mukulpadwal786@gmail.com'} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold bg-dark hover:bg-light text-light hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe;