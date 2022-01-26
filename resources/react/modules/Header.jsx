import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Modall from "../components/Modall";
import Login from "../components/Login";
import { AuthModal } from "../components";


function Header() {

  const [modal, setModal] = useState(false);


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit" onClick={e => setModal(true)}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Modall open={modal} close={setModal}>
        <AuthModal/>
      </Modall>
    </>
  );
}

export default Header;
