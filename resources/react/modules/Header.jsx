import React, {useState} from 'react';

import { Typography, Button, Avatar, Badge, Box, Hidden } from '@mui/material';
import Modall from "../components/Modall";
import { AuthModal } from "../components";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";



function Header() {

  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('sm'))

  setInterval(e => {
    console.log(match);
  })

  const [modal, setModal] = useState(false);

  return (
    <>
    <header>
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <Link to="/">
              <img src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="" />
            </Link>
          </div>
          <nav className="header_nav">
            <ul>
              <li>О нас</li>
              <li>Наша команда</li>
              <li>Сервисы</li>
              <li>{match}</li>
            </ul>
          </nav>
          <div className="header_settings">
          {1+1 == 2
            ?
            <Link to="/profile">
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <IconButton>
                    <MenuIcon/>
                  </IconButton>
                  <Typography variant="div" component="div" sx={{mr: 2}} >
                    Arman 
                  </Typography>
                <Badge variant="dot" color="secondary" >
                  <Avatar src="https://media.istockphoto.com/photos/digital-eye-wave-lines-stock-background-stock-video-picture-id1226241649?b=1&k=20&m=1226241649&s=170667a&w=0&h=lXhD5bdn_YT50-ItctUnqB2WiGZ8Jye1GZHjvDsb2Xo=" />
                </Badge>
              </Box>
            </Link>
            :
              <Button 
                color="inherit" 
                variant="outlined"
                onClick={e => setModal(true)}>
                  Вход
              </Button>
          }
          </div>
        </div>
      </div>
    </header>
      <Modall open={modal} close={setModal}>
        <AuthModal/>
      </Modall> 
    </>
  );
}

export default Header;


