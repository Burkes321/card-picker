import React from 'react'

const Snap = (props) => {
    return (
        <div>
            {props.suitsnap ? (<h1>Suit Snap!</h1>) : (<p></p>)}
        </div>
    )
}

export default Snap
