import React from 'react'
import "./cardview.scss"

function CardView({desc}) {
  console.log(desc)
  return (
    <div className='cardview'>
        {desc}
    </div>
  )
}

export default CardView