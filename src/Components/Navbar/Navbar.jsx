import { styles } from "../../Styles/styles"
import './styles.module.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuIcon from "../../UI/Icons/menuIcon"
import CloseIcon from "../../UI/Icons/CloseIcon"
import NavbarMobile from "./NavbarMobile"
import NavbarTop from "./NavbarTop"
import NavbarBottom from "./NavbarBottom"

function Navbar() {
  const [openAllCourses, setOpenAllCourses] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const navigate = useNavigate()
  return (
    <div className={`${styles.flexCol} bg-white sticky top-0 z-10 ${styles.responsiveContainer} ${styles.responsiveHeight} shadow-lg ${styles.justifyCenter}`}>
      <div className={`${styles.flexColMobile} gap-2`}>
        <NavbarTop/>
        <NavbarBottom openAllCourses={openAllCourses} setOpenAllCourses={setOpenAllCourses}/>
        <div onClick={()=> setToggleMenu(!toggleMenu) } className={`${styles.justifyCenter} ${styles.itemsCenter} ${styles.responsiveVisible}`}>
          {!toggleMenu
            ? <MenuIcon/>
            : <CloseIcon/>
          }
        </div>
      </div>
      {toggleMenu && <NavbarMobile openAllCourses={openAllCourses} setOpenAllCourses={setOpenAllCourses} />}
    </div>
  )
}

export default Navbar
