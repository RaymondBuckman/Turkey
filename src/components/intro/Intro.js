import React, { Component } from 'react';


export default class Intro extends Component {
    render() {
        return(
        <div>
            <div id="top-of-page" className="One scrollmagic-div-fadeout">
                <div className="One-inner">
                    <nav id="top-nav" className="navbar navbar-default visible-lg" role="navigation">
                        <div className="container">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#Three" role="link">Geography</a></li>
                                <li><a href="#sehirler" role="link">Cities</a></li>
                                <li><a href="#Eleven" role="link">Sights</a></li>
                                <li><a href="#oteleler" role="link">Hotels</a></li>
                                <li><a href="#mutfak" role="link">Cuisine</a></li>
                                <li><a href="#Nineteen" role="link">Language</a></li>
                            </ul>
                        </div>
                    </nav>
                    <h1 id="hos-geldiniz" className="text-center" role="heading">T&#252;rkiye'ye hoş geldiniz!</h1>
                    <h2 id="welcome" className="text-center" role="heading" tabIndex="0">Welcome to Turkey!</h2>
                </div>
            </div>
            <div className="Two" id="arrow-dest">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-info-squares">
                        <h1 id="bayragi" className="scrollmagic-header">Türk bayrağı</h1>
                        <h2 id="flag" className="scrollmagic-header" tabIndex="0">The Turkish flag</h2>
                        <p>No one is 100% sure about the origins of the Turkish flag. Some say the crescent moon refers to the Byzantine goddess Artemis while others say that it's an Islamic symbol. The star is assumed to have been adopted from the Byzantine empire, where Emporer Constantine decided Istanbul (then Constantinople) to the Virgin Mary. The flag was used during the Ottoman Empire & the proportions were slightly altered when it became a republic on October 29, 1923.</p>
                    </li>
                    <li className="flex-item scrollmagic-info-squares" alt="Turkish Flag">
                    </li>
                    <li className="flex-item scrollmagic-info-squares" alt="">
                        <h2>Coat of Arms of the Ottoman Empire</h2>
                    </li>
                    <li className="flex-item scrollmagic-info-squares" alt="">
                        <h2>Öksökö - Emblem of the Seljuk Turks</h2>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
