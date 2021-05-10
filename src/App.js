import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import Shapes from './components/Shapes'
import Input from './components/Input'
import Edit from './components/Edit'
import Output from './components/Output'
import Error from './components/Error'
import './styles/App.css';

const ffmpeg = createFFmpeg({ log: true })

const App = () => {
    const [error, setError] = useState(false)
    const [ready, setReady] = useState(false)
    const [video, setVideo] = useState(false)
    const [title, setTitle] = useState(false)
    const [duration, setDuration] = useState(false)
    const [gif, setGif] = useState(false)

    const load = async () => await ffmpeg.load().then(() => setReady(true))
    useEffect(() => {load()}, [])
    useEffect(() => {video && setTitle(video.name)}, [video])
    
    const passError = () => setError(!error)
    const passVideo = vid => setVideo(vid)
    const passDuration = dur => setDuration(dur)
    const removeGif = () => setGif(false)

    const convertToGif = async (start, gifDur) => {
        try {
            // Write the file to memory (to a file name unlikely to be in memory)
            ffmpeg.FS('writeFile', 'jakeisawesome.mp4', await fetchFile(video))
            // Create a color pallete for each frame of the image
            // Run the command to convert
            await ffmpeg.run(
                // where we want the gif to start relative to the input
                '-ss', `${start}`, 
                // the duration to read from the input
                '-t', `${gifDur}`, 
                // sets the input to the file created previously
                '-i', 'jakeisawesome.mp4',
                // '-filter_complex','[0:v] fps=12,scale=480:-1,split [a][bx;[a] palettegen [p];[b][p] paletteuse',
                // sets the output desitantion of the previous set of commands
                '-f', 'gif', `${title}.gif`)
            // $ ffmpeg -ss 61.0 -t 2.5 -i StickAround.mp4 -i palette.png -filter_complex "[0:v][1:v] paletteuse" prettyStickAround.gif
            // -filter_complex "[0:v] fps=12,scale=w=480:h=-1,split [a][b];[a] palettegen=stats_mode=single [p];[b][p] paletteuse=new=1" StickAroundPerFrame.gif
            const data = ffmpeg.FS('readFile', `${title}.gif`);
            const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
            setGif(url)
        } catch (e) {
            console.log(e.code)
            console.log(e.msg)
        }
    }

    const getPalette = async () => {
        // await ffmpeg.run('-i', 'test.mp4', '-ss', `${start}`, '-t', `${gifDur}`, '-f', 'gif', `${title}.gif`)
        // $ ffmpeg -ss 61.0 -t 2.5 -i StickAround.mp4 -filter_complex "[0:v] palettegen" palette.png
        // await ffmpeg.run()
    }

    return ready ? (
        <div className="App">
            <Shapes />
            <div className="container">            
                <h1 className="title">GIF-IT!</h1>

                {(!video && !error) && <Input passVideo={passVideo} />}
                
                {(video && !gif && !error) && 
                    <div className="videoContainer">
                        <video 
                            controls className="video"
                            src={URL.createObjectURL(video)} 
                            onLoadedMetadata={e => setDuration(e.target.duration.toFixed(2))}
                        />
                    </div>}


                {(video && !gif && !error) && <Edit
                    passVideo={passVideo}
                    convertToGif={convertToGif} 
                    passDuration={passDuration} 
                    duration={duration} 
                    video={video}
                />}

                {(gif && !error) && <Output 
                    removeGif={removeGif}
                    fname={video.name.slice(0, video.name.indexOf("."))}
                    gif={gif}
                />}

                {error && <Error passError={passError} />}
            </div>

            <div className="footer">
                <a className="jake" href="http://jakerandall.me">Made by your good friend Jake</a>
            </div>

        </div>
    ) : ( <p>Loading...</p>)
}

export default App;