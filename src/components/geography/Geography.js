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
                <div className="container">
            
                    <h1 className="text-center">Coğrafya</h1>
                    <h2 className="text-center">Geography</h2> 

                    <h1 className="text-right">Lake Uzungöl, Trabzon</h1>
                </div>
            </div>
            <div className="Four">
                <div className="Four-inner">
                    <div className="container">
                            <h1 className="text-center">Dünyanın merkezi</h1>
                            <h2 className="text-center">The Center of the World</h2>
                            <p className="col-xs-12 text-center">Ranging from the Southeastern Balkans to Southwest Caucasus, Turkey sits at the junction of Europe & Asia, with its largest city Istanbul, straddling the Bosphorus straight. The country is almost 1000 miles long & contains a plethora of various landscapes & climates. The coastal regions of Antalya & Izmir to the mountains Black sea region  & the  </p>  
                    </div>        
                </div>
            </div>
        </div>
        );
    }
}

export default Geography;
