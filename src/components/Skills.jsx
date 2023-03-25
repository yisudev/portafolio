import { Fade } from 'react-reveal';
import '../styles/Skills.css'
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
export default function Skills(){
    return (
      <>
        <Fade right cascade>
        <div id="skills" className="info">
          <h3>SKILLS</h3>

          <div className="conteiner-to-conteiner">

            <div className="slider-track">

              <div className="info-conteiner">
                <span>Photoshop</span>
                <img src={require("../img/photoshop.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>NodeJs</span>
                <img src={require("../img/node.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>ReactJs</span>
                <img src={require("../img/react.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>Sony Vegas</span>
                <img src={require("../img/vegas.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>MySQL</span>
                <img src={require("../img/sql.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>ExpressJs</span>
                <img src={require("../img/express.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>Photoshop</span>
                <img src={require("../img/photoshop.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>NodeJs</span>
                <img src={require("../img/node.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>ReactJs</span>
                <img src={require("../img/react.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>Sony Vegas</span>
                <img src={require("../img/vegas.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>MySQL</span>
                <img src={require("../img/sql.webp")} alt="" />
              </div>
              <div className="info-conteiner">
                <span>ExpressJs</span>
                <img src={require("../img/express.webp")} alt="" />
              </div>


            </div>

          </div>

        </div>
        </Fade>
      </>
    );
}