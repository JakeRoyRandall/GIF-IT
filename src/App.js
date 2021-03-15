import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import Input from './components/Input'
import Video from './components/Video'
import Edit from './components/Edit'
import Output from './components/Output'
import './App.css';

const ffmpeg = createFFmpeg({ log: true })

const App = () => {
    const [ready, setReady] = useState(false)
    const [video, setVideo] = useState(false)
    const [title, setTitle] = useState(false)
    const [duration, setDuration] = useState(false)
    const [gif, setGif] = useState(false)

    const load = async () => await ffmpeg.load().then(() => setReady(true))
    useEffect(() => {load()}, [])
    useEffect(() => {video && setTitle(video.name)}, [video])
    
    const passVideo = vid => setVideo(vid)
    const passDuration = dur => setDuration(dur)

    const convertToGif = async (start, gifDur) => {
        // |Write the file to memory |Run the FFMpeg command |Read the result |Create a URL |Set Gif
        ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video))
        await ffmpeg.run('-i', 'test.mp4', '-ss', `${start}`, '-t', `${gifDur}`, '-f', 'gif', `${title}.gif`)
        const data = ffmpeg.FS('readFile', `${title}.gif`);
        const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
        setGif(url)
    }

    return ready ? (
        <div className="App">
            {!video && <Input passVideo={passVideo} />}
            {(video && !gif) && <Video passDuration={passDuration} video={video} />}
            {(video && !gif) && <Edit  convertToGif={convertToGif} duration={duration} />}
            {gif && <img src={gif} alt="completed gif"/>}
            {gif && <Output />}
        </div>
    ) : ( <p>Loading...</p>)
}

export default App;