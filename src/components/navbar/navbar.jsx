import { Link } from "react-router-dom";
import logo from '../../img/IRENA_logo (1).svg'
import Container from "../container/container";
import EnergyHover from "../html/energy.hover";
import './navbar.scss'
import WorkHover from "../html/work.hover";
import AboutHover from "../html/about.hover";

function Navbar() {
    return (
        <nav className="navbar">
            <Container>
                <div className="nav">
                    <Link to={'/'}>
                        <img width={201} height={53} src={logo} alt="" />
                    </Link>
                    <ul>
                        <EnergyHover />
                        <WorkHover />
                        <li className="li-link">
                            <Link to={'#'}>
                                NEWS
                            </Link>
                        </li>
                        <li className="li-link">
                            <Link to={'#'}>
                                PUBLICATIONS
                            </Link>
                        </li>
                        <li className="li-link">
                            <Link to={'#'}>
                                EDUCATION
                            </Link>
                        </li>
                        <li className="li-link">
                            <Link to={'#'}>
                                DATA
                            </Link>
                        </li>
                        <li className="li-link">
                            <Link to={'#'}>
                                EVENTS
                            </Link>
                        </li>
                        <AboutHover />
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;