import { Box, Typography } from '@mui/material'
import React from 'react'
import '../../style/Footer.css';
const Footer = () => {
  return (
    <>
      <Box className='footer'>
        <Typography
          sx={{
            "@media (max-width:600px)": { fontSize: '13px' }
          }}>
          All Rights Reserved &copy; Since 2024
        </Typography>
      </Box>
    </>
  )
}

export default Footer