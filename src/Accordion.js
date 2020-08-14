import React from 'react'
import './Accordion.css'
//import {VersionCopy, UpdateCopy, FirmwareVersionsCopy} from './copyFirmware'
import copyFirmware from './copyFirmware'
import { copyPrimiPassi } from './copyPrimiPassi'

const content = {
    firmware: copyFirmware,
    primiPassi: copyPrimiPassi,
}

// const content = [
//                     {
//                         title:"Verifica della versione attualmente installata",  
//                         content:<VersionCopy/>,
//                     },
//                     {
//                         title:"Procedura di aggiornamento",
//                         content:<UpdateCopy/>,
//                     },
//                     {
//                         title:"Versioni Firmware disponibili",
//                         content:<FirmwareVersionsCopy/>,
//                     }
//                 ]

class Expandable extends React.Component {
    constructor(props){
        super(props)
        this.state = {displayed: false}
        this.handleClick =  this.handleClick.bind(this)
        this.props = props
    }

    handleClick() {
        this.setState({displayed: !this.state.displayed})
    }

    render(){
        let displayed = this.state.displayed ? "displayed": "hidden"
        
        return(
            <div>
                <button className="expandable" onClick={this.handleClick}>{this.props.title}</button>
                        <div className={displayed}>
                            {this.props.content}
                        </div>
            </div>
        )
    }
}

class Accordion extends React.Component {
    constructor(props){
        super(props)
        this.page = props.page;
    }

    render() {
        const pageToRender = content[this.page]
        return(
            <div>
                {pageToRender.map((cont) => <Expandable title={cont.title} content={cont.content}/>)}
            </div>
        )
    }
}

export default Accordion