import React, {useState} from 'react';

import { Typography, Button, Avatar, Badge, Box, Hidden, SwipeableDrawer } from '@mui/material';


import Modall from "../components/Modall";
import { AuthModal } from "../components";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

import { useMediaQuery } from "@mui/material";



function Header() {

  const match = useMediaQuery('(max-width: 700px)')


  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false)

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
          <nav className="header_nav" style={{display: match ? "none" : "flex"}}>
            <ul>
              <li><Link to="*">О нас</Link></li>
              <li><Link to="*">Наша</Link></li>
              <li><Link to="*">Сервисы</Link></li>
              <li>
                <Link to="/courses">
                  Курсы
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header_settings">

          {1+1 == 2
            ?
              <Box sx={{display: 'flex', alignItems: 'center'}}>  
                {match 
                  ?
                    <IconButton sx={{mr: 1}} onClick={e => setDrawer(drawer => !drawer)}>
                      <MenuIcon/>
                    </IconButton>
                  : null
                }
                <Link to="/profile">
                  <Box sx={{display: 'flex', alignItems: 'center'}} >
                    <Typography variant="div" component="div" sx={{mr: 2}} >
                      Профиль
                    </Typography>
                    <Badge variant="dot" color="secondary" >
                      <Avatar src="https://media.istockphoto.com/photos/digital-eye-wave-lines-stock-background-stock-video-picture-id1226241649?b=1&k=20&m=1226241649&s=170667a&w=0&h=lXhD5bdn_YT50-ItctUnqB2WiGZ8Jye1GZHjvDsb2Xo=" />
                    </Badge>
                  </Box>
                </Link>
              </Box>
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
    <SwipeableDrawer 
      anchor="right" 
      open={drawer}
      onOpen={e => setDrawer(true)}
      onClose={e => setDrawer(false)}
      swipeAreaWidth={300}>
        <Box sx={{
          display: 'flex', 
          flexFlow: 'column',
          pt: 3,
          paddingX: 4
        }}>
          <Link style={{marginBottom: '10px'}} to="*">О нас</Link>
          <Link style={{marginBottom: '10px'}} to="*">Наша команда</Link>
          <Link style={{marginBottom: '10px'}} to="*">Курсы </Link>
          <Link style={{marginBottom: '10px'}} to="*">Сервисы</Link>
        </Box>

    </SwipeableDrawer>
      <Modall open={modal}  close={setModal}>
        <AuthModal/>
      </Modall> 
    </>
  );
}

export default Header;