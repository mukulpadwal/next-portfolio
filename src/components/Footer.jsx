import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-solid border-0 border-t-2 border-b-0 dark:border-t-1 dark:border-b-0 border-dark  font-medium text-lg bg-light dark:bg-dark text-dark dark:text-light dark:border-light sm:text-base'>
        <div className='px-32 py-8 flex items-center justify-between lg:flex-col lg:px-8 lg:gap-3'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <Link href="/">Mukul Padwal</Link>
            <Link href="/contact">Contact Me</Link>
        </div>
    </footer>
  )
}

export default Footer;