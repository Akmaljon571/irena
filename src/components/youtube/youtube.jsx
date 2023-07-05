import { Link } from 'react-router-dom';
import Container from '../container/container';
import Slider from 'infinite-react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './youtube.scss'

function Youtube() {
    return (
        <div className="youtube">
            <Container>
                <Slider dots={false} arrows={true}>
                    <div className='youtube-fath'>
                        <div className="youtube-left">
                            <iframe width="874" height="526" src="https://www.youtube.com/embed/KX8U-6QcpNs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="youtube-right">
                            <h2>Featured video</h2>
                            <p>
                                Time to Transform European Commitments into Actions
                            </p>
                            <b>Francesco La Camera,</b>
                            <span>IRENA Director-General</span>

                            <Link to={'/'}>Read more</Link>
                            <Link className='youtube-link' to={'/'}>More videos</Link>
                            <svg className='youtube-icon' xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 409.294 409.294" viewBox="0 0 409.294 409.294"><path fill="white" d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z" /><path fill="white" d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z" /></svg>
                            <button>
                                <ArrowBackIosIcon />
                            </button>
                            <button className='youtube-right-btn'>
                                <ArrowBackIosIcon />
                            </button>
                        </div>
                    </div>
                    <div className='youtube-fath'>
                        <div className="youtube-left">
                            <iframe width="874" height="526" src="https://www.youtube.com/embed/vaNBxVMlS9g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="youtube-right">
                            <h2>Featured video</h2>
                            <p>
                                Governments are facing a difficult task of bringing the health emergency under control while introducing major stimulus and recovery measures. The crisis has exposed deeply embedded vulnerabilities ...
                            </p>
                            <b>Francesco La Camera,</b>
                            <span>IRENA Director-General</span>

                            <Link to={'/'}>Read more</Link>
                            <Link className='youtube-link' to={'/'}>More videos</Link>
                            <svg className='youtube-icon' xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 409.294 409.294" viewBox="0 0 409.294 409.294"><path fill="white" d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z" /><path fill="white" d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z" /></svg>
                            <button>
                                <ArrowBackIosIcon />
                            </button>
                            <button className='youtube-right-btn'>
                                <ArrowBackIosIcon />
                            </button>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    );
}

export default Youtube;