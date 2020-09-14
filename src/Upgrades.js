import React from 'react';
import './Upgrades.css'

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {displayed: props.displayed}
    }
    render(){
        console.log('modal displayed: ' + this.state.displayed)
        let displayed = this.state.displayed ? "displayed": "hidden"

        return( 
            <div id='modal' className={displayed}>
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        )
    }
}

class UpgradeItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick =  this.handleClick.bind(this);
        this.state = {displayed: false}
        this.props = props
    }
    
    handleClick() {
        this.setState({displayed: !this.state.displayed})
        console.log(this.state)
    }

    render(){
        let displayed = this.state.displayed ? "displayed": "hidden"
        console.log(displayed)
        return(
            <div className='upgradeItem' onClick={this.handleClick}>
                <span className='upgradeItemTitle'>{this.props.title}</span>
                <img src='https://via.placeholder.com/150'/>
                <Modal displayed={displayed}/>
            </div>
        )
    }
}

class Upgrades extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='upgradeItems'>
                {/* TODO: replace html components with list */}
                <UpgradeItem title='Convogliatore'/>
                <UpgradeItem title='Catena'/>
            </div>
        )
    }
}

export default Upgrades