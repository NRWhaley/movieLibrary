import React from 'react';
import MovieEntry from './components/movieEntry.jsx'
import movieList from './components/movieList.js'


const appStyle = {

  color: 'black',
  borderRadius: '5px'
}

class App extends React.Component {
  constructor(props){


    this.state = {
      movies: movieList
    }
  }





  render(){
  return (
    <div className="Entry" style={appStyle}>
        <p>
          <MovieEntry name={this.state.movies.name} year={this.state.movies.year} genre={this.state.movies.genre}/>
        </p>
    </div>
  );
  }
}

export default App;
