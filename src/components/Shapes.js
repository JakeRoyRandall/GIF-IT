import squiggle_blue_full from '../images/shapes/squiggle_blue_full.png'
import cube_yellow_full from '../images/shapes/cube_yellow_full.png'
import squiggle_purple_full from '../images/shapes/squiggle_purple_full.png'
import tube_pink_full from '../images/shapes/tube_pink_full.png'
import '../styles/Shapes.css'

const Shapes = () => {
    return(
        <div className="shapes">
            <img className="squiggle_blue_full" src={squiggle_blue_full} alt="squiggle_blue_full"/>
            <img className="squiggle_purple_full" src={squiggle_purple_full} alt="squiggle_purple_full"/>
            <img className="cube_yellow_full" src={cube_yellow_full} alt="cube_yellow_full"/>
            <img className="tube_pink_full" src={tube_pink_full} alt="tube_pink_full"/>
        </div>
    )
}

export default Shapes;