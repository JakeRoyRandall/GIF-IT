import React, {useState, useEffect} from 'react';
import './Edit.css';

const Edit = props => {
    const [startTime, setStartTime] = useState(0)
    const [durationTime, setDurationTime] = useState(100)

    useEffect(() => {
    }, [])

    return (
        <div className="Edit">
            {/* <video controls className="Video" src={props.video}></video> */}
            <div className="EditBox">
                <h4>Trim your video</h4>
                <p>Us ethe sliders to select Start Time and Duration</p>
                <h4>Start: {startTime}</h4>
                {/*<input  type="range" min="1" max="100" value="1" step=".01" 
                        className="slider" onChange={e => console.log(e.target.value)}
                />*/}
                <input type="number" min="0" max="100" step=".01" onChange={e => props.setSliceStart(e.target.value)}/>
                
                <h4>Duration: {durationTime}</h4>
                {/*<input  type="range" min="1" max="100" value="1" step=".01" 
                        className="slider" onChange={e => console.log(e.target.value)}
                />*/}
                <input type="number" min="0" max="100" step=".01" onChange={e => props.setSliceDuration(e.target.value)}/>

                <button onClick={props.convertToGif}>Create Gif</button>
            </div>
        </div>
    )
}

export default Edit