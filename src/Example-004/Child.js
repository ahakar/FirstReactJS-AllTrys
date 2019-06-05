import React, {Component} from 'react';

export default class Child extends Component{
	constructor(props){
		super(props);
		this.state = {
			subject: "Vue js"
		}
	}

	sendData(){
		this.props.sendBackToParent(this.state.subject);
	}

	render(){
		
		return(
			<div>
				child Component
				<h1>{this.props.dataSend}</h1>
				<button onClick={this.sendData.bind(this)}>Send Back</button>
			</div>
		);
	}
	
}