import React from 'react'
import Image from 'next/image'

export const About = () => {
    return (
        <>
            <div className={`panel h-[100vh]  bg-[#F3F7EC]`}>
                <div className='lg:flex flex-wrap'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <Image src={"/Images/Yuvaraj-img.jpg"} width={500} height={500} alt='Yuvaraj' className='' />
                    </div>
                    <div className='w-1/2 bg-yellow-500'>Second</div>
                    <div className='w-1/2 bg-emerald-500'>Third</div>
                    <div className='w-1/2 bg-gray-400'>Fourth</div>
                </div>
            </div>
        </>
    )
}
