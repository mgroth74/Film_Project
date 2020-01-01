import React, { Component } from "react";
import FilmRow from './FilmRow'



class FilmListing extends Component {
    constructor(){
      super();
      this.state = {
        filter: 'all'
       
      };
      this.handleFilterClick = this.handleFilterClick.bind(this);
      this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

handleFilterClick(filter){
  this.setState({
    filter:filter
  })
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
    if(this.state.filter === "all"){
      const filterall = this.state.filter==="all"? "is-active" : " ";
    }else{
      const filterfav = this.state.filter==="fave"? "is-active" : " ";
    }

    console.log('filmname',nameList)

    console.log(this.props.films.films[0].title)
    return (
       <div className="film-list"
        onClick={() => this.handleDetailsClick('movie')}> 
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter 
                ${this.state.filter==="all"? "is-active" : " "}`}
                onClick={() => this.handleFilterClick('all')}>
                  All
                  <span className="section-count">{this.props.films.films.lenght}</span>
                  </div >
                <div className={`film-list-filter
                ${this.state.filter==="fave"? "is-active" : " "}`}
                onClick={() => this.handleFilterClick('fave')}>
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