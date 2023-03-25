import '../styles/Navbar.css';
import { useState } from 'react';
import { Fade } from 'react-reveal';
export default function Navbar(){
    const [Clicked, setClicked] = useState(false);
    const [Mostrar,setMostrar] = useState("hidden");
    const [BodyClass,setBodyClass] = useState("hidden-body");

    const HandleClick=()=>{
        setClicked(!Clicked)
        if(Clicked){
            setBodyClass('hidden-body')
            setMostrar("hidden")
        }else{
            setBodyClass('show-body')
            setMostrar("show")
        }
    }
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <>  
            <header>
                <Fade top cascade>
                    <nav>
                        <h1>----YisusDev----</h1>
                        <div className={Mostrar}>
                            <ul >
                                <a href="#home" onClick={()=>{
                                    HandleClick();
                                    updateMenu();
                                }}>Home</a>
                                <a onClick={()=>{
                                    HandleClick();
                                    updateMenu();
                                }} href="#skills">Skills</a>
                                <a onClick={()=>{
                                    HandleClick();
                                    updateMenu();
                                }} href="#about">About Me</a>
                                <a onClick={()=>{
                                    HandleClick();
                                    updateMenu();
                                }} href={require("../CV/CV-JESUS-BAEZ.pdf")}>Download CV</a>
                            </ul>
                        </div>
                        <div className='burger-menu'  onClick={()=>{
                            HandleClick();
                            updateMenu();
                        }}>
                            <span className={burger_class}></span>
                            <span className={burger_class}></span>
                            <span className={burger_class}></span>
                        </div>
                    </nav>

                </Fade>

            </header>
        </>
    )
}