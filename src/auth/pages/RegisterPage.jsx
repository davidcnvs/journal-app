import { useMemo, useState } from "react";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks"
import { AuthLayout } from "../layout/AuthLayout"
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El email debe ser valido'],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener mas de 6 caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (
    <AuthLayout title='Register'>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='name' 
              type='name' 
              placeholder='John Doe'
              name="displayName"
              value={displayName}
              onChange={onInputChange} 
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='email'
              type='email'
              placeholder='mrdoe@mail.com'
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid} 
              fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='password' 
              type='password' 
              placeholder='*******' 
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid} 
              fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button 
                disabled={isCheckingAuthentication}
                variant="contained" 
                type="submit"
                fullWidth>
                  <Typography>Create</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color="inherit" to={'/auth/login'} >Sign in instead</Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  )
}

