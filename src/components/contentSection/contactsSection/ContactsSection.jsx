import "./ContactsSection.css"
import BackImg from "../../../assets/back.jpg"

import CustomButton from "../../UI/button/customButton/CustomButton"
import CustomInput from "../../UI/input/customInput/CustomInput"
import StatusMessage from "../../UI/message/statusMessage/StatusMessage"

import { useState, useActionState } from "react"

function ContactsSection() {
    const [message, setMessage] = useState()
    const [isCorrectMessage, setCorrectMessage] = useState()

    function AddMessage(isCorrect) {
        setCorrectMessage(isCorrect)
        setMessage(true)

        setTimeout(() => {
            setMessage(false)
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
                        <CustomInput type="text" placeholder="Имя" name="name" isCorrect={false} />
                        <CustomInput type="email" placeholder="Email" name="email" isCorrect={false} />

                        <CustomButton onClick={() => AddMessage(true)} isFill={true}>Отправить</CustomButton>
                    </form>
                </div>
            </section>

            <ul>
                {message && <StatusMessage isCorrect={isCorrectMessage} />}
            </ul>
        </>
    )
}

export default ContactsSection