import React from 'react'

function BoxColor(props){

    const {r, g, b} = props

    const color = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    
    return (

        <div style={color}>
            <p>rbg({r},{g},{b})</p>
        </div>

    )

}

export default BoxColor