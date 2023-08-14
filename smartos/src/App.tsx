import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MultiStep } from './app/index'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<MultiStep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
