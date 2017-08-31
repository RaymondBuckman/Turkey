import React, { Component } from 'react';


export default class Hotels extends Component {
    render() {
        return(
        <div>
            <div className="Twelve" id="Twelve">            
                <div className="Twelve-inner">            
                    <div className="container">
                        <h1 id="oteleler" className="text-center">Oteleler</h1>
                        <h2 id="hotels" className="text-center">Hotels</h2> 
                        <h1 className="text-right">Raffles Hotel, İstanbul</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="raffles-pool" className="text-left">Raffles Pool & Spa</h1>
                </div>
            </div>
            
            <div className="Thirteen">            
                <div className="Thirteen-inner">            
                    <div className="container">
                        <h1 className="text-right">Kayakapi Hotel, Ürgüp</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="kayakapi-pool" className="text-left">Kayakapi Pool & Spa</h1>
                </div>
            </div>
            
            <div className="Fourteen">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h2>İstanbul Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>İzmir Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Antalya Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Ankara Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Cappadocia Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Trabzon Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Bursa Hotels</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Konya Hotels</h2>
                    </li>
                </ul>           
            </div>
        </div>
        );
    }
}
