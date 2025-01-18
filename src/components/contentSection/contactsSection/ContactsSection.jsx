import "./ContactsSection.css"
import BackImg from "../../../assets/back.jpg"

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

    function handleSubmit(isCorrect) {
        if (nameInputRef.current?.value === "") {
            setNameError(true)
            console.log("tik")
            return
        }
        setNameError(false)

        if (emailInputRef.current?.value === "") {
            setEmailError(true)
            return
        }
        setEmailError(false)

        const min = new Date().getMilliseconds()
        setMessage([{ date: min, isCorect: isCorrect }, ...message])

        nameInputRef.current.value = ""
        emailInputRef.current.value = ""

        setTimeout(() => {
            console.log(min)
            setMessage(message.filter((m) => m.date !== min))
        }, 5000
        )
    }

    return (
        <>
            <section id="contacts" className="contacts">
                <img src={BackImg} alt="" />
                <div className="box">
                    <h2>Помочь проекту</h2>
                    <p>Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>
                    <form action="" className="contacts-input">
                        <CustomInput type="text" placeholder="Имя" name="name" mRef={nameInputRef} isCorrect={isNameError} />
                        <CustomInput type="email" placeholder="Email" name="email" mRef={emailInputRef} isCorrect={isEmailError} />

                        <CustomButton onClick={() => handleSubmit(true)} isFill={true}>Отправить</CustomButton>
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