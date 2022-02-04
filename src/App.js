
import {useEffect} from 'react'
import './App.css';
import {connect} from 'react-redux'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LogIn from './components/LogIn';
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import { handleUserData } from './actions/shared';

function App(props) {
  useEffect(()=>{
    props.dispatch(handleUserData())
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/newquestion' element={<NewQuestion/>}/>
        <Route path='/leaderboard' element={<LeaderBoard/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default connect()(App);
