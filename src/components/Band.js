import React from 'react'

const Band = props => {
    console.log(props.text)
    return (
        <li>Artist: {props.name}</li>
    )
}
export default Band;
