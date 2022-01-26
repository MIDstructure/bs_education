import React, { useState } from 'react';
import { Box } from "@mui/material";
import { Login, SignUp } from ".";



function AuthModal() {

  const [current, setCurrent] = useState(1)
  
  switch(current) {
    case 1: return <Login setCurrent={setCurrent}/>
    case 2: return <SignUp setCurrent={setCurrent}/>
    case 3: return 
  }

}

export default AuthModal;
