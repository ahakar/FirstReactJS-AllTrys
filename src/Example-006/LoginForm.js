import React from 'react';

export default class LoginForm extends React.Component {
	render () {
		return (
			<div className="container pt-5 pb-5">
				<div className="row justify-content-center">
					<div className="col-sm-12 col-md-6 col-lg-6">
						<img src="/assets/undraw_login_jdch.svg" alt="Login Form" className="img-thumbnail" />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 seperatorLine">
						<h5>Login as Admin User</h5>
						<form>
			                <div className="form-row">
			                  <div className="col-md-12 mb-3">
			                    <input className="form-control form-control-lg" type="text" placeholder="Email" required/>
			                  </div>
			                </div>
			                <div className="form-row">
			                  <div className="col-md-12 mb-3">
			                    <input className="form-control form-control-lg" type="password" placeholder="Password" required/>
			                  </div>
			                </div>
			                <div className="form-group text-center">
			                  <button type="submit" className="btn btn-success">Next</button>
			                </div>
			              </form>
					</div>
				</div>
			</div>
		);
	}
}