import React from 'react'
import office from '../../../public/imageOffice.jpg'
import { buttons, styles } from '../../Styles/styles'
import RightIcon from '../../UI/Icons/rightIcon'
import Button from '../../UI/Button'

export default function RightSideCard() {
  return (
    <div className={`${styles.flexCol} ${styles.justifyBetween} bg-[rgb(245,245,247)] rounded-2xl p-4 min-h-[370px]`}>
        <div>
            <div className="flex card relative h-[130px] overflow-hidden rounded-lg items-center justify-center">
                <img src={office} alt="" className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className="text-left">
                <h2 className="text-md mt-4 header font-semibold">DARSLAR ONLINE HAMDA OFFLINE TARZDA BERIB BORILADI</h2>
                <p className="my-4 text-gray-600 text-xs">Bitiruvchilar sertifikat bilan tag'dirlanadi</p>
            </div> 
        </div>
        <div className='w-full bg-white rounded-full my-3 p-2 flex items-center'>
            <Button typeButton={buttons.orangeButton} className={"header font-medium"}>ONLINE</Button>
            <Button typeButton={buttons.secondaryButton} className={"header text-gray-600 font-medium"}>OFFLINE</Button>
        </div>
        <Button typeButton={buttons.solidButton} className={"text-blue-600 text-xs"}>
            Kurslarga o'tish <RightIcon/>
        </Button>
    </div>
  )
}
