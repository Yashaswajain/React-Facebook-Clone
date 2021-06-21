import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import GroupIcon from '@material-ui/icons/Group'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import MessageIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import {Avatar} from '@material-ui/core'
import './Header.css'

function Header({profileSrc}) {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="facebook logo" id="logo">
                </img>
                <div className="header_input">
                <SearchIcon />
                <input type="text" name="search" placeholder="Search facebook"></input>
                </div>
            </div>
            <div className="header_center">
            <div className="header_option header_option--active">
             <HomeIcon fontsize="large"/>
            </div>
            <div className="header_option header_option--active">
             <AddToQueueIcon fontsize="large"/>
            </div>
            <div className="header_option header_option--active">
             <SubscriptionsIcon fontsize="large"/>
            </div>
            <div className="header_option header_option--active">
             <GroupIcon fontsize="large"/>
            </div>
            <div className="header_option header_option--active">
             <SportsEsportsIcon fontsize="large"/>
            </div>
            </div>
             
             <div className="header_right">
            <div className="header_info">
            <Avatar  src={profileSrc} fontsize="small"/>
                <h4>Yashaswa Jain</h4>
            </div>
            <IconButton>
            <AddIcon fontsize="large"></AddIcon>
            </IconButton>
            <IconButton>
            <MessageIcon fontsize="large"></MessageIcon>
            </IconButton>
            <IconButton>
            <NotificationsIcon fontsize="large"></NotificationsIcon>
            </IconButton>
            <IconButton>
            <ArrowDropDownCircleIcon fontsize="large"></ArrowDropDownCircleIcon>
            </IconButton>

             </div>


        </div>
    )
}

export default Header
