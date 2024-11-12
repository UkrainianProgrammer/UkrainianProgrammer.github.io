import { testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const Feedback = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Kind words from
            <span className='text-purple'> experinced professionals</span>
        </h1> 
        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />
        </div>
    </div>
  )
}

export default Feedback