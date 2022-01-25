import React from 'react';
import { IoSearch } from "react-icons/io5";
import {Grid, TextField , Paper ,Typography } from '@material-ui/core'
import './explore.css'


function Explore() {
  return(
    <>  
        <div className='explore'>
            <div className="explore-search">
            <Grid>    
            <IoSearch />
            <TextField placeholder="Dive into Chaos of Code " id="fullWidth"></TextField>
            </Grid>
            </div>
            <div className='topics'>
            <Paper elevation={0} square={true}>
        <Typography gutterBottom variant="overline">
            Web Development
        </Typography>
        
    </Paper >
    <Paper elevation={0} square={true}>
        <Typography gutterBottom variant="overline">
            BlockChain
        </Typography>
        
    </Paper >
    <Paper elevation={0} square={true}>
        <Typography gutterBottom variant="overline">
            AI
        </Typography>
        
    </Paper >
    <Paper elevation={0} square={true}>
        <Typography gutterBottom variant="overline">
            DataScience
        </Typography>
        
    </Paper >
    <Paper elevation={0} square={true}>
        <Typography gutterBottom variant="overline">
            AR & VR
        </Typography>
        
    </Paper >
            
            </div>
        </div>
    </>
  ) 
}

export default Explore;
