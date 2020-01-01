import React, { Component } from "react";


class Fave extends Component {
  constructor(){
    super();
    this.state = {
      isFave: 'false'
     
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    e.stopPropagation();
    this.setState({
    isFave: !this.state.isFave
    });
    
  }


   
  render() {
    console.log('hanlding fave click',this.state.isFave)
   const isFave = this.state.isFave ? 'add_to_queue' : 'remove_from_queue';
      return(
    <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
      <p className="material-icons" >{isFave}</p>
    </div>
      )
    }
  }

export default Fave


