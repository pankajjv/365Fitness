import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { fetchData, youtubeSearchOptions } from '../utils/fetchdata'
const ExerciseVideos = ({exerciseVideos, name}) => {

  return (
   <Box sx={{mt:'100px', p: '20px'}} >
    <Typography mb='33px' textTransform='capitalize' variant='h3'>
      watch <span style={{ color:'#ff2625'}}>{name}</span> exercise video
    </Typography>
    <Stack justifyContent='flex-start' sx={{flexDirection: 'row'}} gap= '40px' flexWrap='wrap' alignItems='center'>
      {
        exerciseVideos?.slice(0,6).map((item, index)=>(
          <a key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            className='exercise-video'>
            <img src={item.video.thumbnails[0].url} alt='404 exercise vedio'/>
            <Box>
              <Typography variant='h5' color='#000'>{item.video.title}</Typography>
              <Typography variant='h7' color='#000'>{item.video.channelName}</Typography>

            </Box>
          </a>

        ))
      }
    </Stack>
   </Box>
  )
}

export default ExerciseVideos
