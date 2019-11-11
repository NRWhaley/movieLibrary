import React from 'react';
import MovieEntry from './components/movieEntry.jsx'
import movieList from './components/movieList.js'

const fs = require('fs-extra')

const greeting = 'hi file'
const appStyle = {

  backgroundColor: 'black',
  borderRadius: '5px',
  color: 'red',
  alignContent: 'center',
  maxWidth: '50%'
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      movies: movieList,
      randomMovie: ''
    }

    this.selectRandom = this.selectRandom.bind(this)
    this.fileWrite = this.fileWrite.bind(this)
  }


  selectRandom(){
    this.setState(state => ({
      randomMovie : this.state.movies[Math.floor(Math.random() * Math.floor(this.state.movies.length - 1))]
   }))
}

  componentWillMount(){
    fs.write('message.txt', greeting, 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }


  render(){
  return (
    <div className="Entry" style={appStyle} >
      <div>Movie List</div>
      <div>
        <button onClick={this.selectRandom}>Select Random</button>
        <div className="randomFilm">
          {this.state.randomMovie.name} {this.state.randomMovie.year}
           {this.state.randomMovie.genre}</div>

        </div>
        <button onClick={this.fileWrite}>Save</button>
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
