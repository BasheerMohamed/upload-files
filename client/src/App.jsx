import React from 'react'
import Home from './pages/Home'
import Upload from './pages/Upload'
import SecureUpload from './pages/SecureUpload'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/secure-upload' element={<SecureUpload />} />
      </Routes>
    </div>
  )
}

export default App