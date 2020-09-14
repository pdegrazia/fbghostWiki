import React, {Component} from 'react'
import './Home.css'

class Home extends Component {
    render(){
        const style = {
            margin:"auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center" 
        }
        return(
            <div id="home">
                <div className="row">
                    <div className="columnLeft">
                        <img style={style} src="images/fbghostitaLogo.png"/>
                    </div>
                    <div className="columnRight">
                        <img style={style} src="images/olympicCarrierPunch.png"/>
                        <p id="homeintro">{`
Benvenuto nella wiki della community italiana interamente dedicata alle stampanti della FlyingBear, le Ghost 4s/5!
Qui raccogliamo tutte le informazioni utili per ottenere il meglio dalla nostra macchina preferita, tramite upgrades, settaggi ottimali e un paio di consigli dei nostri veterani!
La community e' attiva su Discord, ma abbiamo anche altri canali!
Seguici!
                            `}</p>       
                    </div>
                </div>
                <div className="row">
                <a style={style} href="https://discord.gg/p2gtrKm">
                        <img style={style} src="images/discord.png"/>
                </a>
                <a style={style} href="https://www.instagram.com/flyingbear_ghost4s/">
                        <img style={style} src="images/instagramButton4.png"/>
                </a>
                <a style={style} href="https://www.facebook.com/groups/282311076279106">
                        <img style={style} src="images/facebookButton2.png"/>
                </a>
                <a style={style} href="https://www.instagram.com/flyingbear_ghost4s/">
                        <img style={style} src="images/telegramButton.png"/>
                </a>
                </div>
            </div>
        )
    }
}

export default Home