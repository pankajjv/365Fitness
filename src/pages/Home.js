import React from 'react'
import HeroBanner from '../component/HeroBanner'
import SearchExercises from '../component/SearchExercises'
import Exercises from '../component/Exercises'
import { useState } from 'react'
// import { UserProvider } from './UserContext'
const Home = () => {
  const [exercises, setExercises] = useState([]);//for searched exercise
  const [bodyPart, setBodyPart] = useState('all');
  console.log(exercises)
  return (
    <div>

      <HeroBanner></HeroBanner>
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}></SearchExercises>
       <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises}></Exercises> 
      
    </div>
    
  )
}

export default Home
