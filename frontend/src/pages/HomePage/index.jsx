import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const HomePage = () => {
  return (
    <>
    <Box component="div">
        <Navbar></Navbar>
        <Main></Main>
    </Box>
    </>
  )
}

export default HomePage