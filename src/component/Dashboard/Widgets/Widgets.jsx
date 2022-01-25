import React from 'react';
import {Paper, Typography ,Button , Grid} from '@material-ui/core'
import './widgets.css'
function Widgets() {
  return(
   <>
   <div className="widgets">
   <Grid container direction={"column"} spacing={2} justifyContent='center' alignItems='center'>  
   <Grid item>
     <Typography gutterBottom variant="h6">Widgets</Typography>
   </Grid>
   <Grid item>
   <Paper elevation={0} >
        <Typography gutterBottom variant="h5">
          CodeStack Docs 
        </Typography>
        <Typography variant="overline">
          The docs contains the open source documentation of the CodeStack web-application Built on React-Js
          and Firebase it is still in progress hang on for the more updates  
        </Typography>
        <Grid item>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </Grid>
    </Paper >
   </Grid>
   <Grid item>
   <Paper elevation={0} >
        <Typography gutterBottom variant="h5">
          How to Open Source ?? 
        </Typography>
        <Typography variant="overline">
         Coming Soon ! , Dont like to Wait go on the Github repository @unmaskdotpy
        </Typography>
        <Grid item>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </Grid> 
    </Paper >
   </Grid>
   <Grid item>
   <Paper  elevation={0}>
        <Typography gutterBottom variant="h5">
        How to get in touch for any queries ?
        </Typography>
        <Typography variant="overline">
         Pull the issues at the Github repository @unmaskdotpy
        </Typography>
        <Grid item>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </Grid>
    </Paper >
   </Grid>
   </Grid>
   </div>
   
   </>
   );
}

export default Widgets;
