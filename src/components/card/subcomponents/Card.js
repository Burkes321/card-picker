import React from 'react'

const Card = (props) => {
    return (
        <div>
            <h1>{props.value} of {props.suit}</h1>
            <img src={props.img} />
        </div>
    )
}

export default Card
