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
                        <h1 className="text-right">Raffles, İstanbul</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="raffles-pool" className="text-left">Raffles Pool & Spa</h1>
                </div>
            </div>
        </div>
        );
    }
}
