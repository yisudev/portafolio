
import '../styles/Presentacion.css';
import { Fade } from 'react-reveal';
export default function Presentacion(){
    return(
        <>
            <div id='home' className="content-info">
                <Fade left cascade>
                    <div className="sliders">
                        <div className="slider-container"> 
                            <div className="imgs"><img src={require('../img/foto2.webp')} alt="" /></div>
                        </div>
                    </div>
                    <div className="info-text">
                        <h2>YisusDev.</h2>
                        <p>Web Tech Designer & Developer</p>
                    </div>

                </Fade>

            </div>
        </>


    )
}