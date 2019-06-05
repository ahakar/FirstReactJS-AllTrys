import React, {Component} from 'react';

export default class Display extends Component{
	constructor(props){
		super(props);
		this.state = {
		parentData: ""
		}
		this.toggleButton = true;
	}

	componentDidMount(){
		console.log("componentDidMount", this.props)
	}

	componentWillReceiveProps(newProps){
		console.log("componentWillReceiveProps", newProps);
		this.setState({
			parentData: newProps.dataSend
		})
	}


	shouldComponentUpdate(newProps, newState){
		console.log("shouldComponentUpdate", newProps, newState);
		return true;
	}


	componentWillUpdate(newProps, newState){
		console.log("componentWillUpdate", newProps, newState);
	}

	componentDidUpdate(prevProps, prevState){
		console.log("componentDidUpdate", prevProps, prevState);
		console.log("state", this.state.parentData)
	}


	render(){
		//alert("render")
		return(
			<div>
				display
				<h1>{this.state.parentData}</h1>
			</div>
		);
	}
}