import React from "react";
import Poster from './FilmPoster'

function FilmRow(props){

  let relDate = (props.year)
  let date = new Date(relDate)
  let year = (date.getFullYear())
  console.log(year)
  return(
    <div className="film-row">
      <Poster poster={props.poster}/>
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{year}</p>
      </div>
     </div>
  )

}

export default FilmRow