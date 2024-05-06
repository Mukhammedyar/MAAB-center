import { buttons } from '../../Styles/styles'
import Button from '../../UI/Button'
import RightIcon from '../../UI/Icons/rightIcon'
import shape from '../../assets/Shape.png'
import React from 'react'

export default function CoursesCard({ title, description, onlinePrice, offlinePrice, instructor }) {
  return (
    <div className="bg-gray-100 rounded-3xl p-4 flex flex-col justify-between max-h-[350px] min-h-[260px]">
      <div className="flex flex-col justify-between items-center mb-4">
        <h3 className="text-md header text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 monsserat text-xs">{description}</p>
      </div>
      <div className="flex bg-white py-4 relative overflow-hidden rounded-lg items-center justify-center md:h-[50px] min-h-[50px] max-h-[100px]">
            <img src={shape} alt="" className='w-full object-cover shape'/>
            <div className='flex flex-col md:flex-row px-3 md:0 gap-2 w-full lg:p-2 md:flex justify-between '>
                <div className='border-b-[1px] md:border-b-0 border-gray-300'>
                    <p className="text-gray-700 w-full text-xs">Online:</p>
                    <p className="text-blue-700 header text-sm">{onlinePrice} SUM</p>
                </div>
                <p className="md:border-r-[1px] border-gray-500"></p>
                <div className=''>
                    <p className="text-gray-900 text-xs">Offline:</p>
                    <p className="text-blue-700 header text-sm">{offlinePrice} SUM</p>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4">
            <p className="text-gray-900 text-xs font-medium">
                <p className='text-[9px] font-normal text-gray-700'>Kurs ustozl:</p>
                {instructor}</p>
            <Button typeButton={buttons.orangeSolidButton} className="text-[10px] text-orange-600 px-3 py-2">
                Batafsil ma'lumot
                <RightIcon width={24} color={"#FB5f12"}/>
            </Button>
        </div>
      
    </div>
  )
}
