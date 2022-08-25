

import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Results } from './Results'
// import { Search } from './Search'

export const RouteSearch = () => {
  return (
    <div className='p-4'>
    <Routes>
    <Route path="/" element={<Navigate  to="/search" />} />
    <Route  path="/search" element={<Results/>}></Route>
    <Route  path="/images" element={<Results/>}></Route>
    <Route  path="/news" element={<Results/>}></Route>
    <Route  path="/videos" element={<Results/>}></Route>

    </Routes>


    </div>
  )
}
