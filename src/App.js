import React from 'react'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Feed from './components/Feed.js'
import RightsideBar from './components/RightsideBar.js'
import './App.css'
function App() {
    return (
        <>
        <Header profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small/boy-cartoon-face-free-vector.jpg"/>
        <div className="app">
        <Sidebar/>
        <Feed/>
        <RightsideBar/>
        {/*HEADER*/}
        {/*Sidebar*/}
        {/*mainfeed*/}
        {/*rightbar*/}
        </div>
        
        </>
    )
}

export default App
