import React from 'react';
import MovieList from './components/movieList.jsx';





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
      data: '',
      movies: [{name: '', year: '', genre: ''}, {name: '', year: '', genre: ''}, {name: '', year: '', genre: ''}],
      randomMovie: {name: '', year: '', genre: ''}
    }

    this.selectRandom = this.selectRandom.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addMovie = this.addMovie.bind(this)

  }



componentDidMount() {

    this.addMovie()
      .then(res =>

        this.setState({movies: res})
      )

      .catch(err => console.log(err))

}



selectRandom(){
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

      <div>
        <MovieList list={this.state.movies} />
      </div>

     </div>
  );
  }
}

export default App;
