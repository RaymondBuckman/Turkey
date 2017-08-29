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
            <ul className="flex-container">
                    <a  href="https://www.trivago.com/istanbul-32123/hotel"><li className="flex-item">
                        <h2>İstanbul Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/izmir-32103/hotel"><li className="flex-item">
                        <h2>İzmir Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/antalya-32134/hotel"><li className="flex-item">
                        <h2>Antalya Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/ankara-32205/hotel"><li className="flex-item">
                        <h2>Ankara Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/nevsehir-509044/hotel"><li className="flex-item">
                        <h2>Cappadocia Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/trabzon-32190/hotel/novotel-trabzon-950093"><li className="flex-item">
                        <h2>Trabzon Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/bursa-509192/hotel"><li className="flex-item">
                        <h2>Bursa Hotels</h2>
                    </li></a>
                    <a  href="https://www.trivago.com/konya-509022/hotel"><li className="flex-item">
                        <h2>Konya Hotels</h2>
                    </li></a>
                </ul>           
            </div>
        </div>
        );
    }
}
