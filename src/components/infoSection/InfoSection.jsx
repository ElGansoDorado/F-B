import "./InfoSection.css"

import carouselImg_1 from "../../assets/img_c1.png"
import carouselImg_2 from "../../assets/img_c2.png"
import carouselImg_3 from "../../assets/img_c3.png"
import carouselImg_4 from "../../assets/img_c4.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import CarouselItem from "./carouselItem/carouselItem"

function InfoSection()
{
    return(
        <main>
            <section id="catalog" className="catalog">
                <div className="box">
                    <div className="catalog-info">
                        <h2>Крупнейшая коллекция природных артефактов</h2>
                        <p>Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
                        <button className="catalog-button">Исследовать <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </section>


            <section id="gallery" className="gallery">
                <div className="box">
                    <div className="carousel">
                        <CarouselItem
                            carouselImg={carouselImg_1}
                            title={"Fig. 1 (plant)"}>
                            Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.
                        </CarouselItem>
                        <CarouselItem
                            carouselImg={carouselImg_2}
                            title={"Fig. 2 (flower)"}>
                            Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.
                        </CarouselItem>
                        <CarouselItem
                            carouselImg={carouselImg_3}
                            title={"Fig. 3 (leaf)"}>
                            Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.
                        </CarouselItem>
                        <CarouselItem
                            carouselImg={carouselImg_4}
                            title={"Fig. 4 (wood)"}>
                            Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.
                        </CarouselItem>
                    </div>
                    <div className="carousel-slider">
                        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <p>1 из 3</p>
                        <button><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </section>

            <section id="about" className="about"></section>
            <section id="contacts" className="contacts"></section>
        </main>
    )
}


export default InfoSection