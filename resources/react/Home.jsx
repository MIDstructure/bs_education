import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Profile from './routes/Profile';
import Job from './routes/Job';
import CreateAds from './routes/CreateAds';
import ProtectedRoutes from './service/Protected-routes';

import { observer } from "mobx-react-lite"
import { Footer, Header, NotFound } from './modules';

import AllAds from './routes/AllAds';
import Login from "./routes/Login";


function Home() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/all-ads" element={<AllAds />}/>
        <Route path="/create-ads" element={<CreateAds/>} />
        <Route path="/profile" element={<Profile/>} /> 
        <Route path="/job" element={<Job />}/>
        <Route path="/profile" element={<Profile/>} /> 
        <Route element={<ProtectedRoutes/>}>
        </Route>
      </Routes>
      <Footer/>
    </>
  )
  
}

export default observer(Home);
