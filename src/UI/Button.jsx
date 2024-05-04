import React, { Children } from 'react'

export default function Button({children, typeButton, onClick, className}) {
  return (
    <button
        onClick={onClick}
        className={`${typeButton} ${className}`}>
        {children}
    </button>
  )
}
