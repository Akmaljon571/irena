import { Books, Fix, Mission, News, Newsletter } from '../../components'
import './main.scss'

function Main() {
    return (
        <main> 
            <Fix />
            <Mission />
            <News />
            <Newsletter />
            <Books />
        </main>
    )
}

export default Main