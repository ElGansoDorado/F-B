import "./PasswordSection.css"

import BackImg2 from "../../assets/back2.jpg"
import logo from "../../assets/logo.svg"

import PasswordInput from "../UI/input/passwordInput/PasswordInput"
import CustomButton from "../UI/button/customButton/CustomButton"
import ArrowButton from "../UI/button/arrowButton/ArrowButton"
import CustomCheckbox from "../UI/input/customCheckbox/CustomCheckbox"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function PasswordSection({ onChange, isLogin = true }) {
    const [login, setLogin] = useState(isLogin)
    const [isShow, setShow] = useState("password")

    return (
        <main className="password-section">
            <img src={BackImg2} alt="BackImg" className="password-section-back" />

            <section className="password-section-box">
                <img src={logo} alt="logo" />

                <form action="">
                    {login === true && <PasswordInput type="text" description="Name" placeholder="Name" name="name"> <FontAwesomeIcon icon={faUser} /> </PasswordInput>}
                    <PasswordInput type="email" description="Email" placeholder="Email address" name="email"> <FontAwesomeIcon icon={faEnvelope} /> </PasswordInput>
                    <PasswordInput
                        type={isShow}
                        minLength="8"
                        description="Password"
                        placeholder="Password"
                        name="password"
                        pattern="[0-9a-fA-F]{4,8}"
                        title="Enter an ID consisting of 4-8 hexadecimal digits"
                        autoComplete="new-password"
                        onShow={() => isShow === "password" ? setShow("text") : setShow("password")}>
                        <FontAwesomeIcon icon={faLock} />
                    </PasswordInput>

                    {login === true &&
                        <PasswordInput
                            type={isShow}
                            minLength="8"
                            description="Confirm password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            pattern="[0-9a-fA-F]{4,8}"
                            title="Enter an ID consisting of 4-8 hexadecimal digits"
                            autoComplete="new-password"
                            onShow={() => isShow === "password" ? setShow("text") : setShow("password")}>
                            <FontAwesomeIcon icon={faLock} />
                        </PasswordInput>
                    }

                    <div className="password-section-checkbox">
                        <CustomCheckbox id="c"> Запомнить меня </CustomCheckbox>

                        <p><span>Забыли пароль?</span></p>
                    </div>

                    <CustomButton style={{width: 370}} isFill={true}>{login ? 'Зарегестрировать акк' : 'Войти'}</CustomButton>
                </form>
                <p className="password-section-description"><span onClick={() => setLogin(true)}>Зарегистрируйтесь</span> или <span onClick={() => { setLogin(false) }}>войдите</span> в аккаунт</p>
                <ArrowButton color={"grey"} isRevers="true" onClick={() => onChange("main")}>вернуться на главную</ArrowButton>
            </section>
        </main>
    )
}

export default PasswordSection