import { React, useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"
import screenShoot from "./assets/images/screenshoot.png"
import { GoArrowUpRight } from "react-icons/go";

function Landing() {

  const HeroGradientText = 'text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-700 max-sm:to-gray-800'

  return (
    <div className='px-14 max-lg:px-5 overflow-clip pb-[100px]'>

      <nav className="flex justify-between items-center py-3">
        <div className='flex justify-center items-center'>
          <Link to="/" className='flex justify-start items-center gap-2 text-base font-medium mr-6 '>
            <img src={pagesLogo} alt="Logo" className='h-10' />
            <p className='logoText'>pagez</p>
          </Link>
          
        </div>
        <div className='flex gap-1 justify-center items-center'>
        <Link to="/" className='linkText max-lg:hidden'>Overview</Link>
          <Link className='linkText max-lg:hidden'>Features</Link>
          <Link className='linkText max-lg:hidden'>Creator</Link>
          <Link className='linkText max-lg:hidden'>Source code <GoArrowUpRight /></Link>
          <div>|</div>
          <Link to="" className='linkText'>Sign in</Link>
          <Link to="" className='px-4 py-2 bg-main-color font-medium text-sm text-white rounded-lg transition hover:opacity-90 max-sm:hidden'>Get Started Today</Link>
        </div>
      </nav>

      <section className=' flex flex-col items-center justify-center text-center p-7 relative max-sm:p-0 max-sm:space-y-6'>

        <div className="absolute top-56 left-7 -z-[10] size-[700px] blur-3xl opacity-15 rounded-[50%] bg-main-color max-sm:hidden"></div>
        <div className="absolute -bottom-10 right-7 -z-[10] size-[700px] blur-3xl opacity-15 rounded-[50%] bg-main-color max-sm:hidden"></div>

        <h1 className='font-extrabold  text-[90px] text-wrap max-w-[900px] leading-[100px] mt-[60px] max-sm:text-[40px] max-sm:leading-[45px] max-sm:mt-0'>
          <span className={`HeroText`}>Infinite </span><span className='text-main-color '>Stories, </span> <br /><span className={`HeroText`}>One Library.</span>
        </h1>
        <p className='text-xl font-normal leading-8 max-w-[400px] text-gray-600 text-wrap m-[30px] max-sm:m-0'>
          Enjoy Free Novels Online: No Cost, No Limits, Pure Pleasure!
        </p>
        <div className='gradient-moving-bg shadow-xl flex justify-start items-start' >
          <img src={screenShoot} loading='lazy' className=' w-full max-w-[1000px] rounded-xl' alt="screenshot" />
        </div>

        <Link to="/app" className='flex items-center justify-center gap-1 font-medium py-3 px-7 rounded-lg mt-10 transition opacity-50 hover:bg-main-color hover:text-white hover:opacity-100 '>Open Pagez App <GoArrowUpRight /></Link>
      </section>

     
    </div>
  )
}

export default Landing