import React from 'react';
import { Avatar , Button , Box , TextField  ,makeStyles} from '@material-ui/core';
import './postbox.css'
import { RiBarChartGroupedLine } from "react-icons/ri";
import { MdSend} from "react-icons/md";
import { MdCollections} from "react-icons/md";

const useStyles = makeStyles({
    root: {
            border: 0,
            background: '#212121',
            color: 'white',
            '&:hover':{
                background: '#212121',
                variant:'raised'
            },
            padding: "1px",
            height:'2rem',
            width:'4rem',
            margin:'1rem'       
    },

    
});

function Postbox() {
    const classes = useStyles();
  return (
            <>
                    <div className='postBox'>
                    <Box
                        sx={{
                        width: 800,
                        maxWidth: '100%',
                        }}
                    >
                    <Avatar className="avatar" src ="#"  />
                    <TextField placeholder='Hold a Thought, Post it !'  fullWidth id="fullWidth" />
                    <Button variant='text' type='submit'><MdSend /></Button>
                    <Button variant='text' type='submit'><MdCollections /></Button>
                    <Button variant='text' type='submit'>< RiBarChartGroupedLine /></Button>
                    <Button id="button2" variant="outlined" type='submit'size='small' className={classes.root}>Post</Button>
                     </Box>
                    </div>
        </>
  )
}

export default Postbox;