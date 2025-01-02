import React from 'react'

type TitleBoxProps = {
    title: string
    }
const TitleBox = ({title} : TitleBoxProps) => {
  return (
    <div style={{
        background : "url('/aibg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }} className='h-40 md:h-60 flex mb-20 items-center justify-center text-white text-3xl md:text-4xl lg:text-6xl font-bold'>{title}</div>
  )
}

export default TitleBox