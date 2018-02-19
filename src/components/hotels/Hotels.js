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
                <div className="container">
                    <h1 id="bir-otel-bulun" className="text-center scrollmagic-header" role="heading">Bir Otel Bulun</h1>
                    <h2 id="find-a-hotel" className="text-center scrollmagic-header" role="heading" tabIndex="0">Find a Hotel</h2>   
                </div>
            </div>
        </div>
        );
    }
}
