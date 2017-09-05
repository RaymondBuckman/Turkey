import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return(
        <div>
            <div className="Twenty-three">
                <div className="container">
                    <h1 id="yolculuk" className="text-left">İyi Yolculuk!</h1>
                    <h2 id="voyage" className="text-left">Bon voyage!</h2>
                </div>
                <nav className="navbar navbar-default visible-lg" data-spy="affix" role="navigation">
                        <div className="container">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="http://www.historyworld.net/wrldhis/PlainTextHistories.asp?historyid=ac94" target="_blank">History</a></li>
                                <li><a href="http://www.turkishlanguage.co.uk/" target="_blank">Detailed Language Info</a></li>
                                <li><a href="http://www.turkishculture.org/" target="_blank">Culture</a></li>
                                <li><a href="#top-of-page">Jump to Top</a></li>
                            </ul>
                        </div>
                </nav>
            </div>
        </div>
        );
    }
}
