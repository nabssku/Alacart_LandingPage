'use client';

import Image from 'next/image';
import * as React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(true);

  const toggleDivVisibility = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className='fixed start-0 top-0 z-20 w-full  border-b border-gray-200 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-900 '>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image
            src='/svg/Logo.svg'
            alt='Ala Carte'
            className='dark:invert'
            width={100}
            height={24}
            priority
          />
        </a>
        <div className='flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0'>
          <button
            type='button'
            className='inline-flex items-center rounded-lg bg-amber-500 px-5 py-3 text-center text-base font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
          >
            Coba Gratis
          </button>
          {/* <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-sticky'
            aria-expanded='false'
            onClick={navbarToggle}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button> */}
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Fitur
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Harga
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Download
              </a>
            </li>
            <li>
              <button
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Lainnya{' '}
                <svg
                  className='ms-2.5 h-2.5 w-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>

              <div
                id='dropdownNavbar'
                className='z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700'
              >
                <ul
                  className='py-2 text-sm text-gray-700 dark:text-gray-400'
                  aria-labelledby='dropdownLargeButton'
                >
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Fitur
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* <div
          //   style={{ display: isNavbarOpen ? 'block' : 'none' }}
          className=' fixed bottom-0 left-0 right-0 border bg-white p-4 md:hidden'
        >
          <ul className='flex justify-between'>
            <li className='flex flex-col items-center justify-center'>
              <button className='flex flex-col items-center justify-center gap-1'>
                <ion-icon name='home-outline' class='text-2xl'></ion-icon>
                <span>About me</span>
              </button>
            </li>
            <li className='flex flex-col items-center justify-center'>
              <button className='flex flex-col items-center justify-center gap-1'>
                <ion-icon name='star-outline' class='text-2xl'></ion-icon>
                <span>Feature</span>
              </button>
            </li>
            <li className='flex flex-col items-center justify-center'>
              <button className='flex flex-col items-center justify-center gap-1'>
                <ion-icon name='pricetag-outline' class='text-2xl'></ion-icon>
                <span>Price</span>
              </button>
            </li>
            <li className='flex flex-col items-center justify-center'>
              <button className='flex flex-col items-center justify-center gap-1'>
                <ion-icon name='download-outline' class='text-2xl'></ion-icon>
                <span>Download</span>
              </button>
            </li>
            <li className='flex flex-col items-center justify-center'>
              <button
                onClick={toggleDivVisibility}
                className='flex flex-col items-center justify-center gap-1'
              >
                <ion-icon name='albums-outline' class='text-2xl'></ion-icon>
                <span>More</span>
              </button>
            </li>
          </ul>
          <div
            style={{ display: isMenuOpen ? 'block' : 'none' }}
            className='absolute bottom-28 left-1/2 flex w-3/4 -translate-x-1/2 gap-4'
          >
            <button className='bg-transparent px-8 py-4 font-bold text-black '>
              Masuk
            </button>
            <button className='rounded-full bg-amber-500 px-8 py-4 font-bold text-white'>
              Coba Gratis
            </button>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
