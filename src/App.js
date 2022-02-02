
import {useEffect} from 'react'
import './App.css';
import {connect} from 'react-redux'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LogIn from './components/LogIn';
import { handleUserData } from './actions/shared';

function App(props) {
  useEffect(()=>{
    props.dispatch(handleUserData())
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default connect()(App);
