import '../styles/about.css';
import {Fade} from 'react-reveal';
export default function About(){
    return(
        <>
            <Fade left cascade>
                <div id='about' className="info-about">
                    <Fade left cascade>
                        <h3 className='txt'>Jesus Baez</h3>
                    </Fade>
                    <Fade bottom cascade>
                        <p className='txt'>Soy un chico de 17 años, apasionado de la programacion, desarrollador <h3>MERN STACK</h3> , con una gran asimilacion de proyectos de pequeña y gran escala.</p>
                        <p className='txt'>I am a 17-year-old boy, passionate about programming, <h3>MERN STACK</h3>developer, with a great assimilation of small and large-scale projects.</p>
                    </Fade>
                </div>
                <a className='cv' href={require('../CV/CV-JESUS-BAEZ.pdf')}>DOWNLOAD CV </a>
            </Fade>


            
        </>
    )
}