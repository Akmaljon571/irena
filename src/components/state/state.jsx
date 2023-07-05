import { Link } from 'react-router-dom';
import img1 from '../../img/WETO 2023 release banner.jpg'
import img2 from '../../img/Innovation landscape 2023 banner.png'
import img3 from '../../img/Innovation-2023-2160x1128-opening.jpg'
import img4 from '../../img/WETO 2023_Cover.png' 
import img5 from '../../img/Indonesia tile.JPG'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './state.scss'

function State({ children }) {
    return (  
        <div className="state">
            <div className="state-left">
                <img width={647} height={369} src={img1} alt="" />
                <Link to={'/'}>
                    <h2>Annual Renewable Power Must Triple by 2030</h2>
                </Link>
                <div>
                    <span>
                        22 June 2023    
                    </span>
                    <hr />
                    <Link to={'/'}>
                        Press Releases
                    </Link>
                </div>
                <p>
                    The International Renewable Energy Agency (IRENA) released the first volume of the World Energy Transitions Outlook (WETO) 2023 that identifies the way forward to immediately course correct the 1.5°C climate pathway.
                </p>
            </div>
            {children ? 
            <div className='state-rigth1'>
                <div className='state-rigth1-1'>
                    <div>
                        <img width={316} height={180} src={img2} alt="rasm" />
                        <h3>
                            Powering the Energy Transition with Smart Electrification
                        </h3>
                        <div>
                            <span>
                                20 June 2023 
                            </span>
                            <hr />
                            <Link to={'/'}>Press Releases</Link>
                        </div>
                    </div>
                    <div>
                        <img width={316} height={180} src={img3} alt="rasm" />
                        <h3>
                            How to Decarbonise End-Use Sectors with Renewable Power?​
                        </h3>
                        <div>
                            <span>
                                20 June 2023 
                            </span>
                            <hr />
                            <Link to={'/'}>Articles</Link>
                        </div>
                    </div>
                </div>
                <div className='state-rigth1-2'>
                    <div className="state-rigth1-2_top">
                        <img src={img4} alt="" />
                        <span>FOCUS ON</span>
                        <Link to={'/'}>
                            World Energy Transitions Outlook 2023: 1.5°C Pathway; Preview
                        </Link>
                        <Link to={'/'} className='state-rigth1-2_top_link'>
                            World Energy Transitions Outlook 2023
                        </Link>
                    </div>
                    <div className="state-rigth1-2_bottom">
                        <h2>See also</h2>
                        <Link to={'/'}>#press releases</Link>
                        <Link to={'/'}>#articles</Link>
                        <Link to={'/'}>#expert insights</Link>
                    </div>
                </div>
            </div>: 
            <div className='state-rigth2'>
                <div className='state-rigth2-father'>
                    <div className='state-rigth2-img1'>
                        <img width={316} height={369} src={img5} alt="rasm" />
                        <Link className='state-rigth2-img1-link' to={'/'}>
                            Renewable Pathway More Cost-effective than Fossil Fuels in Indonesia
                        </Link>
                        <div>
                            <span>
                                22 October
                            </span>
                            <hr />
                            <Link to={'/'}>Article</Link>
                        </div>
                    </div>
                    <div className='state-rigth2-img2'>
                        <h3>
                            Member Login
                        </h3>
                        <PersonOutlineIcon className='state-rigth2-img2-person' />
                        <p>
                            For more news, log into your Member's Account
                        </p>

                        <Link to={'/'}>
                            Log in to your account
                        </Link>
                    </div>
                </div>
                <ul className="state-rigth2-list">
                    <li className='state-rigth2-list-active'>
                        <h3>Latest news</h3>
                        <Link to={'/'}>Browse all</Link>
                    </li>
                    <li>
                        <span>22 June</span>
                        <h4>Annual Renewable Power Must Triple by 2030</h4>
                    </li>
                    <li>
                        <span>20 June</span>
                        <h4>Powering the Energy Transition with Smart Electrification</h4>
                    </li>
                    <li>
                        <span>22 June</span>
                        <h4>How to Decarbonise End-Use Sectors with Renewable Power?​</h4>
                    </li>
                </ul>
            </div>}
        </div>
    );
}

export default State;