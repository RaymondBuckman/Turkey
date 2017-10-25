import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import crescentstar from '../../img/crescent-star.png';

export default class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul id="sidebar">
                <li><a href="#top-of-page" alt="jump to the top of the page"><img src={crescentstar} height="25px" data-tip data-for="crescent-star-tooltip"></img></a></li>
                <li><a href="#Three" role="link"><img src="https://png.icons8.com/mountain/ios7/25" width="25" height="25" data-tip data-for="geography-tooltip"></img></a></li>
                <li><a href="#sehirler" role="link"><img src="https://png.icons8.com/city/ios7/25" width="25" height="25" data-tip data-for="cities-tooltip"></img></a></li>
                <li><a href="#Eleven" role="link"><img src="https://png.icons8.com/mosque/ios7/25" width="25" height="25" data-tip data-for="sights-tooltip"></img></a></li>
                <li><a href="#oteleler" role="link"><img src="https://png.icons8.com/bed/ios7/25" width="25" height="25" data-tip data-for="hotels-tooltip"></img></a></li>
                <li><a href="#mutfak" role="link"><img src="https://png.icons8.com/food-and-wine/ios7/25" width="25" height="25" data-tip data-for="cuisine-tooltip"></img></a></li>
                <li><a href="#Nineteen" role="link"><img src="https://png.icons8.com/communication-skill/ios7/25" width="25" height="25" data-tip data-for="language-tooltip"></img></a></li>
            </ul>
            <ReactTooltip id="crescent-star-tooltip" place="right" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Top of Page</span></span>
            </ReactTooltip>
            <ReactTooltip id="geography-tooltip" place="left" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Geography</span></span>
            </ReactTooltip>
            <ReactTooltip id="cities-tooltip" place="left" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Cities</span></span>
            </ReactTooltip>
            <ReactTooltip id="sights-tooltip" place="left" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Sights</span></span>
            </ReactTooltip>
            <ReactTooltip id="hotels-tooltip" place="left" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Hotels</span></span>
            </ReactTooltip>
            <ReactTooltip id="cuisine-tooltip" place="left" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Cuisine</span></span>
            </ReactTooltip>
            <ReactTooltip id="language-tooltip" place="left" type="light" effect="solid" delayShow={100}>
                <span className="tooltip-span"><span className="tooltip-text">Language</span></span>
            </ReactTooltip>
        </div>
        );
    }
}
