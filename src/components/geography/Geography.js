import React, { Component } from 'react';
import pamukkale from '../../img/pamukkale.jpg';
import basilica from '../../img/basilica-cistern.JPG';
import sumela from '../../img/sumela-monastery.JPG';
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
                <div className="Four-inner">
                    <div className="container">
                            <h1 className="text-center">Dünyanın merkezi</h1>
                            <h2 className="text-center">The Center of the World</h2>
                            <p className="col-xs-12 text-center">Ranging from the Southeastern Balkans to the mountainous southern Caucasus in the east, Turkey sits at the junction of Europe & Asia. Turkey is both geographically & history the center of the world. You'll find its fog-covered economic & historical center Istanbul in the Northwest, Antalya & its California-like surroundings in the Southwest, the mountainous Black Sea Region in the NorthEast with scenery resembling Lord of the Rings, &  the Kurdish region bordering Iran to the Southeast. In the center rests the capital Ankara along with the incredible & other-worldly Cappadocia region to the South. No other country on Earth is a geographically blessed as Turkey.</p>  
                    </div>        
                </div>
            </div>
            <div className="Five">
            
            </div>
            <div className="Six">
            
            </div>
            <div className="Seven">
            
            </div>
            <div className="Eight">
            
            </div>
        </div>
        );
    }
}

export default Geography;
