import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Profile from './routes/Profile';
import ProtectedRoutes from './service/Protected-routes';

import { observer } from "mobx-react-lite"
import { Footer, Header, NotFound } from './modules';

import Courses from './routes/Courses';


function Home() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/courses" element={<Courses />}/>
        {/* <Route path="/courses" element={<Courses />}/> */}
        <Route element={<ProtectedRoutes/>}>
        <Route path="/profile" element={<Profile/>} /> 
        </Route>
      </Routes>
      <Footer/>
    </>
  )
  
}

export default observer(Home);
