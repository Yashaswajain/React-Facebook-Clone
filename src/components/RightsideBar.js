import React from 'react'
import './RightsideBar.css'
import RightbarRow from './RightbarRow.js'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import SearchIcon from '@material-ui/icons/Search'
import Cdata from './ChatData.js'
function RightsideBar() {
    function make_row(data){
        return <RightbarRow imgSrc={data.imgSrc} name={data.name}/>
    }
    return (
        <div className="rightsideBar">
            
            {Cdata.map(make_row)}
        </div>
    )
}

export default RightsideBar
