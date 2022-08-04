import { useMemo } from "react"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: '',
    password: '', 
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    //no es la accion a despachar   
    dispatch(startLoginWithEmailPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    console.log('Google signin')
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='email' 
              type='email' 
              placeholder='email@gmail.com' 
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange} />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='password' 
              type='password' 
              placeholder='*******' 
              fullWidth 
              name="password"
              value={password}
              onChange={onInputChange} />
            </Grid>

            <Grid container spacing={1} sx={{mb:0, mt:1}}>
              <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button
                 type="submit"
                  variant="contained"
                  disabled={isAuthenticating} 
                  fullWidth>
                  <Typography>Login</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                variant="contained" 
                disabled={isAuthenticating} 
                fullWidth
                onClick={onGoogleSignIn}>
                  <Google />
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color="inherit" to={'/auth/register'} >Create Account</Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

  )
}
