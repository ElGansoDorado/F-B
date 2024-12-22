import "./InfoSection.css"

function InfoSection()
{
    return(
        <main>
            <section id="catalog" className="catalog">
                <div className="box">
                    <div className="catalog-info">
                        <h2>Крупнейшая коллекция природных артефактов</h2>
                        <p>Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.</p>
                        <button className="catalog-button">Исследовать -------</button>
                    </div>
                </div>
            </section>


            <section id="gallery" className="gallery">
            </section>

            <section id="about" className="about"></section>
            <section id="contacts" className="contacts"></section>
        </main>
    )
}


export default InfoSection