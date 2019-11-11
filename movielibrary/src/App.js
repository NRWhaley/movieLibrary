import React from 'react';
import MovieEntry from './components/movieEntry.jsx'
import movieList from './components/movieList.js'


const appStyle = {

  color: 'black',
  borderRadius: '5px'
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      movies: movieList
    }
  }





  render(){
  return (
    <div className="Entry" style={appStyle} >
      {this.state.movies.map((movie) => (
         <p>
         <MovieEntry name={movie.name} year={movie.year} genre={movie.genre}/>
         </p>

      ))}

    </div>
  );
  }
}

export default App;
