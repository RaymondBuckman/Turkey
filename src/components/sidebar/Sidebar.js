import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import crescentstar from '../../img/crescent-star.png';

export default class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul id="sidebar">
                <li>
                    <a href="#top-of-page" role="link">
                        <img src="https://png.icons8.com/moon-star-filled/ios7/75/FFFFFF" height="25px" alt="go to the top of the page" data-tip data-for="crescent-star-tooltip"></img>
                    </a>
                </li>
                <li>
                    <a href="#cografya" role="link">
                        <img src="https://png.icons8.com/mountain-filled/ios7/75/FFFFFF"  width="25" height="25" alt="go to geography" data-tip data-for="geography-tooltip"></img>
                    </a>
                </li>
                <li>
                    <a href="#sehirler" role="link">
                        <img src="https://png.icons8.com/city-filled/ios7/75/FFFFFF" width="25" height="25" alt="go to cities" alt="go to the top of the page" data-tip data-for="cities-tooltip"></img>
                    </a>
                </li>
                <li>
                    <a href="#sights-1-div" role="link">
                        <img src="https://png.icons8.com/tourist-guide-filled/ios7/75/FFFFFF" width="25" height="25" alt="go to sights" data-tip data-for="sights-tooltip"></img>
                    </a>
                </li>
                <li>
                    <a href="#oteleler" role="link">
                        <img src="https://png.icons8.com/bed-filled/ios7/75/FFFFFF" width="25" height="25" alt="go to hotels" data-tip data-for="hotels-tooltip"></img>
                    </a>
                </li>
                <li>
                    <a href="#mutfak" role="link">
                        <img src="https://png.icons8.com/food-and-wine-filled/ios7/75/FFFFFF" width="25" height="25" alt="go to cuisine" data-tip data-for="cuisine-tooltip"></img>
                    </a>
                </li>
                <li>
                    <a href="#language-1-div" role="link">
                        <img src="https://png.icons8.com/communication-filled/ios7/75/FFFFFF" width="25" height="25" alt="go to language" data-tip data-for="language-tooltip"></img>
                    </a>
                </li>
            </ul>
            <ReactTooltip id="crescent-star-tooltip" place="right" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to top</span>
            </ReactTooltip>
            <ReactTooltip id="geography-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to geography</span>
            </ReactTooltip>
            <ReactTooltip id="cities-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to cities</span>
            </ReactTooltip>
            <ReactTooltip id="sights-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to sights</span>
            </ReactTooltip>
            <ReactTooltip id="hotels-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to hotels</span>
            </ReactTooltip>
            <ReactTooltip id="cuisine-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to cuisine</span>
            </ReactTooltip>
            <ReactTooltip id="language-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Go to language</span>
            </ReactTooltip>
        </div>
        );
    }
}
