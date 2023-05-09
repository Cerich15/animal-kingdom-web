import React from 'react'
import { Props } from './types'

const Button: React.FC<Props> = ({children, className, style}) => {
  return (
    <button className={className} style={style}>{children || 'Button'}</button>
  )
}

export default Button