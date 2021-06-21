import React from 'react'
import {Avatar} from '@material-ui/core'
import './RightbarRow.css'
function RightbarRow({imgSrc,name}) {
    return (
        <div className="rightbarRow">
            <Avatar src={imgSrc} fontsize="large" className="avatar"/>
            <h4>{name}</h4>
        </div>
    )
}

export default RightbarRow
