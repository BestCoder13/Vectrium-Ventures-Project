import React from 'react'
import kindle from '../assets/kindle.png'
import donnelly from '../assets/donnelly.png'
import imation from '../assets/imation.webp'
import kantar from '../assets/kantar.jpg'
import glycon from '../assets/glycon.png'
import lesechos from '../assets/lesechos.png'
import franchise from '../assets/franchise.webp'
import altron from '../assets/aliron.png'
import fedex from '../assets/fedex.png'
import aspiringminds from '../assets/aspiringminds.png'
import grow from '../assets/grow.jpg'
import thrive from '../assets/thrive.png'

const TrustedBrands = () => {
  return (
    <div className='py-4 sm:py-8'>
      <h1 className='text-gray-200 mt-10 font-bold mb-6 text-2xl text-center'>Trusted by Leading Brands</h1>
     
      <div className='flex flex-wrap justify-between ml-10 mr-10 mb-10'>
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={kindle} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={donnelly} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={imation} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={glycon} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={kantar} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={lesechos} alt="" />
      </div>

      <div className='flex flex-wrap justify-between ml-10 mr-10 mb-10'>
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={franchise} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={altron} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={fedex} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={aspiringminds} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={grow} alt="" />
        <img className='w-[12vw] sm:w-[14vw] sm:h-[20vh] hover:scale-105 rounded hover:shadow-emerald-50 hover:shadow-lg' src={thrive} alt="" />
      </div>
    </div>
  )
}

export default TrustedBrands
