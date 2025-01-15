import "./GallerySection.css"
import { plantDb } from "../../../db"

import CarouselItem from "../carouselItem/CarouselItem"
import ArrowButton from "../../UI/button/arrowButton/ArrowButton"

import { useRef, useState} from "react"

function GallerySection() {
    const [caruselValue, setCaruselValue] = useState(1)
    const scrolBar = useRef()

    function ScrollingCarouselLeft() {
        if (caruselValue === 1) {
            return
        }
        setCaruselValue(caruselValue - 1)

        Scroll(-295.5)
    }

    function ScrollingCarouselReight() {
        if (caruselValue === plantDb.length - 3) {
            return
        }
        setCaruselValue(caruselValue + 1)

        Scroll(295.5)
    }

    function Scroll(value) {
        scrolBar.current.style.scrollBehavior = "smooth"
        scrolBar.current.scrollLeft += value
    }

    return (
        <section id="gallery" className="gallery m-b-60">
            <div className="box">
                <div ref={scrolBar} className="carousel">
                    {plantDb.map((plant) => {
                        return <CarouselItem
                            key={plant.number}
                            numberImg={plant.number}
                            carouselImg={plant.imgPath}
                            title={plant.title}>
                            {plant.description}
                        </CarouselItem>
                    })}
                    
                </div>
                <div className="carousel-slider">
                    <ArrowButton color={'grey'} onClick={() => ScrollingCarouselLeft()} isRevers={true} />
                    <h3>{caruselValue} из {plantDb.length - 3}</h3>
                    <ArrowButton color={'grey'} onClick={() => ScrollingCarouselReight()} />
                </div>
            </div>
        </section>
    )
}

export default GallerySection