import React from 'react'

function IdCard(props){
    return (
        <div>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <div>Birth: {props.birth}</div> 
            <img src={props.picture}  alt='' />
        </div>

    )
}

export default IdCard