import react from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import './CreateRoom.css'
function CreateRoom(){
    return (
        <div className="room">
        <div className="roomButton">
        <VideoCallIcon fontsize="large" className="roomVideo"/>
        <h4>Create Room</h4>
        </div>
        </div>
    )
}
export default CreateRoom