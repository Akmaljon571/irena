import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './mission.scss'
import { Link } from 'react-router-dom';

function Mission() {
    const [open, setOpen] = useState(true);

    return (  
        <div className="mission">
            <div className={open ? "mission-top" : "mission-top mission-top-active"}>
                <button onClick={() => setOpen(!open)}>
                    <span>
                        {open ? "See Our Mission" : ''}
                    </span>
                    <KeyboardArrowDownIcon className={open ? 'icon' : 'icon icon-active'} />
                </button>
                {!open ?
                    <>
                    <span className='span'>
                        Our Mission
                    </span>
                    <p>
                        Supporting <span>countries worldwide </span> in their transition to a sustainable energy future
                    </p>
                    <Link to={'/'}>
                        Read about us
                    </Link>
                    </>
                : null}
            </div>
            <div className="mission-bottom">
                <h1>168</h1>
                <p>MEMBERS</p>
                <span>(167 COUNTRIES & THE EU)</span>
            </div>
        </div>
    );
}

export default Mission;