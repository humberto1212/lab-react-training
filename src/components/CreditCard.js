import React from 'react'


function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const firstColor = {
        backgroundColor: bgColor
    }

    const secondColor = {
        color: color
    }

    return(

        <div className='container' style={firstColor}>
            <div className='logo'>
                <p className='logo' style={secondColor} >{type}</p>
            </div>
            
            <p style={secondColor} >{number}</p>
            <p style={secondColor} >Expires {expirationMonth}/{expirationYear}  {bank}</p>
            <p style={secondColor} >{owner}</p>
            
        </div>


    )

}

export default CreditCard