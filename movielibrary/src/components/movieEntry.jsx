import React from 'react';

const entryStyle = {
  color: 'black',
  backgroundColor: 'lightgrey',
  maxWidth: '50%',
  borderRadius: '5px',
  alignContent: 'center'

}

function MovieEntry(props) {

    return (
      <div className="movieEntry" style={entryStyle}>
      <div>{props.name}</div>
      <div>Year: {props.year}</div>
      <div>Genre: {props.genre}</div>
      </div>
    )

 }


export default MovieEntry;