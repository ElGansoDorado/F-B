import "./ContactsSection.css"
import BackImg2 from "../../../assets/back2.jpg"

import CustomButton from "../../UI/button/customButton/CustomButton"
import CustomInput from "../../UI/input/customInput/CustomInput"
import StatusMessage from "../../UI/message/statusMessage/StatusMessage"

import { useState, useRef } from "react"

function ContactsSection() {
    const [message, setMessage] = useState([])

    const [isNameError, setNameError] = useState(false)
    const [isEmailError, setEmailError] = useState(false)

    const nameInputRef = useRef()
    const emailInputRef = useRef()

    function CheckName() {
        if (nameInputRef.current?.value === "" || nameInputRef.current?.value.length < 2 || nameInputRef.current?.value.length > 20)
        {
            setNameError(true)
            return true
        }
        else
        {
            setNameError(false)
        }
    }

    function CheckEmail() {
        if (emailInputRef.current?.value.search(/^[\w-.]*[@]{1}[\w-.]*\.[a-z]{2,}$/gi) === 0)
        {
            setEmailError(false)
        }
        else
        {
            setEmailError(true)
            return true
        }
    }

    function handleSubmit(isCorrect) {
        if (CheckName() || CheckEmail()) {
            return
        }

        const min = new Date().getMilliseconds()
        setMessage([{ date: min, isCorect: isCorrect }, ...message])

        nameInputRef.current.value = ""
        emailInputRef.current.value = ""

        setTimeout(() => {
            setMessage(message.filter((m) => m.date !== min))
        }, 5000
        )
    }

    return (
        <>
            <section id="contacts" className="contacts">
                <img src={BackImg2} alt="" />
                <div className="box">
                    <h2>Помочь проекту</h2>
                    <p>Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>
                    <form className="contacts-input">
                        <CustomInput type="text" onChange={() => CheckName()} placeholder="Имя" name="name" mRef={nameInputRef} isCorrect={isNameError} />
                        <CustomInput type="email" onChange={() => CheckEmail()} placeholder="Email" name="email" mRef={emailInputRef} isCorrect={isEmailError} />

                        <CustomButton type="button" onClick={() => handleSubmit(true)} isFill={true}>Отправить</CustomButton>
                    </form>
                </div>
            </section>

            <ul className="list-message">
                {message.map((mes) => { return <li key={mes.date}><StatusMessage isCorrect={mes.isCorect} /></li> })}
            </ul>
        </>
    )
}

export default ContactsSection