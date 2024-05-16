import React from 'react'
import styles from '../style'
import { miner } from '../assets'
import GetStarted from './GetStarted'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-amber-400 ss:leading-[100.8px] leading-[75px]'>
            Goten Layer <br className='sm:block hidden' />{' '}
            <span className='text-gradient'>Web3</span>{' '}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <Link to='/launch'><GetStarted /></Link>
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-amber-400 ss:leading-[100.8px] leading-[75px] w-full'>
          Miner Platform.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A miner reward platform that allows you to earn tokens by providing proof of work.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-1 my-10 relative`}>
        <img src={miner} alt='streamer' className='w-[100%] h-[100%] relative z-[5]' />

        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Link to='/launch'><GetStarted /></Link>
      </div>
    </section>
  )
}

