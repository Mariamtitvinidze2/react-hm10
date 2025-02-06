import React from 'react'
import './Input.scss'

const Input = () => {
  return (
    <div className='label'>
         <input class="note" type="text" id="note" placeholder="Note" />
         <button class="button">+</button>
    </div>
  )
}

export default Input