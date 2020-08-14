import React from 'react'
import Accordion from './Accordion'
import { copyFirmware as copy } from './copyFirmware'

class Firmware extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div id="firmware" >
                <h1>Firmware</h1>
                <p style={{marginTop:10}}>
                    In questa pagina puoi recuperare i firmware per la stampante 
                    e le procedure di verifica ed aggiornamento del firmware in uso.
                </p>
                <Accordion page="firmware"/>
            </div>
        )
    }
}

export default Firmware