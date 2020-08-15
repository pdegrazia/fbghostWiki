import React from 'react'
import Home from './Home'
import Firmware from './Firmware'
import PrimiPassi from './PrimiPassi'

//refactor to use proper keys to display values
const textToDisplay = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven"
}

class Content extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        var style = {
            width: "100%",
            height: "100vh"
        } 
        var myVar = textToDisplay[this.props.testProp];
        let myContent;
        switch(myVar){
            case "one":
                myContent = <div style={style}><Home/></div>
                break;
            case "two":
                myContent = <div style={style}><PrimiPassi/></div>
                break;
            case "three":
                myContent = <div style={style}><Firmware/></div>
                break;
            case "four":
                myContent = <div style={style}>4</div>
                break;
            case "five":
                myContent = <div style={style}>5</div>
                break;
            case "six":
                myContent = <div style={style}>6</div>
                break;
            default:
                myContent = <div style={style}>default</div>
                break;
        }

        return(
            myContent
        )
    }
}

export default Content