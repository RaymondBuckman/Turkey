import React, { Component } from 'react';


export default class Intro extends Component {
    scrollDown(e){
    e.preventDefault;
        $('html, body').animate({
            scrollTop: $("#down-arrow-dest").offset().top
        }, 3000);
    }
    
    render() {
        return(
        <div>
            <div id="top-of-page" className="intro-1-div scrollmagic-div-fadeout">
                <nav id="top-nav" className="navbar navbar-default visible-lg" role="navigation">
                    <div className="container">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#Geography-1" role="link">Geography</a></li>
                            <li><a href="#sehirler" role="link">Cities</a></li>
                            <li><a href="#Sights-1" role="link">Sights</a></li>
                            <li><a href="#oteleler" role="link">Hotels</a></li>
                            <li><a href="#mutfak" role="link">Cuisine</a></li>
                            <li><a href="#Language-1" role="link">Language</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <h1 id="hos-geldiniz" className="text-left" role="heading">T&#252;rkiye'ye hoş geldiniz!</h1>
                    <h2 id="welcome" className="text-left" role="heading" tabIndex="0">Welcome to Turkey!</h2>
                    <img id="down-arrow" src="https://png.icons8.com/ios/50/ffffff/circled-down-filled.png" alt="jump to geography" onClick={this.scrollDown}></img>
                </div>
            </div>
            <div className="intro-2-div">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-info-squares">
                        <h1 lang="tr" id="bayragi" className="scrollmagic-header">Türk bayrağı</h1>
                        <h2 id="flag" className="scrollmagic-header" tabIndex="0">The Turkish flag</h2>
                        <p>No one is 100% sure about the origins of the Turkish flag. Some say the crescent moon refers to the Byzantine goddess Artemis while others say that it's an Islamic symbol. The star is assumed to have been adopted from the Byzantine empire, where Emporer Constantine decided Istanbul (then Constantinople) to the Virgin Mary. The flag was used during the Ottoman Empire & the proportions were slightly altered when it became a republic on October 29, 1923.</p>
                    </li>
                    <li className="flex-item scrollmagic-info-squares" alt="Turkish Flag">
                    </li>
                    <li className="flex-item scrollmagic-info-squares" alt="Coat of Arms for the Ottoman Empire">
                        <h2>Coat of Arms of the Ottoman Empire</h2>
                    </li>
                    <li className="flex-item scrollmagic-info-squares" alt="Emblem of the Seljuk Turks">
                        <h2>Öksökö - Emblem of the Seljuk Turks</h2>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
