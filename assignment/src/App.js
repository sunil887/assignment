import React, { Component } from 'react';
//import React from 'react';
import logo from './logo.svg';
import './App.css';
import {STORE_DATA} from './actionType'
import { connect } from 'react-redux'
import {storeEmployee} from './action'

class Container extends Component {
  state = { storedEmployeeData:[] }
  render() { 
    return <div></div>
  }   
  
  componentDidMount(){
    console.log('hello')
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {console.log(res) ; res.json() })
    .then(data => console.log(data) )
    .catch(err => console.log(err))
  }
}
 


const mapStateToProps = (state) =>{
  return {storedEmployeeData : state.root }
  
}
const mapDispatchToProps = dispatch =>{
  return {
    StoredData : (storeData) => dispatch(storeEmployee(storeData)) 
  }
}

const App = connect(mapStateToProps,mapDispatchToProps)(Container)

export default App;





