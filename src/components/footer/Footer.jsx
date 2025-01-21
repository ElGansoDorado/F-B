import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'


import MenuButton from '../UI/button/menuButton/MenuButton'

function Footer()
{
    return(
        <footer>
            <div className='footer-list'>
                <ul className='footer-list-networks'>
                    <MenuButton sectionRef={"https://www.youtube.com/@mrredgid7771"}> <FontAwesomeIcon icon={faYoutube} /> </MenuButton>
                    <MenuButton sectionRef={"https://www.instagram.com/den_yakovchik/"}> <FontAwesomeIcon icon={faInstagram} /> </MenuButton>
                    <MenuButton sectionRef={"https://www.facebook.com/profile.php?id=100046817203362&locale=ru_RU"}> <FontAwesomeIcon icon={faSquareFacebook} /> </MenuButton>
                    <MenuButton sectionRef={"https://x.com/"}> <FontAwesomeIcon icon={faTwitter} /> </MenuButton>
                </ul>
            </div>
            <div className='footer-year'>
                <p>f&b ® 2024</p>
            </div>
        </footer>
    )
}

export default Footer