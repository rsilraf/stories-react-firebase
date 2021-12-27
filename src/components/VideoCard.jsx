import { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

const VideoCard = ({url, channel, avatarSrc, song, likes, shares}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        videoRef.current[playing ? 'pause' : 'play']()
        setPlaying(!playing)
    }
    return (
        <div className="videoCard">
            <VideoHeader />
            <video 
                src={url}
                className="videoCard__player"
                alt="Short Video App"
                ref={videoRef}
                onClick={handleVideoPress}
                loop
           />
           <VideoFooter 
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}
            />
        </div>
    )
}

export default VideoCard
