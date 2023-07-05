import icon1 from '../../img/Без названия.png'
import icon2 from '../../img/Без названия (1).png'
import bg from '../../img/bgc.jpg'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import './newsletter.scss'

function Newsletter() {
    return (  
        <div className="newsletter">
            <img className='newsletter-bg' src={bg} alt="" />
            <Container >
                <div className="newsletter-fath">
                    <div className='newsletter-img'>
                        <img className='newsletter-img-1' src={icon2} alt="icon" />
                        <img className='newsletter-img-2' src={icon1} alt="icon" />
                    </div>
                    <div className='newsletter-link'>
                        <h2>Stay up to date</h2>
                        <Link to={'/'}>
                            Subscribe to the newsletter
                        </Link>
                    </div>
                    <div className='newsletter-text'>
                        Stories you might have missed, key data and upcoming events information straight into your mailbox
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Newsletter;