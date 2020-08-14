import React from 'react'
import './Header.css'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return( 
            <div id="header">
                <img src='/images/fbghostitaLogo.jpg'/>
                <h1>Community Italiana per Flyingbear Ghost</h1>
            </div>
        )
    }
}

export default Header