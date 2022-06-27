import { Grid, Typography } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight: 'calc(100vh-110px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 4}}
    >
        <Grid item xs={12}>
            <StarOutlineIcon sx={{fontSize:50, color: 'white'}} />
        </Grid>
        <Grid item xs={12}>
            <Typography color='white' variant='h5'>Select or create a new entry</Typography>
        </Grid>
    </Grid>
  )
}
