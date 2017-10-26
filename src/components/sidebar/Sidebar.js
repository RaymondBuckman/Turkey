import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import crescentstar from '../../img/crescent-star.png';

export default class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul id="sidebar">
                <li><a href="#top-of-page" alt="jump to the top of the page"><img src="https://png.icons8.com/moon-star-filled/ios7/75" height="25px" data-tip data-for="crescent-star-tooltip"></img></a></li>
                <li><a href="#cografya" role="link"><img src="https://png.icons8.com/mountain-filled/ios7/75"  width="25" height="25" data-tip data-for="geography-tooltip"></img></a></li>
                <li><a href="#sehirler" role="link"><img src="https://png.icons8.com/city-filled/ios7/75" width="25" height="25" data-tip data-for="cities-tooltip"></img></a></li>
                <li><a href="#Eleven" role="link"><img src="https://png.icons8.com/tourist-guide-filled/ios7/75" width="25" height="25" data-tip data-for="sights-tooltip"></img></a></li>
                <li><a href="#oteleler" role="link"><img src="https://png.icons8.com/bed-filled/ios7/75" width="25" height="25" data-tip data-for="hotels-tooltip"></img></a></li>
                <li><a href="#mutfak" role="link"><img src="https://png.icons8.com/food-and-wine-filled/ios7/75" width="25" height="25" data-tip data-for="cuisine-tooltip"></img></a></li>
                <li><a href="#Nineteen" role="link"><img src="https://png.icons8.com/communication-filled/ios7/75" width="25" height="25" data-tip data-for="language-tooltip"></img></a></li>
            </ul>
            <ReactTooltip id="crescent-star-tooltip" place="right" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Top of Page<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
            <ReactTooltip id="geography-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Geography<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
            <ReactTooltip id="cities-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Cities<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
            <ReactTooltip id="sights-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Sights<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
            <ReactTooltip id="hotels-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Hotels<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
            <ReactTooltip id="cuisine-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Cuisine<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
            <ReactTooltip id="language-tooltip" place="left" type="light" effect="solid" delayShow={100} offset={{left: 15}}>
                <span className="tooltip-span">Language<span className="tooltip-arrow">&nbsp;&nbsp;&#8594;</span></span>
            </ReactTooltip>
        </div>
        );
    }
}
