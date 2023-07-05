import { Books, Fix, Mission, News, Newsletter, Youtube } from '../../components'
import './main.scss'

function Main() {
    return (
        <main> 
            <Fix />
            <Mission />
            <News />
            <Newsletter />
            <Books />
            <Youtube />
        </main>
    )
}

export default Main