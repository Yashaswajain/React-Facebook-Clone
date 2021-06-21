import React from 'react'
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SendIcon from '@material-ui/icons/Send'
import './Post.css'

function Post({profileSrc,timestamp,imgName,userName,message}){
    var postImage={
        "display":"block"
    }
    if(imgName==""){
        postImage["display"]="none"
    }
    return (
        <div className="post">
        <div className="upperPart">
            <Avatar src={profileSrc} className="profilePhoto"></Avatar>
            <h4>{userName}</h4>
            <p>{new Date(parseInt(timestamp)).toDateString()}</p>
        </div>
        <h4>{message}</h4>
        <img src={imgName} style={postImage}></img>
        

        <div className="lowerPart">
            <div className="option">
             <ThumbUpIcon fontsize="large"></ThumbUpIcon>
             <p>Like</p>
            </div>
            <div className="option">
               <ChatBubbleOutlineIcon fontsize="large"></ChatBubbleOutlineIcon>
               <p>Comment</p>
            </div>
            <div className="option">
                <SendIcon fontsize="large"></SendIcon>
                <p>Share</p>
            </div>
        </div>
        </div>
    )
}

export default Post