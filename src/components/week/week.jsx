import Container from "../container/container";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './week.scss'

function Week() {
    return (
        <Container>
            <div className="week">
                <h1>Events</h1>
                <div className="week-list">
                    <hr />
                    <div className="week-item">
                        <h2>
                            12 July
                        </h2>
                        <span></span>
                        <i>New, York, Usa</i>
                        <h3>Financing SDG7: Solidarity, Equity and Ambition – side event at HLPF2023</h3>
                    </div>
                    <div className="week-item">
                        <h2>
                            19 July
                        </h2>
                        <span></span>
                        <i>Virtual Knowledge Exchange Series</i>
                        <h3>Advancing renewables-based clean cooking solutions</h3>
                    </div>
                    <div className="week-item">
                        <h2>
                            17 July
                        </h2>
                        <span></span>
                        <i>Virtual Knowledge Exchange Series</i>
                        <h3>Financing SDG7: Solidarity, Equity and Ambition – side event at HLPF2023</h3>
                    </div>
                </div>
                <button>
                    <ArrowBackIosIcon />
                </button>
                <button className='week-btn'>
                    <ArrowBackIosIcon />
                </button>
            </div>
        </Container>
    );
}

export default Week;