import "./InfoSection.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

import BackImg from "../../assets/back.jpg"
import ImgCards from "../../assets/card_5.jpg"
import CarouselSection from "./carouselSection/CarouselSection"

function InfoSection()
{
    return(
        <main>
            <section id="catalog" className="catalog m-b-60">
                <img src={BackImg} alt="" />
                <div className="box">
                    <div className="catalog-info">
                        <h1>Крупнейшая коллекция природных артефактов</h1>
                        <p>Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
                        <button className="catalog-button">Исследовать <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </section>

            <CarouselSection/>

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
                                <p>Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. <br/> <br/> Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.</p>
                            </div>

                            <button>Читать далее <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacts" className="contacts">
                <img src={BackImg} alt="" />
                <div className="box">
                    <h2>Помочь проекту</h2>
                    <p>Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>
                    
                    <div className="contacts-input">
                        <input type="text" placeholder="Имя"/>
                        <input type="email" placeholder="Email"/>
                        <button>Отправить</button>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default InfoSection