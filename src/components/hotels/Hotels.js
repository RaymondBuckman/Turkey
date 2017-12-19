import React, { Component } from 'react';


export default class Hotels extends Component {
    render() {
        return(
        <div>
            <div className="Hotels-1" id="Hotels-1">                    
                <div className="container">
                    <h1 id="oteleler" className="text-center scrollmagic-header" role="heading">Oteleler</h1>
                    <h2 id="hotels" className="text-center scrollmagic-header" role="heading" tabIndex="0">Hotels</h2> 
                    <h1 id="raffles1" className="text-right scrollmagic-desc">Raffles Hotel, İstanbul</h1>
                    <h2 id="raffles1-desc" className="text-right scrollmagic-desc">Lobby</h2>
                </div>
            </div>            
            <div className="Hotels-2 scrollmagic-div-fadeout">                 
                <div className="container">
                    <h1 id="kayakapi1" className="text-right scrollmagic-desc">Kayakapi Hotel, Ürgüp</h1>
                    <h2 id="kayakapi1-desc" className="text-right scrollmagic-desc">Accomadations</h2>
                </div>
            </div>
            
            <div className="Hotels-3">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/istanbul-32123/hotel" target="_blank" 
                        aria-label="view more Istanbul hotels on trivago.com" role="link">
                            <h2>İstanbul Hotels</h2>
                        </a>                                
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Izmir hotels on trivago.com" role="link">
                            <h2>İzmir Hotels</h2>
                        </a>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Antalya hotels on trivago.com" role="link">
                            <h2>Antalya Hotels</h2>
                        </a>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Ankara hotels on trivago.com" role="link">
                            <h2>Ankara Hotels</h2>
                        </a>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Cappadocia hotels on trivago.com" role="link">
                            <h2>Cappadocia Hotels</h2>
                        </a>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Trabzon Hotels on trivago.com" role="link">
                            <h2>Trabzon Hotels</h2>
                        </a>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Bursa Hotels on trivago.com" role="link">
                            <h2>Bursa Hotels</h2>
                        </a>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <a href="https://www.trivago.com/izmir-32103/hotel" target="_blank"
                        aria-label="view more Konya Hotels on trivago.com" role="link">
                            <h2>Konya Hotels</h2>
                        </a>
                    </li>
                </ul>           
            </div>
        </div>
        );
    }
}
