import React from 'react';

const entryStyle = {
  color: 'black',
  backgroundColor: 'lightgrey',
  maxWidth: '50%',
  borderRadius: '5px',
  alignContent: 'center'

}

class MovieEntry extends React.Component {

  render(){
    return (
      <div className="movieEntry" style={entryStyle}>
      <div>{this.props.name}</div>
      <div>Year: {this.props.year}</div>
      <div>Genre: {this.props.genre}</div>
      </div>
    )



  }



}



export default MovieEntry;