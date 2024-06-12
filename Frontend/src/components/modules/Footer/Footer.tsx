import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[492px] bg-footer bg-blend-multiply relative'>
        <div className='absolute right-0 -top-56'>
            <Image src={'/images/cup-footer.png'} width={300} height={300} alt='cup'/>
        </div>
        <div className='absolute left-0 -top-56'>
            <Image src={'/images/cup-footer2.png'} width={300} height={300} alt='cup'/>
        </div>
    </div>
  )
}

export default Footer