import './Header.css'

import logo from '../../assets/logo.svg'

import MenuButton from '../UI/MenuButton/MenuButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import search from '../../assets/search.svg'
import logIn from '../../assets/log-in.svg'

function Header()
{
    return(
    <header id="top">
        <div>
            <div>
                <div className="logo">
                    <a href="#top"><img src={logo} alt="logo" /></a>
                </div>


                <ul className="menu">
                    <MenuButton sectionRef={'#catalog'}>Каталог</MenuButton>
                    <MenuButton sectionRef={'#gallery'}>Галерея</MenuButton>
                    <MenuButton sectionRef={'#'}>О лаборатории</MenuButton>
                    <MenuButton sectionRef={'#'}>Контакты</MenuButton>
                </ul>

            </div>

            <div className="icons">
                <a href='#'>
                    <img src={search} alt="search" />
                    {/* <span>f<FontAwesomeIcon icon={faMagnifyingGlass}/></span> */}
                </a>
                <a href="#">
                    <img src={logIn} alt="logIn" />
                    {/* <span><FontAwesomeIcon icon={faRightToBracket}/></span> */}
                </a>
            </div>
        </div>
    </header>
    )
}

export default Header