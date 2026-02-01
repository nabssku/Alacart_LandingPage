'use client';

import Image from 'next/image';
import * as React from 'react';

const feature = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/ae299efbca22530d0a6a7.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const border = {
    border: 'solid'
  };

  const image = {
    0: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
    1: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    2: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    3: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    4: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    5: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
  };

  const [imgPrev, setImgPrev] = React.useState(image[0]);

  const nextImage = () => {
    const index = Object.values(image).indexOf(imgPrev);
    if (index === Object.values(image).length - 1) {
      setImgPrev(image[0]);
    } else {
      setImgPrev(image[index + 1]);
    }
  };

  const prevImage = () => {
    const index = Object.values(image).indexOf(imgPrev);
    if (index === 0) {
      setImgPrev(image[Object.values(image).length - 1]);
    } else {
      setImgPrev(image[index - 1]);
    }
  };

  return (
    <div style={style}>
      <div className='pb-10 pt-10 text-center'>
        <h1 className='mb-2 text-center text-3xl font-bold'>
          <span className='text-amber-500'>Ala</span>{' '}
          <span className='text-red-600'>Carte </span>
          Hadir Sebagai Solusi
        </h1>
        <div className='col-span-4 col-start-2 mt-5 flex w-full justify-center px-5'>
          <span className='text-base'>
            Ala Carte hadir dengan efisien untuk membantu anda dalam mengelola
            penjualan, inventaris, dan transaksi pelanggan.{' '}
          </span>
        </div>
      </div>
      <div className='flex h-auto grid-flow-row grid-rows-3 items-center justify-center p-5'>
        <div className='flex hidden w-16 justify-end pr-3 sm:hidden md:hidden lg:block'>
          <button onClick={prevImage}>
            <Image
              src='/svg/ArrowLeft.svg'
              alt='Ala Carte'
              className='dark:invert'
              width={150}
              height={40}
              priority
            />
          </button>
        </div>
        <div className='h-auto w-8/12'>
          {' '}
          <div className='flex items-center justify-center justify-items-center'>
            <div className='grid items-center gap-4'>
              <div className='flex w-auto items-center justify-center text-center'>
                <img
                  className='max-w-full select-none rounded-lg sm:min-h-fit sm:w-10/12'
                  src={imgPrev}
                  alt=''
                ></img>
              </div>
              <div className='w-5/5 container mx-auto mb-5 grid grid-cols-5 gap-4'>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
                    alt=''
                  ></img>
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
                    alt=''
                  ></img>
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
                    alt=''
                  ></img>
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
                    alt=''
                  ></img>
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
                    alt=''
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex hidden h-auto w-16 justify-start pl-3 sm:hidden md:hidden lg:block'>
          <button onClick={nextImage}>
            <Image
              src='/svg/ArrowRight.svg'
              alt='Ala Carte'
              className='dark:invert'
              width={150}
              height={40}
              priority
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default feature;
