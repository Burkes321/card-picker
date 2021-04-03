import React from 'react'

const TopBar = () => {
    return (
        <div className='topbar'>
            <h1>SNAP!</h1>
            <div className='topbar__circle-container'>
                <div className='topbar__circle'></div>
                <div className='topbar__circle'></div>
                <div className='topbar__circle'></div>
            </div>
        </div>
    )
}

export default TopBar
