import React, { Component } from 'react';
import $ from 'jquery';

//import Draggable from "gsap/Draggable";


class Geography extends Component {
    render() {
        return(
        <div>
            <div className="Three">            
                <div className="Three-inner">            
                    <div className="container">
                        <h1 id="cografya" className="text-center">Coğrafya</h1>
                        <h2 id="geography" className="text-center">Geography</h2> 
                        <h1 className="text-right">Lake Uzungöl, Trabzon</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="cappadocia" className="text-left">Cappadocia</h1>
                </div>
            </div>
            <div className="Four">
                <div className="Four-inner-1">
                    <div className="container">
                            <h1 id="dunyanin" className="text-center">Dünyanın merkezi</h1>
                            <h2 id="center" className="text-center">The Center of the World</h2>
                            <p id="ranging" className="col-xs-12 text-center">Ranging from the Southeastern Balkans to the mountainous southern Caucasus in the east, Turkey sits at the junction of Europe & Asia. Turkey is both geographically & history the center of the world. You'll find its fog-covered economic & historical center Istanbul in the Northwest, Antalya & its California-like surroundings in the Southwest, the mountainous Black Sea Region in the NorthEast with scenery resembling Lord of the Rings, &  the Kurdish region bordering Iran to the Southeast. In the center rests the capital Ankara along with the incredible & other-worldly Cappadocia region to the South. No other country on Earth is a geographically blessed as Turkey.</p>  
                    </div>        
                </div>
                <h1 id="ataturk" className="text-right">Mustafa Kemal Atatürk</h1>
                <h2 id="founder" className="text-right">Founder of the Republic of Turkey</h2> 
            </div>
            <div className="Five">
                <ul className="flex-container">
                    <li className="flex-item">
                        <div className="map"></div>
                        <h1>Marmara Bölgesi</h1>
                        <h2>Marmara region</h2>
                    </li>
                    <li className="flex-item">
                        <div className="map"></div>
                        <h1>Ege Bölgesi</h1>
                        <h2>Aegean region</h2>
                    </li>
                    <li className="flex-item">
                        <div className="map"></div>
                        <h1>Akdeniz Bölgesi</h1>
                        <h2>Mediterranean region</h2>
                    </li>
                    <li className="flex-item">
                        <div className="map"></div>
                        <h1>İç Anadolu Bölgesi</h1>
                        <h2>Central Anatolia region</h2>
                    </li>
                    <li className="flex-item"> 
                        <div className="map"></div>
                        <h1>Karadeniz Bölgesi</h1>
                        <h2>Black sea region</h2>
                    </li>
                    <li className="flex-item"> 
                        <div className="map"></div>
                        <h1>Doğu Anadolu Bölgesi</h1>
                        <h2>Eastern Anatolia Region</h2>
                    </li>
                    <li className="flex-item"> 
                        <div className="map"></div>
                        <h1>Güney Doğu Anadolu Bölgesi</h1>
                        <h2>Southeastern Anatolia region</h2>
                    </li>
                    <li className="flex-item"> 
                        <h1>Eğlenceli gerçek</h1>
                        <h2>Fun Fact</h2>
                        <p>Although Gotham City is doesn't exist in real life, Batman does! The photo you just viewed in the Southeastern region is of Batman, Turkey. The more you know....</p>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Geography;
