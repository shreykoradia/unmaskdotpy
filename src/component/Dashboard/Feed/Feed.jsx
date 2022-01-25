import React, {useState , useEffect} from 'react';
import {Typography} from '@material-ui/core'
import './feed.css'
import Postbox from './Postbox';
import Post from '../Post/Post.js'
import db from '../../../firebase'



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
     <Post 
     displayName="codestack"
     username="test12"
     verified="true"
     text="hello my first post !"
     image=""
     avatar=" "

     />
     <Post 
     displayName="Shrey"
     username="shrey12"
     verified="true"
     text="Blah Blah blah  !"
     image=""
     avatar=" "

     />
    <Post 
     displayName="Max Verstappen"
     username="maxredbull"
     verified="true"
     text="We have won the World Championship  !"
     image=""
     avatar=" "

     />
     
     <Post 
     displayName="Mark Zuckerberg"
     username="mark"
     verified="true"
     text="You did a cool Job shrey!"
     image=""
     avatar=" "

     />
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
