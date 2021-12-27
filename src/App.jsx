import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import "./App.css"
import VideoCard from "./components/VideoCard"

import { db } from "./myfirebase"

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    onSnapshot(collection(db, "videos"), (snapshot) => {
      setVideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    })
  }, [])
  return (
    <div className="app">
      <div className="app__top">
        <img src="logo192.png" alt="App Logo" className="app__logo" />
        <h1>Shorts</h1>
      </div>
      <div className="app__videos">
        {videos.map(({ id, url, channel, avatarSrc, song, likes, shares }) => (
          <VideoCard
            key={id}
            url={url}
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  )
}

export default App
