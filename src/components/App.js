import React, { Component } from "react";
import "./App.css";
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import films from '../TMDB'


class App extends Component {
  render() {
    return (
     <div className="film-library">
        <FilmListing films = {films}/>
         <FilmDetails films = {films}/>      
        </div>
    
    );
  }
}

export default App;
