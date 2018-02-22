import React, { Component } from 'react';


export default class Hotels extends Component {
    render() {
        return(
        <div>
            <div className="hotels-1-div" id="hotels-1-div">                    
                <div className="container">
                    <h1 id="oteleler" className="text-center scrollmagic-header" role="heading">Oteleler</h1>
                    <h2 id="hotels" className="text-center scrollmagic-header" role="heading" tabIndex="0">Hotels</h2> 
                    <h1 id="raffles1" className="text-right scrollmagic-desc">Raffles Hotel, İstanbul</h1>
                    <h2 id="raffles1-desc" className="text-right scrollmagic-desc">Lobby</h2>
                </div>
            </div>            
            <div className="hotels-2-div scrollmagic-div-fadeout">                 
                <div className="container">
                    <h1 id="kayakapi1" className="text-left scrollmagic-desc">Kayakapi Hotel, Ürgüp</h1>
                    <h2 id="kayakapi1-desc" className="text-left scrollmagic-desc">Accomadations</h2>
                </div>
            </div>
            
            <div className="hotels-3-div">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="bir-otel-bulun" className="text-center scrollmagic-header" role="heading">Bir Otel Bulun</h1>
                        <h2 id="find-a-hotel" className="text-center scrollmagic-header" role="heading" tabIndex="0">Find a Hotel</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:0, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Marmara region">
                            <h1>Istanbul Hotels</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Aegean region">
                            <h1>Ege Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Mediterranean region">
                            <h1>Akdeniz Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Central Anatolia region">
                            <h1>İç Anadolu Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Black Sea region">
                            <h1>Karadeniz Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Eastern Anatolia region">
                            <h1>Doğu Anadolu Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:13, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Southeastern Anatolia region">
                            <h1>Güney Doğu Anadolu Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:12, isOpen: true })}>
                        <button type="button" alt="opens gallery for Fun Fact">
                            <h1>Eğlenceli gerçek</h1>
                        </button>
                        <p>Although Gotham City is doesn't exist in real life, Batman does! The photo you just viewed is right outside of Batman, Turkey. The more you know....</p>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
