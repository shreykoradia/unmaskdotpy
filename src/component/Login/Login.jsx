import React, {useRef , useState} from 'react'
import {Button , Grid , makeStyles , Typography } from "@material-ui/core"
import {TextField} from '@material-ui/core'
//import {FormControl} from '@material-ui/core
import {useAuth} from '../../contexts/AuthContext'
import {Link , useNavigate} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
 
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



function Login() {
    const classes = useStyles();
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

  
    async function handleSubmit(e) {
      e.preventDefault()  
      try { 
        setLoading(true);
        setError("");
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/dashboard")
      } catch(err){
        console.log(err)
        setError("Failed to sign in")
      }
  
      setLoading(false)
    }
  

    return (
        <>
        <div style={styles}>
            <Grid container direction={"column"} spacing={1} justifyContent='center' alignItems='center' >
            <Grid item>
            <Typography   paragraph={false} align="left" gutterBottom={true} variant="h4" noWrap={false}>CodeStack</Typography>
            </Grid>
             <Grid item>
             <Typography   paragraph={true} align="center" gutterBottom={true} variant="overline" noWrap={false}>
                Be the 1% of the 1% , Codestack where code is the chaos ! 
            </Typography>
            </Grid>  
             {error && <Alert  size="small"variant="standard" severity="error">{error}</Alert>} <br /> 
             <form onSubmit={handleSubmit}>
            <Grid container direction={"column"} spacing={2} justifyContent='center' alignItems='center' >        
            <Grid item>
             <TextField label="Email" placeholder='Write a Email'type="email" variant="outlined" inputRef={emailRef} required   />
           </Grid>
           <Grid item>
             <TextField label="Enter a password" type="password" variant="outlined" inputRef={passwordRef} required />
           </Grid>
           <Grid item>
           <Button variant="contained" type='submit' disabled={loading} size='large' className={classes.root}>
                Login
            </Button>
            </Grid>
            </Grid>
            </form> 
            <Grid item>
            <Typography paragraph={false} align="center" gutterBottom={false} variant="overline" noWrap={false}>Don't have an account ?<Link to="/signup">signup</Link></Typography>
            </Grid>
           </Grid>




        </div>
            
        </>
    )
}

export default Login
