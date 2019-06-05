import React, {Component}  from 'react';
import ImgDetails from './sample.json';

export default class Login extends Component{
	constructor(props){
		super(props);
			this.state = {
				loginDetails: {
					email: "",
					password: ""
				},
				count: 0,
				img: ImgDetails
			}
		
	}

	handleChange(name, event){
		this.state.loginDetails[name] = event.target.value;
		this.setState({
			loginDetails: this.state.loginDetails,
			count: this.state.count + 1
		}, () => {
			console.log("loginDetails --->", this.state.loginDetails)
		})
	}

	loginUser(){

	}

	render(){
		return(
			<div className="container">
				<form onSubmit={this.loginUser.bind(this)}>
					<input type="email" placeholder="Email here..." onChange={this.handleChange.bind(this, "email")} />
					<input type="password" placeholder="Password here..." onChange={this.handleChange.bind(this, "password")} />
					<button type="submit" >Login</button>
					<img src="path" alt="sample" />
				</form>
				{(this.state.img.map((data, idx) => {
					return(
						<h1 key={idx}>{data.imgTitle}</h1>
					);
				}))}

			</div>
		);
	}

}



/*import React, {Component}  from 'react';

export default class Login extends Component{
	constructor(props){
		super(props);
			this.state = {
				email: "",
				password: ""
			}
		
	}

	getEmail(event){
		console.log("email --->", event.target.value);
		this.setState({
			email:  event.target.value
		})
	}

	getPassword(event){
		console.log("password --->", event.target.value);
		this.setState({
			password:  event.target.value
		})
	}

	loginUser(){

	}


	render(){
		return(
			<div className="container">
				<form onSubmit={this.loginUser.bind(this)}>
					<input type="email" placeholder="Email here..." onChange={this.getEmail.bind(this)} />
					<input type="password" placeholder="Password here..." onChange={this.getPassword.bind(this)} />
					<button type="submit" >Login</button>
				</form>
			</div>
		);
	}
}*/