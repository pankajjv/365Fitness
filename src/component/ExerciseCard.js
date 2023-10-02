import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'
const ExerciseCard = ({exercise}) => {
  console.log(exercise)
  return (
   <Link className='exercise-card'  to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt='404 gif' loading='lazy'/>
    <Stack direction='row'>
        <Button sx={{ml: '21px', color:'#fff', background:'#ffa9a9',fontSize:'14px', borderRadius:'20px', textTransform: 'capitalize'}}>{exercise.bodyPart}</Button>
        <Button sx={{ml: '21px', color:'#fff', background:'#fcc757', borderRadius:'20px',fontSize:'14px', textTransform: 'capitalize', textDecoration:'none'}}>{exercise.target}</Button>

    </Stack>
    <Typography sx={{ml: '20px', fontSize: '22px', color:'black' , textTransform: 'capitalize', fontWeight:'bold'}}>{exercise.name}</Typography>
   </Link>

  )
}

export default ExerciseCard
