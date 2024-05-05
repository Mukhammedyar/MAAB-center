import React from 'react'
import './campus.css'
import ExpandIcon from '../../UI/Icons/ExpandIcon'

export default function Campus() {
  return (
    <div className='my-5 relative h-[350px] campus flex flex-col justify-between'>
        <div className="z-[2] flex justify-end w-full">
            <div className='p-2 flex justify-center items-center text-center bg-white m-5 rounded-xl'>
                <ExpandIcon/>
            </div>
        </div>
        <div className='text-white z-[2] flex flex-col justify-center py-5 pl-5 w-3/4'>
            <h1 className="header text-md uppercase">MAAB Innovation Campus</h1>
            <p className='text-sm font-thin'>Кампусе вместитью 1500 студентов с кухней и зоной для работы в свободное от уроков время</p>
        </div>
        <div className="shadow-fade"></div>
    </div>
  )
}
