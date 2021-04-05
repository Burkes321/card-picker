import React from 'react'

const TopBar = () => {
    return (
        <div className='topbar'>
            <h1 className='title'>SNAP!</h1>
            <div className='topbar__circle-container'>
                <div className='topbar__circle'></div>
                <div className='topbar__circle'></div>
                <div className='topbar__circle topbar__circle-3' ></div>
            </div>
        </div>
    )
}

export default TopBar
