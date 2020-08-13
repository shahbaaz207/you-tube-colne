import React from 'react'
const SidebarRow = ({title,Icon,selected}) => {
    return (
        <div className={`sidebarRow ${selected &&'selected'}`}>
            {Icon&&<Icon className="sidebar_icon"/>}
            {Icon?<p className="sidebar_title">{title}</p>:<h3>{title}</h3>}
        </div>
    )
}

export default SidebarRow
