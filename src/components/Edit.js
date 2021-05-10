import React, { useState } from 'react';
import Slider from 'rc-slider';
import '../styles/Edit.css';
import '../styles/Slider.css';


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Edit = props => {
    const [start, setStart] = useState(0)
    const [gifDur, setGifDur] = useState(6)

    const updateState = (e) => {
        setStart(e[0])
        setGifDur(e[1])
    }

    return (
        <div className="Edit">
            <div className="slider">
                <Range min={0} max={props.duration ? props.duration : 6} defaultValue={[0, 6]} allowCross="false"
                    step="0.01" onChange={(e) => updateState(e)}/>
                <h4>Start : {start} seconds &nbsp;&nbsp;&nbsp; Duration: {gifDur} seconds</h4>
            </div>
            <div>
                <button className="button" onClick={() => props.passVideo(false)}>START OVER</button>
                <button className="button" onClick={() => props.convertToGif(start, gifDur)}>GIF-IT!</button>
            </div>
        </div>
    )
}

export default Edit