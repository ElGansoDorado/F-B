import "./Menu.css"

import MenuButton from '../../UI/button/menuButton/MenuButton'
import { useState } from "react"
function Menu() {
    const [isActive, setActive] = useState(false)

    function SwitchScroll(isIncluded)
    {
        setActive(isIncluded)

        var element = document.getElementById("body");
        element.classList.toggle("lock");
    }

    return (
        <>
        <div onClick={() => {SwitchScroll(!isActive)}} className={isActive ? "burger active" : "burger"}>
            <span></span>
        </div>
        <nav>
            <ul className={isActive ? "menu active" : "menu"}>
                <MenuButton onClick={() => {SwitchScroll(false)}} sectionRef={'#catalog'}>Каталог</MenuButton>
                <MenuButton onClick={() => {SwitchScroll(false)}} sectionRef={'#gallery'}>Галерея</MenuButton>
                <MenuButton onClick={() => {SwitchScroll(false)}} sectionRef={'#about'}>О лаборатории</MenuButton>
                <MenuButton onClick={() => {SwitchScroll(false)}} sectionRef={'#contacts'}>Контакты</MenuButton>
            </ul>
        </nav>
        </>
        )
}

export default Menu