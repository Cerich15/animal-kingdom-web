import React from 'react'
import { Props } from './type'

const Container: React.FC<Props> = ({className, style, children}) => {
  return (
    <div className={className} style={style}>{children}</div>
  )
}

export default Container