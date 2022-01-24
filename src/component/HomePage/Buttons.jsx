import React from 'react'
import {Button , makeStyles , } from '@material-ui/core'
import {Link} from 'react-router-dom'



const styles = {
    display : "flex",
    flexDirection : "row",
    marginTop : '5%',
    justifyContent:'center',
    alignItems:'center',
}

// making a hook api for styles
const useStyles = makeStyles({
    root: {
            // display:'flex',
            border: 0,
            background: '#212121',
            color: 'white',
            '&:hover':{
                color: "#212121"
            },
            padding: "9px 18px",
            height:'3rem',
            width:'6rem',
            margin:'1rem'       
    },

    
});


function Buttons() {
    const classes = useStyles();
    return (
        <div style={styles}>   
            
            <Button variant="text" component={Link} to="/login" className={classes.root}>Login</Button>
            <Button variant="text" component={Link} to="/signup" className={classes.root}>Signup</Button>
        </div>
    )
}

export default Buttons
