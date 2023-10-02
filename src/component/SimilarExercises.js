import React from 'react'
import HorizonatalScrollbar from './HorizontalScrollbar'
import {Box, Typography, Stack} from '@mui/material'
import Loader from './Loader'
const SimilarExercises = ({targetMuscleExercise, equipmentExercise}) => {
  return (
    <Box mt='100px' p='20px'>
      <Typography variant='h3' mb={5}>Exercise that target the same muscle group</Typography>
      <Stack alignItems='center' sx={{position:'relative'}}  direction='row' mb={5} >
         {
          targetMuscleExercise.length  ?  <HorizonatalScrollbar data={targetMuscleExercise}/> : <Loader/>
         } 
      </Stack>

      <Typography variant='h3' mb={5}>Exercise that uses same equipment</Typography>
      <Stack alignItems='center' sx={{position:'relative'}}  direction='row' mb={5} >
         {
          equipmentExercise.length  ?  <HorizonatalScrollbar data={equipmentExercise}/> : <Loader/>
         } 
      </Stack>
    </Box>
    )
}

export default SimilarExercises
