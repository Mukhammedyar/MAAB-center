import React from 'react'

export default function IconCard({children, title}) {
  return (
    <div className='text-center flex md:flex-col items-center gap-5 p-2'>
        {children}
        <p className='text-xs font-thin'>{title}</p>
    </div>
  )
}
