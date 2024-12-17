import React from 'react'
import Home from './pages/Home'
import Upload from './pages/Upload'
import SecureUpload from './pages/SecureUpload'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='container mx-auto bg-[url("bg_img.png")] bg-cover bg-center p-10 flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/secure-upload' element={<SecureUpload />} />
      </Routes>
    </div>
  )
}

export default App