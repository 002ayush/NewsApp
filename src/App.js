import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/news';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  

} from "react-router-dom";
const App = () => {
 

    return (
      <div>
        
        <Router>
              <Navbar/>
          
        
        <Routes>
          <Route  path="/"
              element = {<News key="general" pageSize = {6} country = "in" category = "general"/>}/>
          
          <Route  path="/sports"
             element = {<News key="sports" pageSize = {6} country = "in" category = "sports"/>}/>
          
          <Route  path="/business" element = {<News key="business" pageSize = {6} country = "in" category = "business"/>}/>
         
          <Route  path="/technology" element = {<News key="technology" pageSize = {6} country = "in" category = "technology"/>}/>
          
          <Route path="/health" element = {<News key="health" pageSize = {6} country = "in" category = "health"/>}/>
          <Route path="/entertainment" element = {<News key="entertainment" pageSize = {6} country = "in" category = "entertainment"/>}/>
          
          
          
        </Routes>
        </Router>
      </div>
    )
  }
export default App;

