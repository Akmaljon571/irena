import { useEffect, useState } from "react";
import Container from "../container/container";
import './hero.scss'
import Carouse from "../carousel/carousel";

function Hero() {
    const [bg, setBg] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setBg(!bg)
        }, 5000);
    }, [setBg, bg]);
    return (  
        <div className={bg ? "hero" : "hero1"}> 
            <span className="hero-bg"></span> 
            <Container>
                <Carouse />
            </Container>
        </div>
    );
}

export default Hero;