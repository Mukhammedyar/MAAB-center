import React from 'react'
import shape from '../../assets/Shape.png'
import { buttons, styles } from '../../Styles/styles'
import RightIcon from '../../UI/Icons/rightIcon'
import Button from '../../UI/Button'

export default function LeftSideCard() {
  return (
    <div className={`${styles.flexCol} ${styles.justifyBetween} bg-[rgb(245,245,247)] rounded-2xl p-4 min-h-[370px]`}>
        <div>
            <div className="flex card relative overflow-hidden rounded-lg items-center justify-center">
                <img src={shape} alt="" className='w-full object-cover shape'/>
                <div className={`${styles.justifyCenter} w-1/2`}>
                    <h1 className="text-5xl header text-blue-800">99%</h1>
                    <p className='text-xs mx-1'>bitituvchilar ish bilan taminlangan</p>
                </div>
            </div>
            <div className="text-start">
                <h2 className="text-md mt-5 header font-semibold">{"BITIRUVCHILARNI ISH BILAN TAMINLASH DASTURI MAVJUD"}</h2>
                <p className="mt-4 text-gray-600 text-xs">{"Zamonaviy texnologiyalar, 24/7 ishlaydigan o'quv markaz"}</p>
            </div> 
        </div>
        <Button typeButton={buttons.solidButton} className={"text-blue-600 text-xs"}>
            Karyera haqida batafsil <RightIcon/>
        </Button>
    </div>
  )
}
