import React from "react";
import './style.scss'
import Video from '../image/center-video.mp4'


const Game_Video = () => {

    window.addEventListener('scroll', () => {

        let tela = parseInt(window.scrollY);

        const video = document.getElementById('content');
        const info = document.getElementById('info-content');

        if (tela >= 910) {
            video.style.opacity = 1
        }

        if (tela >= 1497) {
            info.style.opacity = 1
        }

    })

    function AlterBorderColor(event) {
        const dado = document.getElementById('dado')
        if (event == 'red') {
            dado.style.border = 'solid #eb1330d2 2px'
            dado.style.outline = 'solid #eb1330d2 5px'
        } else {
            dado.style.border = 'solid #746e26 2px'
            dado.style.outline = 'solid #746e26 5px'
        }
    }




    return (
        <div className="container-video" >
            <div className="container-video-content" id="content">
                <div className="video" id="dado">
                    <video autoPlay loop muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                <div className="circle" onMouseEnter={() => AlterBorderColor('red')} onMouseLeave={() => AlterBorderColor('default')}></div>
            </div>

            <div className="container-content-play" id="info-content">
                <div className="contaienr-info">
                    <h2>VÁRIAS MANEIRAS DE</h2>
                    <h1>JOGAR</h1>
                </div>
                <div className="contaienr-info">
                    <h2>ESCOLHA SEU</h2>
                    <h1>CAMPEÃO</h1>
                </div>
            </div>
        </div>
    )
}

export default Game_Video;