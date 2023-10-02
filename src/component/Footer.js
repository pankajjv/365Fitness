import React from 'react'
import { Stack, Box, Typography} from '@mui/material'
import Logo from '../assets/images/Logo.png'
const Footer = () => {
  return (
   <Box mt='80px' bgcolor='#fff3f4'>
    <Stack pt='20px' pb='20px' gap='40px' direction='row' alignItems='center' justifyContent='center' mt={5}>
      <img src={Logo} width='50px' height='30px' alt='404 footer'/>
      <Typography>part of @Vishnani Enterprises </Typography>
    </Stack>
   </Box>
  )
}

export default Footer
