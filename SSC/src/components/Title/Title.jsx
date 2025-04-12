import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        <h2>{subTitle}</h2>
        <h1>{title}</h1>
    </div>
  )
}

export default Title
