import React, {useState , useEffect} from 'react';
import {Typography} from '@material-ui/core'
import './feed.css'
import Postbox from './Postbox';
import Post from '../Post/Post.js'
import db from '../../../firebase'
import { collection } from "firebase/firestore";


function Feed() {
  return (
  <>
    <div className="feed">
    {/* header */}
    <div className="header">
    <Typography paragraph={false} align="left" gutterBottom={true} variant="h6" noWrap={true}>Home</Typography>
    </div>

    {/* Post box for Q&A */}
      <Postbox />  
     {/* Posts  */}
    
    {/* Posts  */}
    {/* Posts  */}
    {/* Posts  */}
    {/* Posts  */}
    {/* Posts  */}
    {/* Posts  */}
    {/* Posts  */}
    </div>
  </>

    
);}

export default Feed;
