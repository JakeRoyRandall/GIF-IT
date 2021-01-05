import React, {useState, useEffect} from 'react';
import './Edit.css';

const Edit = props => {
    const [start, setStart] = useState(0)
    const [gifDur, setGifDur] = useState(10)

    useEffect(() => {setGifDur(props.duration)}, [props.duration])

    return (
        <div className="Edit">
            {/* <video controls className="Video" src={props.video}></video> */}
            <div className="EditBox">
                <h4>Trim your video</h4>
                <p>Us ethe sliders to select Start Time and Duration</p>
                <h4>Start: {start}</h4>
                {/*<input  type="range" min="1" max="100" value="1" step=".01" 
                        className="slider" onChange={e => console.log(e.target.value)}
                />*/}
                <input type="number" min="0" max={props.duration - .01} step=".01" value={start} onChange={e => setStart(e.target.value)}/>
                
                <h4>Duration: {gifDur}</h4>
                {/*<input  type="range" min="1" max="100" value="1" step=".01" 
                        className="slider" onChange={e => console.log(e.target.value)}
                />*/}
                <input type="number" min="0.01" max={props.duration} step=".01" value={gifDur} onChange={e => setGifDur(e.target.value)}/>

                <button onClick={() => props.convertToGif(start, gifDur)}>Create Gif</button>
            </div>
        </div>
    )
}

export default Edit