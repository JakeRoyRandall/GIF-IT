import React, {useState, useEffect} from 'react';
import uploadArrowWhite from '../images/UploadArrowWhite.png'
import uploadArrowBlack from '../images/UploadArrowBlack.png'
import '../styles/Input.css';

const Input = props => {
    const [drag, setDrag] = useState(false)
    
    useEffect(() => {
        window.addEventListener('dragenter', handleDragIn)
        window.addEventListener('dragleave', handleDragOut)
        window.addEventListener('dragover', handleDrag)
        window.addEventListener('drop', handleDrop)
    }, [])

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
      
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true)
    }
        
    const handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.clientX === 0 && e.clientY === 0) setDrag(false)
    }
    
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDrag(false)
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) props.passVideo(e.dataTransfer.files[0])
    }

    return (
        <div className="Input">
            <input type="file" name="inputfile" id="inputfile" className="inputfile" onChange={e => props.passVideo(e.target.files[0])}/>
            <label htmlFor="inputfile" className={`${drag? "drag": ""}`}>
                <img src={`${drag? uploadArrowWhite: uploadArrowBlack}`} alt="Upload Arrow"/><br/>
                <span className={`topline ${drag? "drag": ""}`}>Drop your video here or&nbsp;<span className="browse">browse</span></span>
                <span className={`bottomline ${drag? "drag": ""}`}>Please upload a GIF, MP4, or MOV</span>
            </label>
        </div>
    )
}

export default Input