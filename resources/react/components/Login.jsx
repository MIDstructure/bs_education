import * as React from 'react';

import { Avatar, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, FormHelperText } from '@mui/material'
// import { LoadingButton } from '@mui/lab'
import { LoadingButton } from '@mui/lab';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginValid } from "../service/Validation";

import yup from 'yup'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}



function Login({setCurrent}) {

  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const [valid, setValid] = React.useState({
    valid: false,
    emailError: '',
    passwordError: ''
  })

  const handleInput = async e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  } 
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const val = await loginValid.isValid(user)
    const err = loginValid.validate(user, {abortEarly: false})
    .then(e => {
      console.log(e);
    })
    .catch(e => {
      console.log(e.inner.map(e => {return e.message}), "errors");
      setValid({...valid, error: e.message})
    })
  };


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        mt={2}
        mb={4}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            value={user.email}
            onChange={handleInput}
            name="email"
            label="Электронная почта"
            id="email"
            autoComplete="email"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <TextField
            value={user.password}
            onChange={handleInput}
            name="password"
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormHelperText>

          </FormHelperText>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={e => setCurrent(2)}>
                Еще нет аккаунта?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login