import React from 'react'

const SidebarItem = ({name,active,handleClick}) => {
    console.log(active)
    return (
        <button className={`sidebar-item ${active ? 'active' :''}` } onClick={handleClick}>
         
            {name}
        </button>
    )
}

export default SidebarItem
