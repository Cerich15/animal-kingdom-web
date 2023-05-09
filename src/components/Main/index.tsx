import React from 'react'
import { Props } from './types'

const Main: React.FC<Props> = ({children, className, style}) => {
  return (
    <main className={className} style={style}>{children}</main>
  )
}

export default Main