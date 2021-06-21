import React from 'react'
import {Avatar} from '@material-ui/core'
import './Story.css'
function Story(props) {
    const divStyle={
        backgroundImage:`url(${props.bgImg})`
    }
    return (
        <div class="story" style={divStyle}>
            <img src={props.profileSrc} class="avatar"/>
            <h4 className="title">{props.title}</h4>
        </div>
    )
}

export default Story
