import React from 'react'
import MicrosoftIcon from '../../UI/microsoftIcon'
import Button from '../../UI/Button'
import { buttons, styles } from '../../Styles/styles'
import RightIcon from '../../UI/Icons/rightIcon'

export default function PartnerCard({title, year}) {
  return (
    <div className={`md:bg-[rgba(255,255,255,.1)] backdrop-blur-sm p-2 ${styles.flexCol} ${styles.justifyBetween} ${styles.borderPartnerCard} rounded-lg text-white`}>
      <div className="flex items-center space-x-1 mb-2">
        <MicrosoftIcon width={36}/>
        <div className="flex flex-col">
            <p className="font-normal text-sm p-0">{"Microsoft"}</p>
            <p className="text-[10px] ">Solutions Partner</p>
        </div>
      </div>
      <p className="text-sm pt-2">{title}</p>
       <div className="flex items-center justify-between pt-3">
        <p className="text-[10px] w-[130px] header font-normal">{year} - yil hamkor </p>
        <Button typeButton={buttons.glassButton} className={"text-[10px]"}>
            Basafsil
            <RightIcon color={"white"} width={12}/>
        </Button>
       </div>
    </div>
  )
}
