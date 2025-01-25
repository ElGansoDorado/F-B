import './Header.css'

import search from '../../assets/search.svg'
import logIn from '../../assets/log-in.svg'
import logo from '../../assets/logo.svg'

import Menu from './menu/Menu'

function Header({onChange})
{
    return(
    <header id="top">
        <div>
            <div className='r'>
                <div className="logo">
                    <a href="#top"><img src={logo} alt="logo" /></a>
                </div>


                <Menu/>

            </div>

            <div className="icons">
                <a href='#'>
                    <img src={search} alt="search" />
                </a>
                <a href="#" onClick={() => onChange("login")}>
                    <img src={logIn} alt="logIn" />
                </a>
            </div>
        </div>
    </header>
    )
}

export default Header