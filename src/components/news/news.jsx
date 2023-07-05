import { Link } from "react-router-dom";
import './news.scss'
import Container from "../container/container";
import { useState } from "react";
import State from "../state/state";

function News() {
    const [active, setActive] = useState(true);

    return (  
        <section className="news">
            <Container>
            <ul className="news-top">
                <li>
                    <h2>Latest news</h2>
                </li>
                <li className={active ? "btn-active" : ""}>
                    <button onClick={() => setActive(true)}>
                        All users
                    </button>
                    <span></span>
                </li>
                <li className={!active ? "btn-active" : ""}>
                    <button onClick={() => setActive(false)}>
                        Members
                    </button>
                    <span></span>
                </li>
                <li className="news-link">
                    <Link to={"/"}>
                        Browse all news
                    </Link>
                </li>
            </ul>
            <State>{active}</State>
            </Container>
        </section>
    );
}

export default News;