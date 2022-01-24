import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
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
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <RiMedal2Line className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <MdBookmark fontSize="small" />
            < MdThumbUpOffAlt fontSize="small" />
            < MdThumbDownOffAlt fontSize="small" />
            < MdShortcut fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;