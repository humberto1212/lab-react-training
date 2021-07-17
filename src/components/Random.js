import React from 'react'

function Random(props) {

    const {min, max} = props

    const minMax = (min, max) => {
    
        return `Random value between ${min} and ${max} = ${Math.floor(Math.random() * (max - min) + min)}`
    }

    return (

        <div>
            
            <p>{minMax(min, max)}</p>

        </div>

    )

}

export default Random