import React ,{useState,useEffect} from 'react'
import StoryBar from './StoryBar.js'
import MessageMiddle from './MessageMiddle.js'
import Post from './Post.js'
import CreateRoom from './CreateRoom.js'
import './Feed.css'
import axios from '../axios.js'

function Feed() {
    const [profilePic,SetprofilePic]=useState('')
    const [postsData,SetpostsData]=useState([])
    
    

    return (
        <div className="feed">
        <StoryBar/>
        <MessageMiddle profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"/>
        <CreateRoom/>
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419351.jpg"
        userName="Yashaswa Jain"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419343.jpg"
        userName="Meghan Markle"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419351.jpg"
        userName="Loius Litt"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName=""
        userName="Mike Ross"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419343.jpg"
        userName="Donna Paulson"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419351.jpg"
        userName="Harvy Specter"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419350.jpg"
        userName="Sheila Sazs"
        message="I'm the creator of this clone"
        />
        <Post
        profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"
        timestamp="977729306689"
        imgName="https://wallpapercave.com/wp/wp2419350.jpg"
        userName="Yashaswa Jain"
        message="I'm the creator of this clone"
        />
        </div>
    )
}

export default Feed
