import "./ContentSection.css"

import ArrowButton from "../UI/button/arrowButton/ArrowButton"

import BackImg from "../../assets/back.jpg"
import ImgCards from "../../assets/card_5.jpg"
import GallerySection from "./gallerySection/GallerySection"
import ContactsSection from "./contactsSection/ContactsSection"
import { useState } from "react"

function ContentSection()
{
    return(
        <main>
            <section id="catalog" className="catalog m-b-60">
                <img className="img-back" src={BackImg} alt="imgBack" />
                <div className="box">
                    <div className="catalog-info">
                        <h1 className="catalog-info-title">Крупнейшая коллекция природных артефактов</h1>
                        <p className="catalog-info-desription">Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
                        <ArrowButton color={"green"}>Исследовать</ArrowButton>
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

                            <ArrowButton color={"black"}>Читать далее</ArrowButton>
                        </div>
                    </div>
                </div>
            </section>

            <ContactsSection/>
        </main>
    )
}


export default ContentSection