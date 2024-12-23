import "./carouselItem.css"

function CarouselItem({children, carouselImg, title})
{
    return(
        <div className="carusel-item">
            <div className="carusel-item-img">
                <img src={carouselImg} alt="img" />
            </div>
            <div className="carusel-item-text">
                <div>
                    <h3>{title}</h3>
                    <p>{children}</p>
                </div>

                <button>Подробнее</button>
            </div>
        </div>
    )
}

export default CarouselItem