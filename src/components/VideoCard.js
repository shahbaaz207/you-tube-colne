import React from 'react'
import Avatar from '@material-ui/core/Avatar'
const VideoCard = ({image,title,channel,views,timestamp,channelImage}) => {
    return (
        <div className="video">
            <img src={image} alt="" className="video_thumbnail"/>
            <div className="video_info">
                <Avatar className="video_avatar" src={channelImage} alt={channel}/>
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
            </div>
            </div>
        </div>
    )
}

export default VideoCard
