import React, { Component } from 'react';


class Exterior extends Component {
    render() {
        return(
        <div>
            <div className="Seven" id="Exterior">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Pure Adrenaline</h1><br/>
                        <p><b>As the newest addition to the M lineup, nothing defines the legacy of legendary performance better than the first-ever BMW M2 Coupe.</b> With four decades of high performance in its DNA, it continues to push the limits even further – delivering a perfected formula of chassis balance, steering response, and power-to-weight ratio. In short, it’s everything that makes BMW the Ultimate Driving Machine.</p>
                    </li>
                    <li className="flex-item">
                        <p><span>7:58</span> N&#252;rburgring Time</p>
                        <p><span>4.1</span> &#160;&#160;0-60 mph (in seconds)</p>
                        <p><span>365</span>&#160; horsepower</p>
                    </li>
                </ul>  
            </div>
            <div className="Seven-blurred">
                <ul className="flex-container">
                    <li className="flex-item">Kidney grille with and M2 designation</li>
                    <li className="flex-item">M rear spoiler</li>
                    <li className="flex-item">Center-aligned Quad Exhaust Pipes</li>
                    <li className="flex-item">M side gill with M2 badging</li>
                    <li className="flex-item">4 Paint Options (incl. Long Beach Metallic)</li>
                    <li className="flex-item">Double Spoke forged alloy wheels</li>
                    <li className="flex-item">Shadowline Exterior Trim</li>
                    <li className="flex-item">M Specific front & rear bumpers</li>
                    <li className="flex-item">Blue Brake Calipers</li>
                    <li className="flex-item">Extra Wide Rear Fenders</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Exterior;