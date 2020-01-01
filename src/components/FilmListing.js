import React, { Component } from "react";
import FilmRow from './FilmRow'



class FilmListing extends Component {

handleFilterClick(filter){
  console.log('setting filter',filter)
}
handleDetailsClick(movie){
  console.log('fetching details for',movie)
}

  render() {

    const filmNames = this.props.films.films
    const nameList = filmNames.map(film => {
      return(
        <FilmRow key={film.id}
                title = {film.title}
                poster = {film.poster_path}
                year = {film.release_date}/>
      )
      
    })
    
    console.log('filmname',nameList)

    console.log(this.props.films.films[0].title)
    return (
       <div className="film-list"
        onClick={() => this.handleDetailsClick('movie')}> 
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className="film-list-filter"
                onClick={() => this.handleFilterClick('all')}>
                  All
                  <span className="section-count">{this.props.films.films.lenght}</span>
                  </div >
                <div className="film-list-filter"
                onClick={() => this.handleFilterClick('faves')}>
                  FAVES
                  <span className="section-count">0</span>
                 
                </div>
                
                </div>
              {nameList}
            
      </div>
      
     
    );
  }
}

export default FilmListing;