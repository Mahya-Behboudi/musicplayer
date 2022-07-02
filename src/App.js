import {useState,useEffect} from 'react'
import Player from './Components/Player';
function App() {
  const[songs ] = useState([
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
  useEffect(() =>{
    setNextSongIndex(() => {
      if(currentSongIndex +1 > songs.length-1) {
        return 0;
      }else {
        return currentSongIndex +1
      }
    });
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player currentSongIndex ={currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}/>
    </div>
  );
}

export default App;
