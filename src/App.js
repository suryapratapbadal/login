import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './logo.svg';
import './App.css';
import { getTemprature } from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName : ""
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title text text-primary"> hello Please Enter the name of the City : </h1>
          <input className='element' type="text" name='loginId' onChange={(e)=>  this.setState({ cityName : e.target.value})} placeHolder='City Name'/>
          <button type="button" className="element btn btn-primary" onClick={() => this.props.getTemprature(this.state.cityName)}>Go</button>
        </header>
        <div className="App-intro">
          <div className='tempDisplay text text-primary'><h2>{this.props.temprature}<sup>o</sup>C</h2></div>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  const temprature = state.temprature || 0;
  return {
    temprature
  }
},dispatch => {
  return bindActionCreators ({ getTemprature : getTemprature }, dispatch)
}
)(App);
