import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, SearchDetail } from './components'
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/search/:searchTerm' element={<SearchDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App