import React from 'react'
import { Button } from './Button'

const list = ['All','Gaming','News','Entertainment','Sports','Cricket','Comedy','Movies','Programming']
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item,i)=>{
        return <Button key={i} name={item} />
      })}
    </div>
  )
}

export default ButtonList