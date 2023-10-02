import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import BodyPartImage from '../assets/icons/body-part.png'

const Detail = ({exerciseDetails}) => {
    const {gifUrl, bodyPart, equipment, name, target}= exerciseDetails

    const extraDetails = [
        {
            icon: BodyPartImage,
            name: name
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]


  return (
    <div className='datail_conatiner'>
        <img src={gifUrl} loading='lazy' alt={bodyPart} className='detail-image'/>
        <Stack  gap='35px'>
            <Typography variant='h4' textTransform='capitalize'>{name}</Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          mood and gain energy.
        </Typography>

            {
              extraDetails.map((item, index)=>(
                <Stack key={index} alignItems='center' direction='row' gap='24px'>
                <Button sx={{background:'#fff2db', width:'100px', height:'100px', borderRadius:'50%'}}>
                    <img src={item.icon} alt='404 detail-img' style={{width:'50px', height:'50px'}}/>
                </Button>
               
                <Typography variant='h6' textTransform='capitalize'>
                    {item.name}
                </Typography>
                </Stack>
              ))  
            }
        </Stack>
        
        
    </div>

  )
}

export default Detail
