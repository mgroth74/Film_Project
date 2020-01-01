import React, { Component } from "react";
import FilmRow from './FilmRow'



class FilmListing extends Component {
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
       <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <p>{nameList}</p>
        </div>
      
     
    );
  }
}

export default FilmListing;