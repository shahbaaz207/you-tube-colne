import React from 'react'
import Avatar from '@material-ui/core/Avatar'
// import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOut'

const ChannelRow = ({image,channel,verified,subs,description,noOfVideos}) => {
    
    return (
        <div className="channelRow">
            <Avatar src={image} className="channel_logo" alt="" />
            <div className="channelRow_info">
                <h4>{channel} {verified}</h4>
                <p>{subs}  subscriber +{noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
