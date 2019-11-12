import React from 'react';
import MovieEntry from './components/movieEntry.jsx'
import movieList from './components/movieList.js'



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
      data: null,
      movies: movieList,
      randomMovie: ''
    }

    this.selectRandom = this.selectRandom.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }


  selectRandom(){
    this.setState(state => ({
      randomMovie : this.state.movies[Math.floor(Math.random() * Math.floor(this.state.movies.length - 1))]
   }))
   console.log(this.state.data)
}

componentDidMount() {
  // Call our fetch function below once the component mounts
this.callBackendAPI()
  .then(res => this.setState({ data: res.express }))
  .catch(err => console.log('not working'));
}
// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
const response = await fetch('/express');
const body = await response.json();

if (response.status !== 200) {
  throw Error(body.message)
}

return body;
};


  render(){
  return (
    <div className="Entry" style={appStyle} >
      <div>Movie List</div>
      <div>{this.state.data}</div>
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
