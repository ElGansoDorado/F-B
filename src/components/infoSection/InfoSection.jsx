import "./InfoSection.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

import CarouselSection from "./carouselSection/CarouselSection"

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

            <CarouselSection/>

            <section id="about" className="about"></section>
            <section id="contacts" className="contacts"></section>
        </main>
    )
}


export default InfoSection