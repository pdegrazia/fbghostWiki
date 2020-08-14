import React from 'react'
import './index.css'
import Accordion from './Accordion'
import { SoftwareCopy } from './copyPrimiPassi'

class PrimiPassi extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="primipassi">
                <h1>Primi Passi</h1>
                <p>
                    In questa pagina approfondiremo la configurazione iniziale
                     e le calibrazioni essenziali della stampante.
                </p>
                <SoftwareCopy/>
                <Accordion page="primiPassi"/>
            </div>
        )
    }
}

export default PrimiPassi