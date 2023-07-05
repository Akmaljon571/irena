import { Alert, Hero, Navbar } from '../../components'
import './header.scss'

function Header() {
    return (
        <header className="header">
            {/* <Alert /> */}
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header