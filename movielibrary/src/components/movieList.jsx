import React from 'react';
import MovieEntry from './movieEntry.jsx';



class MovieList extends React.Component {
  constructor(props){
    super(props)




  }


  render(){


    return(

      <div>
    {this.props.list.map((movie) => (
        <MovieEntry name={movie.name} year={movie.year} genre={movie.genre} />
    ))}
    </div>
    )
  }



}

export default MovieList

