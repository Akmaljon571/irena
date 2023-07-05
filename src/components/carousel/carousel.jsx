import { useEffect, useState } from 'react';
import img4 from '../../img/Innovation landscape 2023 banner.png'
import img2 from '../../img/Innovation-2023-2160x1128-opening.jpg'
import img3 from '../../img/f.elconfidencial.com_original_c61_af4_681_c61af4681224d0cb552a2c9972e3d577.jpg'
import img1 from '../../img/WETO 2023 release banner.jpg'

import './carousel.scss'

function Carouse() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (!active) {
            setActive(1)
        } else {
            setTimeout(() => {
                if (active === 1) {
                    setActive(2)
                } else if (active === 2) {
                    setActive(3)
                } else if (active === 3) {
                    setActive(4)
                } else if (active === 4) {
                    setActive(1)
                }
            }, 50000);
        }
    }, [active]);
    return (
        <div className="hero-carousel">
                <div className={active === 1 ? 'card card-active' : "card"}>
                    <span className='opacity-image'></span>
                    <img width={540} height={305} src={img1} alt="img1" />
                    <div className='left'>
                        <h3>PRESS RELEASE</h3>
                        <p>Annual Renewable Power Must Triple by 2030</p>
                        <span>Read more</span>
                    </div>
                </div> 
                <div className={active === 2 ? 'card card-active' : "card"}>
                    <img width={540} height={305} src={img2} alt="img1" />
                    <div className='left'>
                        <h3>VISUAL STORY</h3>
                        <p>How to decarbonise end-use sectors with renewable power?</p>
                        <span>Read more</span>
                    </div>
                </div> 
                <div className={active === 3 ? 'card card-active' : "card"}>
                    <img width={540} height={305} src={img3} alt="img1" />
                    <div className='left'>
                        <h3>PRESS RELEASE</h3>
                        <p>Powering the Energy Transition with Smart Electrification</p>
                        <span>Read more</span>
                    </div>
                </div> 
                <div className={active === 4 ? 'card card-active' : "card"}>
                    <img width={540} height={305} src={img4} alt="img1" />
                    <div className='left'>
                        <h3>OUR MISSION</h3>
                        <p>Supporting countries worldwide in their transition to a sustainable energy future</p>
                        <span>Read more</span>
                    </div>
                </div>
            <ul>
                <li>
                    <span className={active === 1 ? "active" : ""}></span>
                    <h3 onClick={() => setActive(1)}>Press Release</h3>
                    <p onClick={() => setActive(1)}>Annual Renewable Power Must Triple by 2030</p>
                </li>
                <li>
                    <span className={active === 2 ? "active" : ""}></span>
                    <h3 onClick={() => setActive(2)}>Visual story</h3>
                    <p onClick={() => setActive(2)}>How to decarbonise end-use sectors with renewable power?</p>
                </li>
                <li>
                    <span className={active === 3 ? "active" : ""}></span>
                    <h3 onClick={() => setActive(3)}>Press Release</h3>
                    <p onClick={() => setActive(3)}>Powering the Energy Transition with Smart Electrification</p>
                </li>
                <li>
                    <span className={active === 4 ? "active" : ""}></span>
                    <h3 onClick={() => setActive(4)}>Our Mission</h3>
                    <p onClick={() => setActive(4)}>Supporting countries worldwide in their transition to a sustainable energy future</p>
                </li>
            </ul>
        </div>
    );
}

export default Carouse;