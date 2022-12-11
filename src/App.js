import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Pages/Home'


function App() {
  return (
    <>
     <Router>
       <Navbar />
       <Home />
       <Routes>
         <Route path='/' exact component={Home}/>
         <Route path='/f1' exact component={Home}/>
         <Route path='/nfl' exact component={Home}/>
       </Routes>
     </Router> 
    </>
  );
}

export default App;
