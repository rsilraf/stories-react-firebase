import './VideoHeader.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'

const VideoHeader = () => {
    return (
        <div className="videoHeader">
            <ArrowBackIcon />
            <h3>Shorts</h3>
            <CameraAltOutlinedIcon />
        </div>
    )
}

export default VideoHeader
