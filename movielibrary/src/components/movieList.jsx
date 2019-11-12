import React from 'react';
import MovieEntry from './movieEntry.jsx';



class MovieList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: props.list
    }



  }


  render(){
    return(

      <div>
    {this.state.list.map((movie) => (
        <MovieEntry name={movie.name} year={movie.year} genre={movie.genre} />
    ))}
    </div>
    )
  }



}

export default MovieList

