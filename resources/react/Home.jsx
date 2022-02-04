import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Profile from './routes/Profile';
import ProtectedRoutes from './service/Protected-routes';

import { observer } from "mobx-react-lite"
import { Footer, Header, NotFound } from './modules';

import AllAds from './routes/AllAds';
import CreateAds from "./routes/CreateAds";
import Login from "./routes/Login";


function Home() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/" element={<Main/>}/>
        {/* <Route path="/courses" element={<Courses />}/> */}
        <Route path="/all-ads" element={<AllAds />}/>
        <Route path="/login" element={<Login/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/create-ads" element={<CreateAds/>} />
          <Route path="/profile" element={<Profile/>} /> 
        </Route>
      </Routes>
      <Footer/>
    </>
  )
  
}

export default observer(Home);
