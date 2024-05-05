import React from 'react'
import bg from '../../../public/bg.png'
import Button from '../../UI/Button'
import { buttons } from '../../Styles/styles'
import RightIcon from '../../UI/Icons/rightIcon'

export default function Grand() {
  return (
    <div className='relative mt-16 mb-6 h-[400px] md:h-[300px] lg:h-[300px] flex justify-center items-center overflow-hidden rounded-3xl '>
        <div className='w-full'>
            <img src={bg} alt="" className='w-full h-[460px] md:h-[335px] lg:h-[335px] object-cover rounded-3xl' />    
        </div>
       <div className='w-full h-full px-16 text-white absolute top-0 hidden md:flex lg:flex flex-col justify-center'>
        <div className="w-1/3 flex flex-col gap-7">
            <h className="text-3xl header">Grandni qo'lga kiriting</h>
            <p className="text-xs monsserat font-normal">100% грант без последующей оплаты, 5 % получат грант, который они будут оплачивать после прохождения курса и устройства на работу  </p>
            <Button typeButton={buttons.glassButton} className={"text-xs border-[1px] border-white w-1/2 h-[30px]"}>
                Batafsil
                <RightIcon color={"white"}/>
            </Button>
        </div>
       </div>
    </div>
  )
}
