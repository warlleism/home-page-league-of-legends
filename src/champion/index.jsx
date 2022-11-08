import React, { useEffect, useState } from "react";
import image from '../image/map-summner.png'

import './style.scss'

const Champion = () => {


    const [akali, setAkali] = useState(require("../image/akali1.png"))

    useEffect(() => {
        ShowBar()
    }, [])

    useEffect(() => {
        AkaliSkin()
    }, [akali])

    window.addEventListener('scroll', () => {

        let tela = parseInt(window.scrollY);
        const akali = document.getElementById('content-akali');
        const info = document.getElementById('info-content-akali');
        const cloud = document.getElementById('cloud');

        if (tela >= 2572) {
            akali.style.opacity = 1

            setTimeout(() => {
                cloud.style.opacity = 1
            }, 900)

            setTimeout(() => {
                info.style.opacity = 1
            }, 1000)
        }



    })


    function AkaliSkin() {
        setTimeout(() => {

            if (akali == require("../image/akali1.png")) {
                setAkali(require("../image/akali2.png"))
            }
            if (akali == require("../image/akali2.png")) {
                setAkali(require("../image/akali3.png"))
            }
            if (akali == require("../image/akali3.png")) {
                setAkali(require("../image/akali4.png"))
            }
            if (akali == require("../image/akali4.png")) {
                setAkali(require("../image/akali1.png"))
            }
        }, 3000)
    }

    function ShowBar() {

        const b1 = document.getElementsByClassName('b1')

        setInterval(() => {
            for (let i = 0; i <= b1.length; i++) {
                b1[i].style.width = "400px"
            }
        }, 2000)


        setInterval(() => {
            for (let i = 0; i <= b1.length; i++) {
                b1[i].style.width = "0px"
            }
        }, 4000)

    }

    return (
        <div className="container-champion-main" style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative"
        }}>

            <img className="cloud" id="cloud" src={require('../image/cloud.png')} alt="" />

            <div className="shadow"></div>

            <div className="champion" id="content-akali">
                <img className="akali-img" src={akali} alt="" />
                <div className="bar-top-left bar"></div>
                <div className="bar-top-left bar b1" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar1"></div>
                <div className="bar-top-right bar"></div>
                <div className="bar-top-right bar b1" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar2"></div>
                <div className="bar-bottom-right bar" ></div>
                <div className="bar-bottom-right bar b1" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar3"></div>
                <div className="bar-bottom-left bar" ></div>
                <div className="bar-bottom-left bar b1" style={{ background: 'rgb(233, 224, 106)', width: "0px", transition: ".5s" }} id="bar4"></div>
            </div>
            <div className="champion-info" id="info-content-akali">
                <h2>ARRASE COM</h2>
                <h1>ESTILO</h1>
                <h3>Personalize o jogo mudando o visual dos seus Campeões favoritos com skins.</h3>
            </div>
        </div>
    )
}

export default Champion;