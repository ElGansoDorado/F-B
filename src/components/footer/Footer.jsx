import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import MenuButton from '../UI/MenuButton/MenuButton'

function Footer()
{
    return(
        <footer>
            <div className='footer-list'>
                <ul className='footer-list-networks'>
                    <MenuButton sectionRef={"#top"}> <FontAwesomeIcon icon={faRightToBracket}/> </MenuButton>
                    <MenuButton sectionRef={"#top"}> <FontAwesomeIcon icon={faRightToBracket}/> </MenuButton>
                    <MenuButton sectionRef={"#top"}> <FontAwesomeIcon icon={faRightToBracket}/> </MenuButton>
                    <MenuButton sectionRef={"#top"}> <FontAwesomeIcon icon={faRightToBracket}/> </MenuButton>
                </ul>
            </div>
            <div className='footer-year'>
                <p>f&b ® 2024</p>
            </div>
        </footer>
    )
}

export default Footer