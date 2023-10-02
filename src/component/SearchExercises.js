import React from 'react'
import { Box, Typography, Stack, TextField, Button } from '@mui/material'
import { useState, useEffect} from 'react'
import {fetchData, exerciseOptions} from '../utils/fetchdata'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setBodyPart, bodyPart, setExercises}) => {

const [search, setSearch] = useState('')

const [bodyParts, setBodyParts] = useState([]);//for bordy parts list

 const handleSearch=async()=>{
  if(search){
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
   // console.log(exercisesData)
    const searchedData = exercisesData.filter(
      (exercise) => exercise.bodyPart.toLowerCase().includes(search) 
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)

    )
    // console.log(searchedData)
    setSearch('')

    setExercises(searchedData)
}
 }


useEffect(() => {
  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    console.log(bodyPartsData)
    setBodyParts(['all', ...bodyPartsData]);
  };
  
  fetchExercisesData();

}, []);





  return (
   <div mt='37px' className='categoryContainer'>
      <Typography fontWeight='700' fontSize='44px' mb='50px' textAlign='center'>Awesome Exercise You Should Know</Typography>

      <Box position="relative" className='searchBox'>

        
      <TextField
      placeholder='Search Exercises'
      value={search}
      onChange={(e)=>{
        setSearch(e.target.value.toLowerCase())
      }}
      height='76px'
      sx={{ input: { fontWeight: '700'}, width:"80%", backgroundColor: '#fff', borderRadius: '40px' }}
      type='text'
      />

      <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: '20%', height: '56px', position: 'absolute', right: '0px', fontSize:  '18px'}} >


          Search
        </Button>
      </Box>


      <Box className='categoryBox'>
        
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyPart/>
      </Box>

   </div>
  )

}

export default SearchExercises
