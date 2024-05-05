import { Input, InputNumber, Typography } from 'antd'
import './styles.css'
import React from 'react'

export default function InputWhite({label, placeholder, type,defaultValue, width}) {
  return (
    <div>
        <Typography level={1}>{label}</Typography>
          <Input 
          style={{ height: "32px",width: width,  background: "rgba(0,0,0,.05) " }} 
          type={type} 
          className='input-white input' 
          placeholder={placeholder} 
          defaultValue={defaultValue}
          />
    </div>
  )
}
export const InputNumberWhite = ({label, defaultValue}) => {
    return (
      <div>
        <Typography level={1}>{label}</Typography>
          <InputNumber 
            style={{ height: "32px", background: "rgba(0,0,0,.05)" }} 
            className='input-white inputNumber' 
            defaultValue={defaultValue}
          />
      </div>
      )
}

export const InfoIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{fill: "rgba(255, 105, 30, 1)"}}>
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
    </svg>
  )
}
