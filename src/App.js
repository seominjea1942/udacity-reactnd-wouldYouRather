
import {useEffect} from 'react'
import './App.css';
import {connect} from 'react-redux'
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import Header from './components/Header';
import LogIn from './components/LogIn';
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import { handleUserData } from './actions/shared';
import QuestionCard from './components/QuestionCard';
import NotFound from './components/NotFound';
import PageNotFound from './components/PageNotFound';

function App(props) {
  useEffect(()=>{
    props.dispatch(handleUserData())
  },[])

  const location = useLocation();

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route
          exact path='/'
          element={
            (props.authedUser==='')?
            <Navigate to={"/login"} state={{redirected:true}}/>
              :
              <Home/>}
          />
          <Route path='/add' element={
          (props.authedUser==='')?
          <Navigate to={"/login"} state={{redirected:true}}/>:<NewQuestion/>}/>
          <Route path='/leaderboard' element={
          (props.authedUser==='')?
          <Navigate to="/login" state={{redirected:true}} />:<LeaderBoard/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/questions/:question_id' element={
            (props.authedUser==='')?
            <Navigate to="/login" state={{prevPath:location.pathname, redirected:true}}/>
            :<QuestionCard/>}/>
          <Route eaxct path="/404" element={<NotFound/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
    </div>
  );
}

const mapStateToProps =({authedUser})=> {
  return {
    authedUser,
  }

}
export default connect(mapStateToProps)(App);
