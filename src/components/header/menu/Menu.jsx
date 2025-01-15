import "./Menu.css"

import MenuButton from '../../UI/button/menuButton/MenuButton'
import { useState } from "react"
function Menu() {
    const [isActive, setActive] = useState(false)

    return (
        <>
        <div onClick={() => {setActive(!isActive)}} className={isActive ? "burger active" : "burger"}>
            <span></span>
        </div>
        <nav>
            <ul className={isActive ? "menu active" : "menu"}>
                <MenuButton onClick={() => {setActive(false)}} sectionRef={'#catalog'}>Каталог</MenuButton>
                <MenuButton onClick={() => {setActive(false)}} sectionRef={'#gallery'}>Галерея</MenuButton>
                <MenuButton onClick={() => {setActive(false)}} sectionRef={'#about'}>О лаборатории</MenuButton>
                <MenuButton onClick={() => {setActive(false)}} sectionRef={'#contacts'}>Контакты</MenuButton>
            </ul>
        </nav>
        </>
        )
}

export default Menu