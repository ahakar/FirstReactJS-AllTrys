import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

    loginPage(){
      this.props.history.push('/login');
    }
    
    render(){
        return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">CREATE YOUR ACCOUNT</h5>
              <h6 className="card-subtitle mb-4 text-muted text-center">This is Step 1</h6>
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
                <div className="form-row">
                  <div className="col-md-12 mb-5">
                    <input className="form-control form-control-lg" type="password" placeholder="Confirm Password" required/>
                  </div>
                </div>
                <div className="form-group text-center">
                  <button onClick={this.loginPage.bind(this)} className="btn btn-success">Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default App;
