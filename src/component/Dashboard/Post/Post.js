import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar , Button } from "@material-ui/core";
import { MdBookmark } from "react-icons/md";
import { MdThumbUpOffAlt } from "react-icons/md";
import { MdThumbDownOffAlt } from "react-icons/md";
import { MdShortcut } from "react-icons/md";
import { RiMedal2Line } from "react-icons/ri";




const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h4>
                {displayName}{" "}
                <span className="post__headerSpecial">
                {verified && <RiMedal2Line className="post__badge" />}{" "}
                  @{username}
                  
                </span>
              </h4>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <Button><MdBookmark /></Button>
             <Button>< MdThumbUpOffAlt /></Button>          
            <Button>< MdThumbDownOffAlt /></Button>
           <Button>< MdShortcut  /></Button> 
          </div>
        </div>
      </div>
    );
  }
);

export default Post;