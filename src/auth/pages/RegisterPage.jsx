import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    
    <AuthLayout title='Register'>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='name' type='name' placeholder='John Doe' fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='email' type='email' placeholder='mrdoe@mail.com' fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='password' type='password' placeholder='*******' fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" fullWidth>
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

