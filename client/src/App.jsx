import React from 'react'
import Upload from './pages/Upload'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='container mx-auto bg-[url("bg_img.png")] bg-cover bg-center p-10 flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App