import React from 'react';
import MovieEntry from './components/movieEntry.jsx'




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
      movies: '',
      randomMovie: ''
    }

    this.selectRandom = this.selectRandom.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.retrieveMovies = this.retrieveMovies.bind(this)
  }


  selectRandom(){
    this.setState(state => ({
      randomMovie : this.state.movies[Math.floor(Math.random() * Math.floor(this.state.movies.length - 1))]
   }))
   console.log(this.state.data)
}

componentDidMount() {

this.callBackendAPI()
  .then(res => this.setState({ data: res.express }))
  .catch(err => console.log(err));


}


callBackendAPI = async () => {
let response = await fetch('/express');
let body = await response.json();

if (response.status !== 200) {
  throw Error(body.message)
}

return body;
};

retrieveMovies() {
this.addMovie()
.then(res => this.setState({ movies: res.films }))
.catch(err => console.log(err));
}

addMovie = async () => {
  let response = await fetch('/list');
  let body = await response.json();
  if(response.status !== 200) {
    throw Error(body.message)
  }
  return body
}

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
        <button onClick={this.retrieveMovies}>Save</button>
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
