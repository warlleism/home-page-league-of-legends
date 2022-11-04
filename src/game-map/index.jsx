import React from "react";
import './style.scss'

const Map = () => {
    window.addEventListener('scroll', () => {

        let tela = parseInt(window.scrollY);

        const video = document.getElementById('conteudo');
        const content_info = document.getElementById('conteudo-info');

        if (tela >= 2198) {
            video.style.opacity = 1
            setTimeout(() => {
                content_info.style.opacity = 1
            }, 1000)
        }
    })

    return (
        <div className="container-map">

            <div className="container-map" id="conteudo">
                <img src={require('../image/rift-map.png')} alt="" />
            </div>

            <div className="container-content" id="conteudo-info">
                <h2>COMECE SUA</h2>
                <h1>LENDA</h1>
                <h3>Acabou de chegar ao LoL? Temos um resumo do básico do modo de jogo mais jogado.</h3>
            </div>

        </div>
    )
}

export default Map;