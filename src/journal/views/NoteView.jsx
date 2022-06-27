import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";


export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={40} fontWeight='light'>June 25, 2022</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30, mr: 1}} />
                Save
            </Button>
        </Grid>

        <Grid container>

          <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder="Title here"
          lable='Title'
          sx={{mb: 1}}
          />

          <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder="Write down a log here"
          lable='Title'
          minRows={5}
          />

          <ImageGallery />
          
        </Grid>
    </Grid>
  )
}
