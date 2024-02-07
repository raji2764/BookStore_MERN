/* eslint-disable no-unused-vars */
import React from 'react'
import { Route,Routes } from 'react-router'
import Home  from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books/create' element={<CreateBooks/>}></Route>
      <Route path='/books/details/:id' element={<ShowBook/>}></Route>
      <Route path='/books/edit/:id' element={<EditBook/>}></Route>
      <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
    </Routes>
  )
}

export default App