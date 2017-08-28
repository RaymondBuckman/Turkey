import React, { Component } from 'react';


export default class Hotels extends Component {
    render() {
        return(
        <div>
            <div className="Twelve">            
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
            {/*<ul className="flex-container">
                    <li className="flex-item">
                        <h1>Türk bayrağı</h1>
                        <h2>The Turkish flag</h2>
                        <p>No one is 100% sure about the origins of the Turkish flag. Some say the crescent moon refers to the Byzantine goddess Artemis while others say that it's an Islamic symbol. The star is assumed to have been adopted from the Byzantine empire, where Emporer Constantine decided Istanbul (then Constantinople) to the Virgin Mary. The flag was used during the Ottoman Empire & the proportions were slightly altered when it became a republic on October 29, 1923.</p>
                    </li>
                    <li className="flex-item">
                        
                    </li>
                    <li className="flex-item">
                        <h2>House of the Virgin Mary</h2>
                    </li>
                    <li className="flex-item"> 
                        <h1>Öksökö</h1>
                        <h2>Symbol from Tuskish Mythology</h2>
                    </li>
                </ul>         */}   
            </div>
        </div>
        );
    }
}
