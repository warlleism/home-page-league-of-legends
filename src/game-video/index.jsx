import React from "react";
import './style.scss'
import Video from '../image/center-video.mp4'


const Game_Video = () => {

    window.addEventListener('scroll', () => {

        let tela = parseInt(window.scrollY);

        const video = document.getElementById('content');
        const info = document.getElementById('info-content');

        if (tela >= 1000) {
            video.style.opacity = 1
        }

        if (tela >= 1697) {
            info.style.opacity = 1
        }

    })

    return (
        <div className="container-video" >
            <div className="shadow"></div>
            <img className="backgound-image" src={require('../image/rift.jpg')} alt="" />
            <div className="container-video-content" id="content">
                <div className="video" id="dado">
                    <video autoPlay loop muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                <div className="circle"></div>
            </div>

            <div className="container-content-play" id="info-content">
                <div className="contaienr-info">
                    <h2>VÁRIAS MANEIRAS DE</h2>
                    <h1>JOGAR</h1>
                </div>
                <div className="contaienr-info" >
                    <h2 style={{marginLeft: "-130px"}}>ESCOLHA SEU</h2>
                    <h1 style={{marginLeft: "-130px"}}>CAMPEÃO</h1>
                </div>
            </div>
        </div>
    )
}

export default Game_Video;