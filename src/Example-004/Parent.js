import React, {Component} from 'react';
import Child from './Child.js';

export default class Parent extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "abcde",
			topic: "React js",
			count: 0,
			array: ['a', 'b'],
			obj: {},
			toggle: true
		}
	}

	changeName(){
		this.setState({
			name: "XYZ",
			topic: "Angular JS"
		})
	}

	receivedData(data){
		console.log("data from child compoennt--->", data);
		this.setState({
			topic: data
		})
	}

	render(){
		return(
			<div>
				Parent Component
				<h1>{this.state.name}</h1>
				<button onClick={this.changeName.bind(this)}>Change</button>
				<Child dataSend={this.state.topic} sendBackToParent={this.receivedData.bind(this)} />
			</div>
		);
	}
	
}