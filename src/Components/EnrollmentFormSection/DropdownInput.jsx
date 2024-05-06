import { Radio } from 'antd'
import React from 'react'
import Dropdown from '../../UI/Dropdown'
import { buttons, styles } from '../../Styles/styles'
import InputWhite from '../../UI/Input'
import Button from '../../UI/Button'

export default function DropdownInput({openLevel}) {
  return (
    <Dropdown className={`${openLevel ? "flex" : "hidden"} top-16 p-0 left-0 w-[270px] md:w-[350px] text-sm z-[2]`}>
        <div className='flex w-full justify-between'>
            <div className='border-r-[1px] border-r-gray-200 w-1/2 px-2'>
                <p className='text-xs font-medium monsserat py-2'>IELTS darajangiz</p>
                <div>
                    <div className={`${styles.hoverRadioItem}`}>4.5 - 5.5 <Radio></Radio></div>
                    <div className={`${styles.hoverRadioItem}`}>5.5 - 6.5 <Radio></Radio></div>
                    <div className={`${styles.hoverRadioItem}`}>6.5 - 7.5 <Radio></Radio></div>
                </div>
            </div>
            <div className='w-1/2 ml-5'>
            <p className='text-xs font-medium monsserat py-2'>CEFR darajangiz</p>
                <div>
                    <div className={`${styles.hoverRadioItem}`}>A1 - A2 <Radio></Radio></div>
                    <div className={`${styles.hoverRadioItem}`}>B1 - B2<Radio></Radio></div>
                    <div className={`${styles.hoverRadioItem}`}>C1 - C2<Radio></Radio></div>
                </div>
            </div>
        </div>
        <div className='p-2 w-full border-b border-b-gray-200'>
            <p className='text-xs font-medium monsserat py-2'>Darajangizni tanlang</p>
            <div className='grid grid-cols-2 gap-0'>
                <div className={`${styles.hoverRadioItem} mr-2`}>Beginner <Radio></Radio></div>
                <div className={`${styles.hoverRadioItem}`}>Elementy <Radio></Radio></div>
                <div className={`${styles.hoverRadioItem} mr-2`}>Intermediate <Radio></Radio></div>
                <div className={`${styles.hoverRadioItem}`}>Upper Intermediate <Radio></Radio></div>
                <div className={`${styles.hoverRadioItem} mr-2`}>Advanced <Radio></Radio></div>
            </div>
        </div>
        <div className='p-2 w-full'>
            <p className='text-xs font-medium monsserat text-gray-500 py-2 flex justify-between items-center'>Darajangizni tanlang <Radio></Radio></p>
            <InputWhite placeholder={"Darajasini biriktiring"} width={"100%"}/>
        </div>
        <div className='w-full flex justify-between gap-2 py-2'>
            <Button typeButton={buttons.solidButton} className={"border-[1px] border-gray-400 text-gray-700 w-full"}>
                Bekor qilish
            </Button>
            <Button typeButton={buttons.primarySolidButton} className={"w-full text-xs text-blue-600"}>
                Tastiqlash
            </Button>
        </div>
    </Dropdown>
  )
}
