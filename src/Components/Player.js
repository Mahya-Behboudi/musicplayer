import React from 'react'
import PlayDetails from './PlayDetails'
import PlayControls from './PlayControls'
function Player(props) {
  return (
    <div className='c-player'>
      <audio></audio>
      <h4>playing now </h4>
      <PlayDetails song={props.song}/>
      <PlayControls/>
      <p><strong> Next up : </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player
