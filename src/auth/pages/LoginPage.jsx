import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: 'david.cnvs@gmail.com',
    password: '123456',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('Google signin')
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit}>
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

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth>
                  <Typography>Login</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                variant="contained" 
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
