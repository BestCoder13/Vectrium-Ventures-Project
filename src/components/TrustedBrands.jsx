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
        <div className='flex justify-between ml-10 mr-10 h-30 mb-10'>
            <img className='w-[14vw] hover:scale-105 rounded' src={kindle} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={donnelly} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={imation} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={glycon} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={kantar} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={lesechos} alt="" />
        </div>
        <div className='flex justify-between ml-10 mr-10 mb-10 h-30'>
            <img className='w-[14vw] hover:scale-105 rounded' src={franchise} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={altron} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={fedex} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={aspiringminds} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={grow} alt="" />
            <img className='w-[14vw] hover:scale-105 rounded' src={thrive} alt="" />
        </div>
    </div>
  )
}

export default TrustedBrands