import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './html.scss'

function AboutHover() {
    return (
        <li className="li-btn hover-about">
            <button>
                About
                <ArrowDropDownIcon className={'liIcon'} />
            </button>
            <div className="li-hover-about">
                <div>
                    <span className='li-span'></span>
                    <h1>ABOUT</h1>
                    <hr />
                    <ul>
                        <li>
                            <Link to={'#'}>
                                ABOUT IRENA
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                MEMBERSHIP
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                DIRECTOR-GENERAL
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                PROCUREMENT
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to={'#'}>
                                VISION & MISSION
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                OFFICIAL DOCUMENTS
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                SENIOR MANAGEMENT
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                        <li>
                            <Link to={'#'}>
                                WORKING AT IRENA
                            </Link>
                            <ArrowForwardIosIcon className='li-arrow' />
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default AboutHover;









