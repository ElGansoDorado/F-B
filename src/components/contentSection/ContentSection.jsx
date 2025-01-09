import "./ContentSection.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

import CustomButton from "../UI/button/customButton/CustomButton"
import CustomInput from "../UI/input/customInput/CustomInput"
import StatusMessage from "../UI/message/statusMessage/statusMessage"
import ArrowButton from "../UI/button/arrowButton/ArrowButton"

import BackImg from "../../assets/back.jpg"
import ImgCards from "../../assets/card_5.jpg"
import GallerySection from "./gallerySection/GallerySection"
import { useState } from "react"

function InfoSection()
{
    const [message, setMessage] = useState()
    const [isCorrectMessage, setCorrectMessage] = useState()

    function AddMessage(isCorrect)
    {
        setCorrectMessage(isCorrect)
        setMessage(true)

        setTimeout( () => {
            setMessage(false)
        }, 5000
        )
    }

    return(
        <main>
            <section id="catalog" className="catalog m-b-60">
                <img className="img-back" src={BackImg} alt="imgBack" />
                <div className="box">
                    <div className="catalog-info">
                        <h1>Крупнейшая коллекция природных артефактов</h1>
                        <p>Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
                        <ArrowButton isBlack={false}>Исследовать</ArrowButton>
                    </div>
                </div>
            </section>

            <GallerySection/>

            <section id="about" className="about m-b-60">
                <div className="box">
                    <h2 className="about-title">Новые артефакты</h2>
                    
                    <div className="about-container">
                        <div className="about-container-img">
                            <img src={ImgCards} alt="ImgCards" />
                        </div>

                        <div className="about-container-text">
                            <div>
                                <h3>Kurische Nehrung 24</h3>
                                <p className="p">Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. <br/> <br/> Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.</p>
                            </div>

                            <ArrowButton isBlack={true}>Читать далее</ArrowButton>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacts" className="contacts">
                <img src={BackImg} alt="" />
                <div className="box">
                    <h2>Помочь проекту</h2>
                    <p>Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>
                    <form action="" className="contacts-input">
                        <CustomInput type="text" placeholder="Имя" isCorrect={false}/>
                        <CustomInput type="email" placeholder="Email" isCorrect={false}/>

                        <CustomButton onClick={() => AddMessage(true)} isFill={true}>Отправить</CustomButton>
                    </form>
                </div>
            </section>

            <ul>
                {message && <StatusMessage isCorrect={isCorrectMessage}/>}
            </ul>
        </main>
    )
}


export default InfoSection