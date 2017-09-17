import React, { Component } from 'react';


export default class Hotels extends Component {
    render() {
        return(
        <div>
            <div className="Twelve" id="Twelve">            
                <div className="Twelve-inner">            
                    <div className="container">
                        <h1 id="oteleler" className="text-center scrollmagic-header">Oteleler</h1>
                        <h2 id="hotels" className="text-center scrollmagic-header">Hotels</h2> 
                        <h1 id="raffles1" className="text-right scrollmagic-desc">Raffles Hotel, İstanbul</h1>
                        <h2 id="raffles1-desc" className="text-right scrollmagic-desc">Lobby</h2>
                    </div>
                </div>
                <div className="container">
                    <h1 id="raffles2" className="text-left scrollmagic-desc">Raffles Hotel, İstanbul</h1>
                    <h2 id="raffles2-desc" className="text-left scrollmagic-desc">Pool & Spa</h2>
                </div>
            </div>
            
            <div className="Thirteen scrollmagic-div-fadeout">           
                <div className="Thirteen-inner">            
                    <div className="container">
                        <h1 id="kayakapi1" className="text-right scrollmagic-desc">Kayakapi Hotel, Ürgüp</h1>
                        <h2 id="kayakapi1-desc" className="text-right scrollmagic-desc">Accomadations</h2>
                    </div>
                </div>
                <div className="container">
                    <h1 id="kayakapi2" className="text-left scrollmagic-desc">Kayakapi Hotel, Ürgüp</h1>
                    <h2 id="kayakapi2-desc" className="text-left scrollmagic-desc">Pool</h2>
                </div>
            </div>
            
            <div className="Fourteen">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-chevron">
                        <h2>İstanbul Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>İzmir Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>Antalya Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>Ankara Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>Cappadocia Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>Trabzon Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>Bursa Hotels</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <h2>Konya Hotels</h2>
                    </li>
                </ul>           
            </div>
        </div>
        );
    }
}
