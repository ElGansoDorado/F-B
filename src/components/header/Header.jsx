import './Header.css'

import search from '../../assets/search.svg'
import logIn from '../../assets/log-in.svg'
import logo from '../../assets/logo.svg'

import MenuButton from '../UI/MenuButton/MenuButton'

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
                    <MenuButton sectionRef={'#about'}>О лаборатории</MenuButton>
                    <MenuButton sectionRef={'#contacts'}>Контакты</MenuButton>
                </ul>

            </div>

            <div className="icons">
                <a href='#'>
                    <img src={search} alt="search" />
                </a>
                <a href="#">
                    <img src={logIn} alt="logIn" />
                </a>
            </div>
        </div>
    </header>
    )
}

export default Header