import { Books, Fix, Mission, News, Newsletter, Week, Youtube } from '../../components'
import './main.scss'

function Main() {
    return (
        <main> 
            <Fix />
            <Mission />
            <News />
            <Newsletter />
            <Books />
            <Week />
            <Youtube />
        </main>
    )
}

export default Main