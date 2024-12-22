import './Header.css'

import logo from '../../assets/logo.svg'

import MenuButton from '../UI/MenuButton/MenuButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons'



function Header()
{
    return(
    <header id="top">
        <div>
            <div className=''>
                <div className="logo">
                    <a href="#top"><img src={logo} alt="logo" /></a>
                </div>


                <ul className="menu">
                    <MenuButton sectionRef={'#'}>Каталог</MenuButton>
                    <MenuButton sectionRef={'#'}>Галерея</MenuButton>
                    <MenuButton sectionRef={'#'}>О лаборатории</MenuButton>
                    <MenuButton sectionRef={'#'}>Контакты</MenuButton>
                </ul>

            </div>

            <div className="icons">
                <a href='#'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faRightToBracket} />
                </a>
            </div>
        </div>
    </header>
    )
}

export default Header