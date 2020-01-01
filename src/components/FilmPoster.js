import React from "react";

function Poster(props){

  let posterUrl = 'https://image.tmdb.org/t/p/w780'+props.poster

  return(
    <div className="film-row">
      <img src={posterUrl} alt="" />
      
     </div>
  )

}

export default Poster