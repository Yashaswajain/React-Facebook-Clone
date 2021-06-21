import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import GroupIcon from '@material-ui/icons/Group'
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded'
import AddToQueueRoundedIcon from '@material-ui/icons/AddToQueueRounded'
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded'
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded'
import FlagRoundedIcon from '@material-ui/icons/FlagRounded'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={AccountCircleIcon} title="Yashaswa Jain"/>
            <SidebarRow Icon={FavoriteBorderIcon} title="Covid-19 Information Centre"/>
            <SidebarRow Icon={GroupIcon} title="Friends"/>
            <SidebarRow Icon={HomeWorkRoundedIcon} title="Marketplace"/>
            <SidebarRow Icon={AddToQueueRoundedIcon} title="Watch"/>
            <SidebarRow Icon={EventNoteRoundedIcon} title="Events"/>
            <SidebarRow Icon={BookmarkRoundedIcon} title="Saved"/>
            <SidebarRow Icon={FlagRoundedIcon} title="Pages"/>
        </div>
    )
}

export default Sidebar
