import React from 'react';
import MovieList from './components/movieList.jsx';
import MovieEntry from './components/movieEntry.jsx'
const axios = require('axios');




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
      movies: [{name: '', year: '', genre: ''}, {name: '', year: '', genre: ''}, {name: '', year: '', genre: ''}],
      randomMovie: {name: '', year: '', genre: ''}
    }

    this.selectRandom = this.selectRandom.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addMovie = this.addMovie.bind(this)

  }



componentDidMount() {
    axios.get('/list')
    .then(res => {
      let split = res.data.split('-')
      let newList = []
      for(let i = 0; i < split.length; i++){
        let content = split[i].slice(1, split[i].length - 2)
        let splitContent = content.split(',')
        let obj = {}
        for(let x = 0; x < splitContent.length; x++){
          let halves = splitContent[x].split(':')
          obj[halves[0].replace(/"/, '').trim()] = halves[1].replace(/"/, '').trim()
        }
        newList.push(obj)
      }


      this.setState((state) =>
      ({
        movies: newList
        })
      );


    })

    .catch(err => console.log(err))
    // this.addMovie()
    //   .then(res =>

    //     this.setState({movies: res})
    //   )

    //   .catch(err => console.log(err))

}



selectRandom(){
  // console.log(this.state.movies[Math.floor(Math.random() * Math.floor(this.state.movies.length - 1))])
  this.setState((state) => ({
    randomMovie : this.state.movies[Math.floor(Math.random() * Math.floor(this.state.movies.length - 1))]
 }))

  }


addMovie = async () => {
  let response = await fetch('/list');
  let body = await response.json();
  if(response.status !== 200) {
    throw Error(body.message)
  }

  return body
}

  render() {


    return (
    <div className="Entry" style={appStyle}>
      <header>Movie List</header>
      <button onClick = {this.selectRandom}>Select Random</button>
      <MovieEntry
      name={this.state.randomMovie.name}
      year={this.state.randomMovie.year}
      genre={this.state.randomMovie.genre}
        />
      <div>
        <MovieList list={this.state.movies} />
      </div>

     </div>
  );
  }
}

export default App;
