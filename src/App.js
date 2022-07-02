import {useState} from 'react'
import Player from './Components/Player';
function App() {
  const[songs, setSongs ] = useState([
    {
      title:'song 1',
      artist: 'shadmehr',
      img_src:"./images/shadmehr1.jpg",
      src:'./music/shadmehr1.mp3'
    },
    {
      title:'song 2',
      artist: 'shadmehr',
      img_src:"./images/shadmehr2.jpg",
      src:'./music/shadmehr2.mp3'
    },
    {
      title:'song 3',
      artist: 'shadmehr',
      img_src:"./images/shadmehr3.jpg",
      src:'./music/shadmehr3.mp3'
    },
    {
      title:'song 4',
      artist: 'shadmehr',
      img_src:"./images/shadmehr4.jpg",
      src:'./music/shadmehr4.mp3'
    }
  ]);
  const [currentSongIndex , setCurrentSongIndex] = useState(0)
  const [nextSongIndex , setNextSongIndex] = useState(currentSongIndex +1)


  return (
    <div className="App">
      <Player song = {songs[currentSongIndex]} 
      nextSong = {songs[nextSongIndex]}/>
    </div>
  );
}

export default App;
