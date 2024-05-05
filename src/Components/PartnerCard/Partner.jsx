import React from 'react'
import PartnerCard from './PartnerCard'
import { styles } from '../../Styles/styles'
import PartnerIcon from '../../UI/Icons/partnerIcon'
import IconCard from './IconCard'
import CaseIcon, { CertificationIcon, OnlineIcon } from '../../UI/Icons/CaseIcon'
import MicrosoftIcon from '../../UI/microsoftIcon'

export default function Partner() {
  return (
    <div className='mb-4 rounded-3xl bg-gradient-to-tr relative overflow-hidden  from-[rgb(92,147,254)] to-[rgb(17,93,241)] flex-col justify-center p-4 text-white'>
        <div className="mt-10 mb-4 px-10">
            <h1 className='header uppercase text-lg py-3'>Rasmiy xalqaro hamkor </h1>
            <p className='text-xs fmonsserat text-gray-300'>Bu bizning ta'limga va real hayotda go'llashga sodigligimizdan dalolat beradi. Ushbu dastur orgali biz intiluvchan ta labalarni
            tarbiyalaymiz va ularga rahbarlik qilamiz, ularga bilimlarini oshirish va biznes razvedkasining doimiy rivojlanayotgan sohasi
            hagida amaliy tushunchalarga ega bo'lishlari uchun dinamik platformani tagoim etamiz.</p>
        </div>
        <div className={`${styles.gridPartnerCard} mb-8 p-3 gap-2 ${styles.backgroundPartnerCard} rounded-2xl ${styles.borderPartnerCardMobile}`}>
            <PartnerCard title="Infrastructure Azure" year="2009" />
            <PartnerCard title="Digital & App Innovation Azure" year="2009" />
            <PartnerCard title="Data & AI Azure" year="2009" />
            <PartnerCard title="Security" year="2009" />
        </div>
        <div className={`${styles.gridPartnerCard} rounded-2xl p-4 gap-5 ${styles.borderPartnerCard} backdrop-blur-sm bg-[rgba(255,255,255,.1)] border-2 border-[#c4c4c43a]`}>
            <IconCard title={"2009-yil hamkorga aylangan"}>
                <PartnerIcon width={30} height={30}/>
            </IconCard>
            <IconCard title={"Microsoft bilan ishlash imkoniyati"}>
                <CaseIcon/>
            </IconCard>
            <IconCard title={"Microsoft ishchilar bilan online vebinar"}>
                <OnlineIcon/>
            </IconCard>
            <IconCard title={"Microsoft ishchilar bilan online vebinar"}>
                <CertificationIcon/>
            </IconCard>
        </div>
    </div>
  )
}
