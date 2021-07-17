import React from 'react'

function Greetings(props){

   
    

    const {language, children} = props

   
    const say = () => {

        if(language === 'de' ){
            
            return 'Hallo'
        
        }else if(language === 'en' ){

            return 'Hello'
            
        }

    }




    return (

       <div>

            <h2 lang={language}>{say()} {children}</h2>

       </div>

    )

}

export default Greetings