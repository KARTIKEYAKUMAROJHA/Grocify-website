import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
   <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
    <div className=' md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
 <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
 
 
 <div className='max-w-[700px]'>
    <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First Order Discount!</h3>
    <p className='text-zinc-600 my-6 '>
        Enjoy an exclusive 20% discount on your first order with us. Use code FIRST20 at checkout to save on your favorite groceries. Happy shopping!
    </p>
    <Button content="Get a Discount"/>
 </div>
    </div>
   </section>
  )
}

export default Discount
