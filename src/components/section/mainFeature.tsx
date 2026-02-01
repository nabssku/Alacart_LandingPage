'use client';

import Image from 'next/image';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const mainFeature = () => {
  const style = {
    // height: '4.5rem',
    // width: '100%',
    // paddingTop: '6.5rem',
    // paddingBottom: '3.5rem',
    // paddingLeft: '5rem',
    // paddingRight: '5rem',
    backgroundImage: `url('https://telegra.ph/file/57d23472e7c1d49feb8c7.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const feature = [
    {
      id: 1,
      title: 'Penerimaan Pembayaran',
      subtitle:
        'Penjual dapat menerima pembayaran dari pelanggan dengan berbagai metode pembayaran',
      img: '/svg/payIcon.svg'
    },
    {
      id: 2,
      title: 'Penjualan Offline',
      subtitle:
        'POS mampu menerima pembayaran dan mencatat penjualan tanpa memerlukan koneksi internet.',
      img: '/svg/NoWifi.svg'
    },
    {
      id: 3,
      title: 'Promosi dan Diskon',
      subtitle:
        'Penjual dapat memberikan program loyalitas, termasuk penggunaan kode promo atau penawaran khusus.',
      img: '/svg/Diskon.svg'
    },
    {
      id: 4,
      title: 'Pencatatan Penjualan',
      subtitle:
        'Merekam transaksi penjualan secara rinci, termasuk item yang dijual, harga, dan total penjualan.',
      img: '/svg/Penjualan.svg'
    },
    {
      id: 5,
      title: 'Pengelolaan Karyawan',
      subtitle:
        'Penjual mampu mengatur akses dan mengelola informasi karyawan, seperti jadwal kerja, service, atau izin absen.',
      img: '/svg/Pengelolaan.svg'
    },
    {
      id: 6,
      title: 'Keamanan dan Otentikasi',
      subtitle:
        'Adanya fitur keamanan seperti login yang terenkripsi untuk melindungi data dan mencegah penyalahgunaan.',
      img: '/svg/Keamanan.svg'
    }
  ];
  return (
    <div style={style} className='grid-cols-13 grid h-full w-full p-10'>
      <div className='col-start-1 col-end-7 '>
        <div className='flex flex-col content-center items-center justify-center p-5'>
          <h1>Fitur Yang Kami Tawarkan</h1>
          <h5>
            Berikut adalah gambaran singkat tentang fitur dan manfaat utama dari
            Ala Carte:
          </h5>
        </div>
        {/* LG - XL */}
        <div className='hidden grid-flow-row-dense content-center items-center justify-items-center gap-5 overflow-x-auto sm:hidden md:hidden lg:grid lg:grid-cols-3 xl:grid '>
          {feature.map((feat) => (
            <div
              key={feat.id}
              className='relative h-[397px] w-[309px] overflow-hidden rounded-[12px] bg-white shadow-2xl  '
            >

              <div className='absolute left-0 top-[220px] h-[177px] w-[309px] rounded-[26px_26px_12px_12px] bg-[#f1a501] shadow-[0px_-3.24px_6.48px_#0000000f,0px_0px_3.24px_#0000000a]'>
                <div className='absolute left-[35px] top-[30px] h-[28px] w-[240px]'>
                  <button className='all-[unset] relative box-border flex h-[28px] w-[240px] items-center justify-center gap-[6.48px] rounded-[12px] bg-white p-[11.34px] shadow-[0px_6.48px_19.44px_#ffca404c]'>
                    <div className="relative mb-[-11.26px] mt-[-12.88px] w-fit whitespace-nowrap text-[13px] font-bold leading-[28.4px] tracking-[0] text-[#f1a501] [font-family:'Poppins-Bold',Helvetica]">
                      {feat.title}
                    </div>
                  </button>
                </div>

                <p className="absolute left-[33px] top-[73px] w-[243px] text-center text-[12.2px] font-semibold leading-[normal] tracking-[0] text-white [font-family:'Poppins-SemiBold',Helvetica]">
                  {feat.subtitle}
                </p>
              </div>

              <Image
                src={feat.img}
                alt='Ala Carte'
                className='absolute left-[63px] top-[28px] h-[164px] w-[181px]'
                width={300}
                height={24}
                priority
              />
            </div>
          ))}
        </div>
        {/* SM - MD */}
        <div className="sm:block md:block lg:hidden 2xl:hidden">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={'auto'}
            coverflowEffect={
              {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              }
            }
            className='relative w-[20rem] p-2 sm:w-[30rem]  md:w-[40rem]'

          >

            {feature.map((feat) => (
              <SwiperSlide key={feat.id}>
                <div className='flex items-center justify-center'>
                  <div className='relative h-[397px] w-[309px] overflow-hidden rounded-[12px] bg-white '>
                    <div className='absolute left-0 top-[220px] h-[177px] w-[309px] rounded-[26px_26px_12px_12px] bg-[#f1a501] shadow-[0px_-3.24px_6.48px_#0000000f,0px_0px_3.24px_#0000000a]'>
                      <div className='absolute left-[35px] top-[30px] h-[28px] w-[240px]'>
                        <button className='all-[unset] relative box-border flex h-[28px] w-[240px] items-center justify-center gap-[6.48px] rounded-[12px] bg-white p-[11.34px] shadow-[0px_6.48px_19.44px_#ffca404c]'>
                          <div className="relative mb-[-11.26px] mt-[-12.88px] w-fit whitespace-nowrap text-[13px] font-bold leading-[28.4px] tracking-[0] text-[#f1a501] [font-family:'Poppins-Bold',Helvetica]">
                            {feat.title}
                          </div>
                        </button>
                      </div>

                      <p className="absolute left-[33px] top-[73px] w-[243px] text-center text-[12.2px] font-semibold leading-[normal] tracking-[0] text-white [font-family:'Poppins-SemiBold',Helvetica]">
                        {feat.subtitle}
                      </p>
                    </div>

                    <Image
                      src={feat.img}
                      alt='Ala Carte'
                      className='absolute left-[63px] top-[28px] h-[164px] w-[181px]'
                      width={300}
                      height={24}
                      priority
                    />
                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>
        </div>
        {/* <div className='mt-5 grid grid-cols-6 content-center items-center justify-items-center gap-5 overflow-x-auto sm:grid md:grid lg:hidden 2xl:hidden'>
           
        </div> */}

      </div>
    </div>
  );
};

export default mainFeature;
