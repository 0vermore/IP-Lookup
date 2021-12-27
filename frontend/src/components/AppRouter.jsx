import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IpLookupPage from '../pages/IpLookup'
import IpPage from '../components/IpPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<IpLookupPage />} />
      <Route path='/history/:ip' element={<IpPage />} />
    </Routes>
  )
}

export default AppRouter