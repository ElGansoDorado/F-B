import "./CarouselSection.css"

import carouselImg_1 from "../../../assets/img_c1.png"
import carouselImg_2 from "../../../assets/img_c2.png"
import carouselImg_3 from "../../../assets/img_c3.png"
import carouselImg_4 from "../../../assets/img_c4.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import CarouselItem from "../carouselItem/CarouselItem"
import { useRef, useState } from "react"

export default function CarouselSection()
{
    const [caruselValue, setCaruselValue] = useState(1)
    const scrolBar = useRef()

    function ScrollingCarouselLeft()
    {
        if (caruselValue === 1)
        {
            return
        }
        setCaruselValue(caruselValue - 1)
        scrolBar.current.style.scrollBehavior = "smooth"
        scrolBar.current.scrollLeft -= 294.5
    }

    function ScrollingCarouselReight()
    {
        if (caruselValue === 5)
        {
            return
        }
        setCaruselValue(caruselValue + 1)
        scrolBar.current.style.scrollBehavior = "smooth"
        scrolBar.current.scrollLeft += 295.6
    }


    return(
        <section id="gallery" className="gallery m-b-60">
                <div className="box">
                    <div ref={scrolBar} className="carousel">
                        <CarouselItem
                            numberImg={"2.4"}
                            carouselImg={carouselImg_1}
                            title={"Fig. 1 (plant)"}>
                            Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.
                        </CarouselItem>
                        <CarouselItem
                            numberImg={"3.1"}
                            carouselImg={carouselImg_2}
                            title={"Fig. 2 (flower)"}>
                            Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.
                        </CarouselItem>
                        <CarouselItem
                            numberImg={"1.2"}
                            carouselImg={carouselImg_3}
                            title={"Fig. 3 (leaf)"}>
                            Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.
                        </CarouselItem>
                        <CarouselItem
                            numberImg={"1.4"}
                            carouselImg={carouselImg_4}
                            title={"Fig. 4 (wood)"}>
                            Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.
                        </CarouselItem>

                        <CarouselItem
                            numberImg={"1.5"}
                            carouselImg={carouselImg_1}
                            title={"Fig. 1 (plant)"}>
                            Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.
                        </CarouselItem>
                        <CarouselItem
                            numberImg={"1.7"}
                            carouselImg={carouselImg_2}
                            title={"Fig. 2 (flower)"}>
                            Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.
                        </CarouselItem>
                        <CarouselItem
                            numberImg={"3.8"}
                            carouselImg={carouselImg_3}
                            title={"Fig. 3 (leaf)"}>
                            Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.
                        </CarouselItem>
                        <CarouselItem
                            numberImg={"2.2"}
                            carouselImg={carouselImg_4}
                            title={"Fig. 4 (wood)"}>
                            Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.
                        </CarouselItem>
                    </div>
                    <div className="carousel-slider">
                        <button className="carousel-slider-button" onClick={() => ScrollingCarouselLeft()}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <p>{caruselValue} из 5</p>
                        <button className="carousel-slider-button" onClick={() => ScrollingCarouselReight()}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </section>
    )
}