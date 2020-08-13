import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function SearchPage(){
    return(
            <div className="sarchPage">
                <div className="searchPage_filter">
                    <TuneOutlinedIcon/>
                    <h3>Filter</h3>
                </div>
                <hr/>
                <ChannelRow
                    image="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    channel="Crack Programmer"
                    verified="* "
                    subs="600k"
                    description="you can find awesome programming video"
                    noOfVideos="400"
                />
                <hr/>
                <VideoRow
                    image="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    views="1.1M"
                    subs="770k"
                    description="lololo lolve as"
                    timestamp="59 second ago"
                    channel="Crack Programmer"
                    title="Lets build a you tube colne with react.js for Beginners"

                />

                <VideoRow
                    image="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    views="1.1M"
                    subs="770k"
                    description="lololo lolve as"
                    timestamp="59 second ago"
                    channel="Crack Programmer"
                    title="Lets build a you tube colne with react.js for Beginners"

                />

                <VideoRow
                    image="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    views="1.1M"
                    subs="770k"
                    description="lololo lolve as"
                    timestamp="59 second ago"
                    channel="Crack Programmer"
                    title="Lets build a you tube colne with react.js for Beginners"

                />

                <VideoRow
                    image="data:image/jpeg;base64,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"
                    views="1.1M"
                    subs="770k"
                    description="lololo lolve as"
                    timestamp="59 second ago"
                    channel="Crack Programmer"
                    title="Lets build a you tube colne with react.js for Beginners"

                />
            </div>
    )
}

export default SearchPage