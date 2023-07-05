import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './html.scss'

function EnergyHover() {
    return (
        <li className="li-btn hover-energy">
            <button>
                ENERGY TRANSITION
                <ArrowDropDownIcon className={'liIcon'} />
            </button>
            <div className="li-hover-energy">
                <div>
                    <span className='li-span'></span>
                    <h1>ENERGY TRANSITION</h1>
                    <hr />
                    <ul>
                        <li>
                            <Link to={'#'}>
                                OUTLOOK
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                PARTNERSHIPS
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                POLICY
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                TECHNOLOGY
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                SOCIO-ECONOMIC IMPACT
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to={'#'}>
                                COUNTRY ENGAGEMENT
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                PROJECT FACILITATION
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                PLANNING
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                INNOVATION
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                FINANCE & INVESTMENT
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default EnergyHover;