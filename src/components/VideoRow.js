import React from 'react'

const VideoRow = ({image,title,channel,description,subs,views,timestamp}) => {
    return (
        <div className="videoRow">
            <img src={image} alt="" className='videoRow_logo'/>
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p>{channel} </p>
                <p className="subs">{subs} subscriber</p>
                <p>{views} Views</p>
                <p>{timestamp}</p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
