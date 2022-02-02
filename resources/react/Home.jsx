import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Profile from './routes/Profile';
import ProtectedRoutes from './service/Protected-routes';
import ThemeStore from './store/ThemeStore';

import { observer } from "mobx-react-lite"
import axios from 'axios'
import { Footer, Header, NotFound } from './modules';
import { createTheme, ThemeProvider } from "@mui/material";

import { yellow, purple } from '@mui/material/colors';
import Courses from './routes/Courses';





const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: yellow[500],
    },
  },

    mode: 'dark',
    components: {
      MuiModal: {
        styleOverrides: {
          root: {
            border: 'none',
          }
        }
      }
    }
})


function Home() {

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
  
}

export default observer(Home);
