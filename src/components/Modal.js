import React, { useEffect, useState } from 'react'
import { items } from '../data/items'

const Modal = () => {
    const [chipArr,setChipArr] = useState([])
    const [chip,setChip] = useState("")
    const handleChange = (e) =>{
        const value = e.target.value
        if(e.key === 'Enter' && value.length){
            console.log(value,"val")
            let newArr = [...chipArr]
            newArr.push(value)
            setChipArr(newArr)
            setChip("")
        }
    }
    useEffect(()=>{
        console.log(chipArr,"chipArr")
    },[chipArr])
  return (
    <div className='modal'>
        <h1>Add Chip</h1>
        <input
        value={chip}
        onChange={(e)=>{setChip(e.target.value)}}
          onKeyDown={(e)=>{handleChange(e)}}
          type='text'
          className='input'
        />
        <div class="line"></div>
        <div className='chip-container'>
        {chipArr.length >0 && chipArr.map((chip)=>(
            <div className='chip'>{chip}<span onClick={()=>{setChipArr((arr)=>arr.filter(item=>item!=chip))}}>⌫</span></div>
        ))}
        </div>
    </div>
  )
}

export default Modal
