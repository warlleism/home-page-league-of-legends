import React, { useState } from "react";
import video from '../image/video.mp4'
import lucian from '../image/lucian.mp4'
import jinx from '../image/Jinx.mp4'
import Header from "../header/index";
import './style.scss'

const Home = () => {
    const [image, setImage] = useState(require('../image/lucian.png'))

    return (
        <>
            <div className="home-container" style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                transition: ".5s",
            }}>
                <Header />

                <div className="cards-conteiner" >
                    <div className="card" onMouseEnter={() => setImage(require('../image/legendary.png'))}>

                        <div className="container-img-video">
                            <video autoPlay loop muted>
                                <source src={video} type="video/mp4" />
                            </video>
                            <div className="imagem-container">
                                <img src={require('../image/legendary.png')} />
                            </div>
                        </div>

                        <div className="desc">
                            <div style={{ fontSize: "2rem", marginBottom: 7, fontWeight: 700 }}>Ezreal</div>
                            Nascido e criado em um bairro
                            rico de Piltover, Ezreal sempre
                            foi uma criança curiosa. Seus
                            pais eram arqueólogos renomados
                            e assim ele acabou se acostumando
                            aos longos períodos de ausência,
                            sempre sonhando em acompanhá-los
                            em suas viagens. Ele adorava ouvir
                            histórias de grandes aventuras e,
                            como seus pais, desejava preencher
                            os espaços vazios de todos os mapas.
                        </div>

                        <div className="arrow">
                            <a href="https://universe.leagueoflegends.com/pt_BR/story/champion/ezreal/">
                                <span className="material-symbols-outlined more" style={{ fontSize: "4rem" }}>expand_more</span>
                            </a>
                        </div>

                    </div>

                    <div className="card" style={{ marginBottom: 120 }} onMouseEnter={() => setImage(require('../image/lucian.png'))}>

                        <div className="container-img-video">
                            <video autoPlay loop muted>
                                <source src={lucian} type="video/mp4" />
                            </video>
                            <div className="imagem-container">
                                <img src={require('../image/lucian.png')} alt="" />
                            </div>
                        </div>

                        <div className="desc">
                            <div style={{ fontSize: "2rem", marginBottom: 7, fontWeight: 700 }}>Lucian</div>
                            Lucian, um Sentinela da Luz, é um caçador de espíritos imortais
                            que usa suas pistolas relicárias para persegui-los implacavelmente
                            e, por fim, aniquilá-los. Após o assassinato de sua esposa pelas
                            mãos do espectro Thresh, Lucian embarcou em uma jornada de vingança.
                            Mas mesmo com a volta de sua amada ao reino dos vivos, sua ira
                            permanece inalterada. Impiedoso e obstinado, Lucian não hesitará
                            em proteger os vivos contra os horrores da Névoa Negra.
                        </div>
                        <div className="arrow"><a href="https://universe.leagueoflegends.com/pt_BR/champion/lucian/">
                            <span className="material-symbols-outlined more" style={{ fontSize: "4rem" }}>expand_more</span>
                        </a>
                        </div>
                    </div>

                    <div className="card" onMouseEnter={() => setImage(require('../image/jinx.png'))}>

                        <div className="container-img-video">
                            <video autoPlay loop muted>
                                <source src={jinx} type="video/mp4" />
                            </video>
                            <div className="imagem-container">
                                <img src={require('../image/jinx.png')} alt="" />
                            </div>
                        </div>

                        <div className="desc">
                            <div style={{ fontSize: "2rem", marginBottom: 7, fontWeight: 700 }}>Jinx</div>
                            Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar
                            o caos sem se preocupar com as consequências. Com um arsenal de armas
                            mortais, ela detona as explosões mais altas e mais luminosas para deixar
                            um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e
                            deixa alegremente sua marca caótica de pandemônio aonde quer que vá.
                        </div>
                        <div className="arrow"><a href="https://universe.leagueoflegends.com/pt_BR/champion/jinx/">
                            <span className="material-symbols-outlined more" style={{ fontSize: "4rem" }}>expand_more</span>
                        </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;
<span className="material-symbols-outlined" style={{ fontSize: "4rem" }}>
    expand_less
</span>
