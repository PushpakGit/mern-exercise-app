import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Navbar from './components/navbar';
import ExerciseList from './components/exercise-list';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';
import EditExercise from "./components/edit-exercise";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={ExerciseList}></Route>
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} ></Route>
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
