import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { fetchData, exerciseOptions } from '../utils/fetchdata'
import ExerciseCard from './ExerciseCard'




const Exercises = ({exercises, bodyPart, setExercises}) => {
  const exercisePerPage = 9;
  const [currentPage, setCurrentPage] = useState(1)
  const paginate =(e, value ) =>{
    setCurrentPage(value)
    window.scrollTo({top:1650, behavior: 'smooth'})
  }
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise)


useEffect(()=>{
  const fetchExerciseData = async() =>{
    let exercisedData = []
    if(bodyPart === 'all'){
      exercisedData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    }else{
      exercisedData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }
    setExercises(exercisedData)
  }

  fetchExerciseData()
}, [bodyPart])

  return (
    <Box mt='50px'
    padding='20px'>
      <Typography variant='h3' mb='46px' textAlign='center'>Showing Result</Typography>
      <Stack justifyContent='center' direction='row' flexWrap='wrap' gap='100px'>
             {
              currentExercise.length ? (
                currentExercise.map((exercise, index) =>(
                  <ExerciseCard exercise={exercise} key={index}/>
                ))
              ) : <Typography justifyContent='center' alignItems='center' variant='h5'>No such exercise</Typography>
             } 
      </Stack>
      <Stack mt='100px' alignItems='center'>
              { exercises.length >9 && 
            <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length/exercisePerPage )}
            page={currentPage}
            onChange={paginate}
            defaultPage={1}
            />  
            }
      </Stack>
    </Box>
  )
}

export default Exercises
