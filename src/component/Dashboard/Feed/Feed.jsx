import React, {useState , useEffect} from 'react';
import {Typography} from '@material-ui/core'
import './feed.css'
import Postbox from './Postbox';
import Post from '../Post/Post.js'
import db from '../../../firebase'
import { collection , onSnapshot } from 'firebase/firestore';



function Feed() {

      const [posts , setPosts] = useState([]);

      useEffect(() =>{
        const q = collection(db ,"posts")
         onSnapshot(q, (snapshot) =>(
          setPosts(snapshot.docs.map(doc => doc.data()))
        ));
      },[]);


     

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
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}


     <Post 
     displayName="codestack"
     username="test12"
     verified={true}
     text="hello my first post !"
     image=""
     avatar=" "

     />

    <Post 
     displayName="Kevin Systrom"
     username="kevininstagram"
     verified="true"
     text="We have won the World Championship  !"
     image=""
     avatar=" "

     />
     
     <Post 
     displayName="Mark Zuckerberg"
     username="mark"
     verified={false}
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
