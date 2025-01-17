import "./GallerySection.css"
import { plantDb } from "../../../db"

import img1 from "../../../assets/img_c1.png"
import img2 from "../../../assets/img_c2.png"
import img3 from "../../../assets/img_c3.png"
import img4 from "../../../assets/img_c4.png"

import CarouselItem from "../carouselItem/CarouselItem"
import ArrowButton from "../../UI/button/arrowButton/ArrowButton"

import { useRef, useState} from "react"

function GallerySection() {
    const [caruselValue, setCaruselValue] = useState(1)
    const scrolBar = useRef()

    const imgPath = {
        id: [0, 1, 2, 3, 4, 5, 6, 7],
        path: [img1, img2, img3, img4, img1, img2, img3, img4]
    }

    function ScrollingCarouselLeft() {
        if (caruselValue === 1) {
            return
        }
        setCaruselValue(caruselValue - 1)

        Scroll(-295)
    }

    function ScrollingCarouselReight() {
        if (caruselValue === plantDb.length - 3) {
            return
        }
        setCaruselValue(caruselValue + 1)

        Scroll(295)
    }

    function Scroll(value) {
        scrolBar.current.style.scrollBehavior = "smooth"
        scrolBar.current.scrollLeft += value
    }

    return (
        <section id="gallery" className="gallery m-b-60">
            <div className="box">
                <div ref={scrolBar} className="carousel">
                    {imgPath.id.map((id) => {
                        return <CarouselItem
                            key={plantDb[id].number}
                            numberImg={plantDb[id].number}
                            carouselImg={imgPath.path[id]}
                            title={plantDb[id].title}>
                            {plantDb[id].description}
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