import React, {Component} from 'react';
import Display from './Display';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class LifeCycle extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			tableData: []
		}
	}

	componentWillMount(){
		//alert("componentWillMount")
		//api calls response --> undefined
		
	}
	componentDidMount(){
		//alert("componentDidMount");
		axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
			console.log("response from api---->", res);
			this.setState({
				tableData: [...this.state.tableData, ...res.data]
			})
		})
		.catch(err => {
			console.log(err);
		})
	}

	getData(e){
		this.setState({
			name: e.target.value
		})
	}

	render(){
		//alert("render")
		return(
			<div>
				LIfeCYcle
				<a href=""></a>
				<h1>{this.state.name}</h1>
				<Link to="/home">
					<h2>go to home page</h2>
					<button onClick></button>
				</Link>
				<table className="table">
				<thead>					
				<tr>
					<th>S.NO</th>
					<th>Title</th>
					</tr>
				</thead>
				<tbody>
				{(this.state.tableData.map((data, index) => {
					return(
						<tr key={index}>
							<td>{data.id}</td>
							<td>{data.title}</td>
						</tr>
					);
				}))}
				</tbody>
					
				</table>
				<input type="text" onChange={this.getData.bind(this)} />
				<Display dataSend={this.state.name} />
			</div>
		);
	}
}