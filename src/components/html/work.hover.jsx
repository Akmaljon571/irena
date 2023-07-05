import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import './html.scss'

function WorkHover() {
    return (
        <li className="li-btn hover-work">
            <button>
            HOW WE WORK
                <ArrowDropDownIcon className={'liIcon'} />
            </button>
            <span className='li-span-hover'></span>
            <div className="li-hover-work">
                <div className='li-hover-work-div'>
                    <span className='li-span'></span>
                    <h1>HOW WE WORK</h1>
                    <hr />
                    <ul>
                        <li>
                            <h2>COUNTRY FOCUS</h2>
                            <div>
                                <input type="text" defaultValue='Search' />
                                <SearchIcon className='li-search' />
                            </div>
                        </li>
                        <li>
                            <h2>REGIONAL FOCUS</h2>
                            <Link to={'#'}>Africa</Link>
                            <Link to={'#'}>Asia & Pacific</Link>
                            <Link to={'#'}>Europe</Link>
                        </li>
                        <li className='li-notop'>
                            <Link to={'#'}>Latin America and the Caribbean</Link>
                            <Link to={'#'}>Middle East & North Africa</Link>
                            <Link to={'#'}>North America</Link>
                        </li>
                        <li>
                            <h2>
                            <Link to={'#'}>
                                COLLABORATIVE FRAMEWORKS    <ArrowForwardIosIcon className='li-arrow' />
                            </Link>
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default WorkHover;