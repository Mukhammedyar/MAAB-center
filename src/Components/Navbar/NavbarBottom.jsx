import logo from '../../../public/logo-site.png'
import { styles } from '../../Styles/styles'
import stylesModule from './styles.module.css'
import Button from '../../UI/Button'
import DownIcon from '../../UI/Icons/DownIcon'
import UpIcon from '../../UI/Icons/UpIcon'
import PhoneIcon from '../../UI/Icons/phoneIcon'
import { useNavigate } from 'react-router-dom'
import RightIcon from '../../UI/Icons/rightIcon'
import Dropdown from '../../UI/Dropdown'
import { useState } from 'react'

export default function NavbarBottom({ setOpenAllCourses, openAllCourses }) {
  const navigate = useNavigate()
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className={` flex ${styles.justifyBetween} items-start basis-[50%]`}>
      <div className={`${styles.justifyBetween} ${styles.itemsCenter} gap-5`}>
        <img src={logo} alt="" className="h-[26px]" />
      </div>
      <div className="relative">
        <Button
          onClick={() => setOpenAllCourses(!openAllCourses)}
          typeButton={styles.orangeButton}
          className={`${styles.responsiveHidden} `}
          >
          Barcha kurslar
          {!openAllCourses
              ? <DownIcon color={'#ffffff'}/>
              : <UpIcon color={'#ffffff'}/>
          }
        </Button>
        <Dropdown className={`${openAllCourses ? "flex" : "hidden"} top-10 left-0 w-[180px] text-sm`}>
        <p className={`${stylesModule.dropdownItem}`}>
          Data analitics
          <RightIcon />
        </p>
        <p className={`${stylesModule.dropdownItem}`}>Cloud data engineering</p>
        <p className={`${stylesModule.dropdownItem}`}>Data Engineering</p>
      </Dropdown>
      </div>
      
      <div className={`${styles.itemsCenter} navbar-items ${styles.justifyBetween} gap-4 text-xs font-medium  ${styles.responsiveHidden}`}>
        <span onClick={()=> navigate('/')}>Bosh sahifa</span>
        <span className={`${styles.itemsCenter} gap-1 relative `} onClick={()=> setAboutOpen(!aboutOpen)}>
          Biz haqimizda
          <DownIcon color={"#111f31"} />
          <Dropdown className={`top-11 w-[200px] left-0 ${aboutOpen ? "flex" : "hidden"}`}>
            <p className={`${stylesModule.dropdownItem}`}>
              MAAB haqida
              <RightIcon />
            </p>
            <p className={`${stylesModule.dropdownItem}`}>Jamoamiz</p>
            <p className={`${stylesModule.dropdownItem}`}>Hamkorlarimiz</p>
            <p className={`${stylesModule.dropdownItem}`}>Microsoft bilan rasmiy hamkorlik</p>
            <p className={`${stylesModule.dropdownItem}`}>FAQ</p>
          </Dropdown>
        </span>
        <span>Karyera</span>
        <span>Kampus</span>
        <span>Pressa</span>
        <span>Sertifikat</span>
        <span>Kontakt</span>
        
      </div>
      <div className={`${styles.itemsCenter} gap-5 ${styles.responsiveHidden} `}>
        <p className={`text-orange-500 font-medium text-sm`}>+998 97 783 90 45</p>
        <Button typeButton={styles.darkButton}>
            {"Aloqada bo'ling"}
            <PhoneIcon/>
        </Button>
      </div>
    </div>
  )
}
