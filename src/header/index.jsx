import React from "react"
import './style.scss'

const Header = () => {
    return (
        <>
            <div className="nav-bar">
                <div style={{marginRight: 40, marginLeft: 20}}>
                    <img style={{ maxWidth: 160, cursor: "pointer" }} src={require('../image/riot-games-logo.png')} alt="" />
                </div>
                <div>
                    <img style={{ maxWidth: 60, cursor: "pointer" }} src={require('../image/logo.png')} alt="" />
                </div>
                <ul>
                    <li>CAPEÕES</li>
                    <li>REGIÕES</li>
                    <li>QUADRINHOS</li>
                    <li>UNIVERSO ALTERNATIVO</li>
                    <li>MAPA</li>
                    <li>EXPLORAR</li>
                </ul>
            </div>
            <div className="container-logo">
                <img src={require('../image/lol-logo.png')} alt="" />
            </div>
        </>
    )
}

export default Header;