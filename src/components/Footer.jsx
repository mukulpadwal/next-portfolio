import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg bg-light text-dark dark:bg-dark dark:text-light dark:border-light'>
        <div className='px-32 py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <Link href="/">Mukul Padwal</Link>
            <Link href="/contact">Say Hello</Link>
        </div>
    </footer>
  )
}

export default Footer;