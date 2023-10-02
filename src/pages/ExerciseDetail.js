import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOptions, youtubeSearchOptions} from '../utils/fetchdata'
import Detail from '../component/Detail'
import SimilarExercises from '../component/SimilarExercises'
import ExerciseVideos from '../component/ExerciseVideos'
const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] =useState([])
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([])
  const [equipmentExercise, setequipmentExercise] = useState([])
  
  const {id}= useParams();
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetails(exerciseData)
      const exerciseVideoData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseData.name}`, youtubeSearchOptions)
      setExerciseVideos(exerciseVideoData)

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseData.target}`, exerciseOptions)
      setTargetMuscleExercise(targetMuscleExerciseData)

      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseData.equipment}`, exerciseOptions)
      setequipmentExercise(equipmentExerciseData)
    }

    fetchExercisesData()
  },[id])
  

  console.log(equipmentExercise)

  return (
    <Box>
      <Detail exerciseDetails={exerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos.contents} name={exerciseDetails.name} />
      <SimilarExercises equipmentExercise={equipmentExercise}  targetMuscleExercise={targetMuscleExercise} />
    </Box>
  )
}

export default ExerciseDetail
