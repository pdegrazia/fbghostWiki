import React, {Component} from 'react'

class Home extends Component {
    render(){
        const style = {margin:"auto", }
        return(
            <div id="home">
                <h1 style={style}>Community Italiana Flying Bear Ghost 4s/5</h1>
                <img style={style} src="images/fbghostitaLogo.jpg"/>
                <a style={style} href="https://discord.gg/p2gtrKm">
                    <img src="images/discord.png"/>
                </a>
            </div>
        )
    }
}

export default Home