import React, { useState } from 'react'
import stylesModule from './styles.module.css'
import { buttons, styles } from '../../Styles/styles'
import MapIcon from '../../UI/Icons/MapIcon'
import TelegramIcon from '../../UI/Icons/telegramIcon'
import InstagramIcon from '../../UI/Icons/Instagram'
import LinkedinIcon from '../../UI/Icons/LinkedinIcon'
import FacebookIcon from '../../UI/Icons/FacebookIcon'
import Button from '../../UI/Button'
import { useNavigate } from 'react-router-dom'
import PhoneIcon from '../../UI/Icons/phoneIcon'
import DownIcon from '../../UI/Icons/DownIcon'
import UpIcon from '../../UI/Icons/UpIcon'
import YoutubeIcon from '../../UI/Icons/YoutubeIcon'
import RightIcon from '../../UI/Icons/rightIcon'
import DropdownMobile from '../../UI/DropdownMobile'

export default function NavbarMobile() {
  const navigate = useNavigate()
  const [openMobileAllCourses,setOpenMobileAllCourses] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)

  return (
    <div className={`min-h-[100px] w-full z-[3] sm:w-1/2 md:w-1/3 absolute right-0 top-full gap-2 bg-white shadow-lg ${styles.responsiveContainerMenu} ${styles.responsiveVisible} ${styles.flexCol}`}>
        <div className={`${styles.justifyBetween}`}>
          <div className={`${styles.itemsCenter} text-gray-500 gap-2 ${styles.itemsCenter} ${styles.transition}`}>
            <MapIcon/>
            <p className="text-xs">Manzilimiz</p>
          </div>
          <div className={`${styles.itemsCenter} gap-5`}>
            <div className={`${styles.itemsCenter} text-xs gap-3`}>
              <TelegramIcon/>
              <InstagramIcon className={"hidden sm:hidden md:hidden lg:flex xl:flex"}/>
              <LinkedinIcon className={"hidden sm:hidden md:hidden lg:flex xl:flex"}/>
              <FacebookIcon className={"hidden sm:hidden md:hidden lg:flex xl:flex"}/>
            </div>
            <p className="text-gray-300">|</p>
            <select className=" focus:outline-0 px-1 text-xs">
              <option value="Uzbek">Uzbek</option>
              <option value="Rus">Rus</option>
            </select>
          </div>
        </div>
        <div className={`${styles.flexCol} items-stetch gap-3`}>
          <div className="">
            <Button
              onClick={() => setOpenMobileAllCourses(!openMobileAllCourses)}
              typeButton={buttons.orangeButton}
              className={`text-sm`}
              >
              Barcha kurslar
              {openMobileAllCourses
                ? <DownIcon color={'#ffffff'}/>
                : <UpIcon color={'#ffffff'}/>
              }
            </Button>
            <DropdownMobile className={`px-3 text-xs ${openMobileAllCourses ? "" : "hidden"}`}>
              <p className={`${stylesModule.dropdownItemMobile} mt-2`}>
              Data analitics
              <RightIcon />
              </p>
              <p className={`${stylesModule.dropdownItemMobile}`}>Cloud data engineering</p>
              <p className={`${stylesModule.dropdownItemMobile}`}>Data Engineering</p>
            </DropdownMobile>
          </div>
          <div className={`${styles.flexCol} navbar-items text-sm font-medium`}>
            <span  className={`${stylesModule.navItemMobile}`}onClick={()=> navigate('/')}>Bosh sahifa</span>
            <div className={`${stylesModule.navItemMobile} ${styles.flexCol} items-stretch pt-2`}>
              <span className={`${styles.itemsCenter} gap-1`} onClick={()=> setOpenAbout(!openAbout)}>Biz haqimizda <DownIcon color={"#111f31"}/></span>
              <DropdownMobile className={`${openAbout ? "" : "hidden"} pt-2 text-xs`}>
                <p className={`${stylesModule.dropdownItemMobile}`}>MAAB haqida</p>
                <p className={`${stylesModule.dropdownItemMobile}`}>Jamoamiz</p>
                <p className={`${stylesModule.dropdownItemMobile}`}>Hamkorlarimiz</p>
                <p className={`${stylesModule.dropdownItemMobile}`}>Microsoft bilan rasmiy hamkorlik</p>
                <p className={`${stylesModule.dropdownItemMobile}`}>FAQ</p>
              </DropdownMobile>
            </div>
            <span className={`${stylesModule.navItemMobile}`}>Karyera</span>
            <span className={`${stylesModule.navItemMobile}`}>Kampus</span>
            <span className={`${stylesModule.navItemMobile}`}>Pressa</span>
            <span className={`${stylesModule.navItemMobile}`}>Sertifikat</span>
          <span className={`${stylesModule.navItemMobile}`}>Kontakt</span>
          
          
          </div>
          <div className={`${styles.flexCol} gap-2`}>
            <p className={`text-orange-500 font-medium text-sm`}>+998 97 783 90 45</p>
            <div className={`${styles.itemsCenter} text-sm gap-5`}>
                <YoutubeIcon/>
                <TelegramIcon/>
                <InstagramIcon/>
                <LinkedinIcon/>
                <FacebookIcon/>
            </div>
            <Button typeButton={buttons.darkButton} className={"mb-5 text-sm"}>
              {"Aloqada bo'ling"}
              <PhoneIcon/>
            </Button>
          </div>
        </div>
    </div>
  )
}
