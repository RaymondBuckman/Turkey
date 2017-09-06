import React, { Component } from 'react';


export default class Intro extends Component {
    render() {
        return(
        <div>
            <div id="top-of-page" className="One">
                <div className="One-inner">
                    <nav id="top-nav" className="navbar navbar-default visible-lg" data-spy="affix" role="navigation">
                        <div className="container">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#Three">Geography</a></li>
                                <li><a href="#sehirler">Cities</a></li>
                                <li><a href="#Eleven">Sights</a></li>
                                <li><a href="#oteleler">Hotels</a></li>
                                <li><a href="#mutfak">Cuisine</a></li>
                                <li><a href="#Nineteen">Language</a></li>
                            </ul>
                        </div>
                    </nav>
                    <h1 id="hos-geldiniz" className="text-center">T&#252;rkiye'ye hoş geldiniz!</h1>
                    <h2 id="welcome" className="text-center">Welcome to Turkey!</h2>
                </div>
            </div>
            <div className="Two" id="arrow-dest">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="bayragi">Türk bayrağı</h1>
                        <h2 id="flag">The Turkish flag</h2>
                        <p>No one is 100% sure about the origins of the Turkish flag. Some say the crescent moon refers to the Byzantine goddess Artemis while others say that it's an Islamic symbol. The star is assumed to have been adopted from the Byzantine empire, where Emporer Constantine decided Istanbul (then Constantinople) to the Virgin Mary. The flag was used during the Ottoman Empire & the proportions were slightly altered when it became a republic on October 29, 1923.</p>
                    </li>
                    <li className="flex-item"></li>
                    <li className="flex-item">
                        <h2>House of the Virgin Mary</h2>
                    </li>
                    <li className="flex-item"></li>
                </ul>
            </div>
        </div>
        );
    }
}
