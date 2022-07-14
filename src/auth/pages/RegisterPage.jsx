import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {

  const {formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid} = useForm({
    email: 'david.cnvs@gmail.com',
    password: '123456',
    displayName: 'David Canovas'
  });

  const formValidations = {
    email: [ (value) => value.includes('@'), 'El email debe ser valido'],
    password: [ (value) => value.length >= 6, 'La contraseña debe tener mas de 6 caracteres'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }


  return (
    <AuthLayout title='Register'>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='name' 
              type='name' 
              placeholder='John Doe'
              name="displayName"
              value={displayName}
              onChange={onInputChange} 
              error={!displayNameValid}
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
              fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={12}>
                <Button 
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

