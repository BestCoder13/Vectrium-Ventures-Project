
import React from 'react';
import Slider from 'react-slick';
import Servicesnumber from './Servicesnumber';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Services1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: 'Graphics Design',
      description:
        'Graphic designing is at the heart of building a strong brand identity. Our services include logo creation, branding materials, marketing collateral, and digital graphics.',
      icon: (
        <svg className='w-16 h-16 text-blue-500' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' d='M3 3h18v18H3V3zM8 8h8M8 12h4m-4 4h8'></path></svg>
      ),
    },
    {
      title: 'SEO and Content Writing',
      description:
        'SEO and content writing are critical for enhancing your website’s visibility and attracting the right audience.',
      icon: (
        <svg className='w-16 h-16 text-blue-500' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' d='M4 4h16v16H4V4zM8 8h8M8 12h4m-4 4h8'></path></svg>
      ),
    },
    {
      title: 'Website Development',
      description:
        'Our website development service focuses on creating dynamic and interactive websites that are functional and user-friendly.',
      icon: (
        <svg className='w-16 h-16 text-blue-500' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' d='M3 3h18v18H3V3zM9 9h6m-6 4h6m-6 4h6'></path></svg>
      ),
    },
  ];

  return (
    <div>
      <div className='w-full h-auto p-10 text-white'>
      <h1 className='text-center font-bold text-4xl mb-10'>Services Offered by Us</h1>
      <div className='w-[90vw] mx-auto'>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className='p-4'>
              <div className='flex flex-col items-center border border-amber-50 rounded-xl bg-gray-800 p-7 w-full h-auto hover:scale-105 transition-transform'>
                <div className='w-24 h-24 flex items-center justify-center shadow-lg border border-blue-500'>
                  {service.icon}
                </div>
                <h1 className='text-center font-bold text-xl pt-5'>{service.title}</h1>
                <p className='text-center pt-5 text-gray-400 text-sm'>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <Servicesnumber/>
    </div>
  );
};

export default Services1;