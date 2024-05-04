import React from 'react'
import { styles } from '../Styles/styles'

export default function Dropdown({children, className}) {
  return (
    <div className={`absolute border-[1px] border-[#eaeaea] p-2 bg-white rounded-lg ${styles.flexCol} items-start ${className}`}>
        {children}
    </div>
  )
}
