import React from 'react'
import Button from '../../UI/Button'
import { buttons, styles } from '../../Styles/styles'
import RightIcon from '../../UI/Icons/rightIcon'


export default function Education() {
  return (
    <div className="bg-white px-4 py-6">
      <div className=" mx-auto">
        <p className='text-gray-500 text-xs'>O'quv markazi haqida </p>
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-orange-500 header py-2">MAAB EDUCATION</h1>
        <p className="text-gray-700 mt-2 text-md md:pt-1">
          Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish
          jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business
          intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli
          tahlillar va boshqa vositalar juda foydali bo'lishi mumkin.
        </p>
        <Button typeButton={buttons.primaryButton} className={"mt-5"}>
            Batafsil
            <RightIcon color={"white"}/>
        </Button>
      </div>
    </div>
  )
}
