import { Link } from 'react-router-dom';
import img from '../../img/WETO 2023_Cover.png'
import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
import img6 from '../../img/6.png'
import img7 from '../../img/7.png'
import img8 from '../../img/8.png'
import img9 from '../../img/9.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Container from '../container/container';
import ItemsCarousel from 'react-items-carousel';
import './books.scss'
import { useState } from 'react';

function Books() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <div className='books'>
            <Container>
                <div className="books-top">
                    <h2>
                        Recent publications
                    </h2>
                    <div>
                        <Link to={'/'}>
                            Browse all publications
                        </Link>
                        <button className='books-top_left'>
                            <ArrowBackIosIcon />
                        </button>
                        <button className='books-top_right'>
                            <ArrowBackIosIcon />
                        </button>
                    </div>
                </div>
                <div className='books-list'>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={2}
                        gutter={20}
                        leftChevron={
                            <button className='books-btn_left'>
                                <ArrowBackIosIcon />
                            </button>}
                        rightChevron={
                            <button className='books-btn_right'>
                                <ArrowBackIosIcon />
                            </button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        <div className='books-item'>
                            <img width={186} height={263} src={img} alt="rasm" />
                            <div>
                                <h2>
                                    World Energy Transitions Outlook 2023: 1.5°C Pathway
                                </h2>
                                <p>
                                    This first volume of the 2023 Outlook provides an overview of progress by tracking implementation and gaps across all energy sectors, and identifies priority areas and actions based on available technologies that must be realised by 2030 to achieve net zero emissions by mid-century.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    June 2023
                                </span>
                                <span>
                                    Energy transition English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img1} alt="" />
                            <div>
                                <h2>
                                    Innovation landscape for smart electrification
                                </h2>
                                <p>
                                    This report maps 100 innovative solutions for the smart electrification of end-use sectors using renewable power. It offers innovation toolboxes to guide policy makers in formulating smart electrification strategies for mobility, the heating and cooling sectors, and green hydrogen production.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    June 2023
                                </span>
                                <span>
                                    Innovation, Systemic innovation, Electrification English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img2} alt="" />
                            <div>
                                <h2>
                                    Tracking SDG7: The energy progress report 2023
                                </h2>
                                <p>
                                    This annual report tracks global progress toward SDG 7 and serves as a guide for policymakers and the international community in advancing energy access, energy efficiency, renewable energy and international cooperation.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    June 2023
                                </span>
                                <span>
                                    Energy transition English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img3} alt="" />
                            <div>
                                <h2>
                                    SIDS Lighthouses Initiative Annual Progress Report
                                </h2>
                                <p>
                                    The Small Island Developing States Lighthouses Initiative Annual Progress Report 2023 summarises the remarkable achievements of SIDS in their sustainable energy transition from the year 2021-2022 and documents the efforts to move from pledges to action in energy transition and climate resilience.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>

                                    May 2023
                                </span>
                                <span>
                                    Energy transition, Finance & investment English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img4} alt="" />
                            <div>
                                <h2>
                                    Low-cost finance for the energy transition
                                </h2>
                                <p>
                                    This report identifies the pressing need for greater private sector engagement in the financing of energy transition projects, as well as closer public-private collaboration to sustain the net zero pathway.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    May 2023
                                </span>
                                <span>
                                    Energy transition, Finance & investment, Costs, Technology English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img5} alt="" />
                            <div>
                                <h2>
                                    The cost of financing for renewable power
                                </h2>
                                <p>
                                    Based on a new, unique dataset from a global survey, this IRENA report presents unprecedented insights on the cost of capital for onshore wind, offshore wind and solar photovoltaic (PV) projects.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    May 2023
                                </span>
                                <span>
                                    Finance & investment, Costs, Technology, Solar energy, Wind energy English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img6} alt="" />
                            <div>
                                <h2>
                                    Scaling up investments in ocean energy technologies
                                </h2>
                                <p>
                                    This brief from the Collaborative Framework for Ocean Energy Technologies and Offshore Renewables provides options for scaling up investments in ocean energy, focusing on tidal stream and wave energy technologies.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    May 2023
                                </span>
                                <span>
                                    Energy transition, Ocean English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img7} alt="" />
                            <div>
                                <h2>
                                    Renewable capacity statistics 2023
                                </h2>
                                <p>
                                    This publication presents renewable power generation capacity statistics for the past decade (2013-2022) in trilingual tables.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    May 2023
                                </span>
                                <span>
                                    Energy transition English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img8} alt="" />
                            <div>
                                <h2>
                                    World Energy Transitions Outlook 2023: 1.5°C Pathway
                                </h2>
                                <p>
                                    This first volume of the 2023 Outlook provides an overview of progress by tracking implementation and gaps across all energy sectors, and identifies priority areas and actions based on available technologies that must be realised by 2030 to achieve net zero emissions by mid-century.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    June 2023
                                </span>
                                <span>
                                    Energy transition English
                                </span>
                            </div>
                        </div>
                        <div className='books-item'>
                            <img width={186} height={263} src={img9} alt="" />
                            <div>
                                <h2>
                                    Low-cost finance for the energy transition
                                </h2>
                                <p>
                                    This report identifies the pressing need for greater private sector engagement in the financing of energy transition projects, as well as closer public-private collaboration to sustain the net zero pathway.
                                </p>
                                <Link to={'/'}>
                                    View
                                </Link>
                                <span>
                                    May 2023
                                </span>
                                <span>
                                    Energy transition, Finance & investment, Costs, Technology English
                                </span>
                            </div>
                        </div>
                    </ItemsCarousel>
                </div>
            </Container>
        </div>
    );
}

export default Books;   