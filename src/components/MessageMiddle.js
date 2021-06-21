import React,{useState,useEffect,useStateValue} from 'react'
import './MessageMiddle.css'
import {Avatar} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import MoodIcon from '@material-ui/icons/Mood'
import FormData from 'form-data'
import axios from '../axios'
function MessageMiddle({profileSrc}) {
    const [input,setInput]=useState('')
    const [image,setImage]=useState(null)
    const [imageURL,setImageURL]=useState('')
    

    function handleChange(e){
              if(e.target.files[0]){
                  setImage(e.target.files[0])
              }
    }
    function handleUpload(e){
        e.preventDefault()
        }
    return (
        <div class="messageMiddle">
            <div class="upper">
            <Avatar src={profileSrc} fontsize="large" className="avatar"/>
            <form>
                <input type="text" placeholder="What's on your mind,Yashaswa?" 
                className="formInput"
                name="formInput" 
                value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                {/*<input type="file" 
                placeholder="Upload" 
                className="upload"
                onChange={handleChange}
                />*/}
                <button type="submit" 
                className="submit_button"
                onClick={handleUpload}
                >POST</button>
            </form>
            </div>
            <div className="lower">
              <div className="videoCall">
                  <VideoCallIcon fontsize="xxlarge" style={{color:'#fc0341'}} className="videoIcon icon"/>
                  <h4>Live Video</h4>
              </div>
              <div className="photos">
                  <PhotoLibraryIcon fontsize="large" style={{color:'#08cc50'}} className="photoIcon icon"/>
                  <h4>Photo/Video</h4>
              </div>
              <div className="mood">
                  <MoodIcon fontsize="large" style={{color:'#fcba03'}} className="moodIcon icon"/>
                  <h4>Feeling/Activity</h4>
              </div>

            </div>
        </div>
    )
}

export default MessageMiddle
