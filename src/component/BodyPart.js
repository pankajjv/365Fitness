import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <div 
    className='bodyPart-card'
    
    onClick={()=> {
        setBodyPart(item)
        window.scrollTo({ top: 1650, left: 100, behavior: 'smooth' });
    }}
    >
      <img src={Icon} alt='404 dumbbell' style={{width:'40px', height:'40px'}}/>
      <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize'>{item}</Typography>
    </div>
  )
}

export default BodyPart
