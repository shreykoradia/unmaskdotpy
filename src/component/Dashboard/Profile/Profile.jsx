import React, { useRef, useState } from "react"
import {Button , Grid , makeStyles , Typography } from "@material-ui/core"
import {useAuth} from '../../../contexts/AuthContext'
import { useNavigate } from "react-router-dom"
import {TextField} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

function Profile() {

    const styles={
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop :'3%',
        marginLeft:'2%',
        maxWidth:'100vw',
        flexDirection:'row'
    }

    const useStyles = makeStyles({
        root: {
                // display:'flex',
                border: 0,
                background: '#212121',
                color: 'white',
                '&:hover':{
                    background: '#212121',
                    variant:'raised'
                },
                padding: "9px 18px",
                height:'3rem',
                width:'14rem',
                margin:'1rem'       
        },
    
        
    });
    



    const classes = useStyles();
    const emailRef = useRef()
    // const username = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail , logout} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          navigate("/login")
        } catch {
          setError("Failed to log out")
        }
      }

    
    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        const promises = []
        setLoading(true)
        setError("")
    
        if (emailRef.current.value !== currentUser.email) {
          promises.navigate(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
          promises.navigate(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
        .then(() => {
          navigate("/")
        })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })
    }

  return (
        <>
                  
                  <div style={styles}>  
            <Grid container direction={"column"} spacing={1} justifyContent='center' alignItems='center' >
            <Grid item>
            <Typography   paragraph={false} align="left" gutterBottom={true} variant="h4" noWrap={false}>Profile</Typography>
            </Grid>
             <Grid item>
             <Typography   paragraph={true} align="center" gutterBottom={true} variant="overline" noWrap={false}>
                Profile is always best When you set it up
            </Typography>
             </Grid>  
             {error && <Alert  size="small"variant="standard" severity="error">{error}</Alert>} <br /> 
             <form onSubmit={handleSubmit}>
            <Grid container direction={"column"} spacing={2} justifyContent='center' alignItems='center' >     
            <Grid item>
             <TextField label="Email" placeholder='Write a Email'type="email" variant="outlined" inputRef={emailRef} required   />
           </Grid>
           <Grid item>
             <TextField label="Enter your password" type="password" variant="outlined" inputRef={passwordRef} required />
           </Grid>
           <Grid item>
             <TextField label="Confirm password" type="password" variant="outlined" inputRef={passwordConfirmRef} required />
           </Grid>
           <Grid item>
           <Button variant="contained" type='submit' disabled={loading} size='large' className={classes.root}>
                Confirm
            </Button>
            </Grid>
           <Grid item>
           <Button variant="contained" type='submit' onClick={handleLogout} size='large' className={classes.root}>
                Logout
            </Button>
            </Grid>
            </Grid>
            </form>
           </Grid>

        </div>
        
        </>

)}

export default Profile;
