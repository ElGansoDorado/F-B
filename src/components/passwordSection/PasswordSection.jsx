import "./PasswordSection.css"

import BackImg from "../../assets/back.jpg"

import PasswordInput from "../UI/input/passwordInput/PasswordInput"
import CustomButton from "../UI/button/customButton/CustomButton"
import ArrowButton from "../UI/button/arrowButton/ArrowButton"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

function PasswordSection({onChange}) {
    return(
        <main className="password-section">
            <img src={BackImg} alt="BackImg" />

            <section className="password-section-box">
                <form action="">
                    <PasswordInput type="text" description="name" placeholder="name" name="name"> <FontAwesomeIcon icon={faUser} /> </PasswordInput>
                    <PasswordInput type="email" description="email" placeholder="email" name="email"> <FontAwesomeIcon icon={faEnvelope} /> </PasswordInput>
                    <PasswordInput type="text" description="password" placeholder="password" name="password"> <FontAwesomeIcon icon={faLock} /> </PasswordInput>
                    <PasswordInput type="text" description="repeat password" placeholder="repeat password" name="repeatPassword"> <FontAwesomeIcon icon={faLock} /> </PasswordInput>
                    <CustomButton isFill={true}>Создать</CustomButton>
                    <p className="password-section-description"><span>Зарегистрируйтесь</span> или <span>войдите</span> в свой аккаунт. Также можете вернуться на главную страницу сайта, для его просмотра без входа в аккаунт</p>
                    <ArrowButton color={"black"} isRevers="true" onClick={() => onChange("main")}>вернуться на главную</ArrowButton>
                </form>
                
            </section>
        </main>
    )
}

export default PasswordSection