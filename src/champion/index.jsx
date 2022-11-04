import React, { useEffect, useState } from "react";
import image from '../image/map-summner.png'

import './style.scss'

const Champion = () => {

    const [akali, setAkali] = useState(require("../image/akali1.png"))

    window.addEventListener('scroll', () => {

        let tela = parseInt(window.scrollY);

        const video = document.getElementById('conteudo');
        const content_info = document.getElementById('conteudo-info');

        if (tela >= 2198) {
            video.style.opacity = 1
            setTimeout(() => {
                content_info.style.opacity = 1
            }, 2000)
        }
    })

    useEffect(() => {
        ShowBar()
    }, [])

  
    function ShowBar() {
        const bar1 = document.getElementById('bar1')
        const bar2 = document.getElementById('bar2')
        const bar3 = document.getElementById('bar3')
        const bar4 = document.getElementById('bar4')

        setInterval(() => {
            bar1.style.width = "400px"
            bar2.style.width = "400px"
            bar3.style.width = "400px"
            bar4.style.width = "400px"
        }, 2000)


        setInterval(() => {
            bar1.style.width = "0px"
            bar2.style.width = "0px"
            bar3.style.width = "0px"
            bar4.style.width = "0px"
        }, 4000)

    }

    return (
        <div className="container-champion-main" style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>

            <div className="shadow"></div>

            <div className="champion">
                <img className="akali-img" src={akali} alt="" />
                <div className="bar-top-left bar"></div>
                <div className="bar-top-left bar" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar1"></div>
                <div className="bar-top-right bar"></div>
                <div className="bar-top-right bar" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar2"></div>
                <div className="bar-bottom-right bar" ></div>
                <div className="bar-bottom-right bar" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar3"></div>
                <div className="bar-bottom-left bar" ></div>
                <div className="bar-bottom-left bar" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar4"></div>
            </div>
            <div className="champion-info">
                <h2>ARRASE COM</h2>
                <h1>ESTILO</h1>
                <h3>Personalize o jogo mudando o visual dos seus Campeões favoritos com skins.</h3>
            </div>
        </div>
    )
}

export default Champion;