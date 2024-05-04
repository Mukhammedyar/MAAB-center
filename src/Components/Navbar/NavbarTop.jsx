import React from 'react'
import { styles } from '../../Styles/styles'
import MapIcon from '../../UI/Icons/MapIcon'
import TelegramIcon from '../../UI/Icons/telegramIcon'
import InstagramIcon from '../../UI/Icons/Instagram'
import LinkedinIcon from '../../UI/Icons/LinkedinIcon'
import FacebookIcon from '../../UI/Icons/FacebookIcon'

export default function NavbarTop() {
  return (
    <div className={`${styles.justifyBetween} basis-[50%] ${styles.responsiveHidden}`}>
        <div className={`${styles.itemsCenter} text-gray-500 gap-2 ${styles.itemsCenter}`}>
        <MapIcon/>
        <p className="text-xs">Manzilimiz</p>
        </div>
        <div className={`${styles.itemsCenter} gap-5`}>
        <div className={`${styles.itemsCenter} text-sm gap-3`}>
            <TelegramIcon />
            <InstagramIcon/>
            <LinkedinIcon/>
            <FacebookIcon/>
        </div>
        <p className="text-gray-300">|</p>
        <select className=" focus:outline-0 px-1 text-sm">
            <option value="Uzbek">Uzbek</option>
            <option value="Rus">Rus</option>
        </select>
        </div>
    </div>
  )
}
