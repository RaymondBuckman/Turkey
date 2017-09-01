import React, { Component } from 'react';

export default class Language extends Component {
    render() {
        return(
        <div>
            <div className="Nineteen" id="Nineteen">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Türk Dili</h1>
                        <h2>The Turkish Language</h2>
                        <p>By now you've probably noticed some foreign words with odd looking characters. This is the Turkish language. Linguistically, Turkish is unrelated to English, Spanish, or any romance or germanic language. It has an SOV sentence structure (subjuct -> object -> verb), & is highly agglutinative, meaning that numerous suffixes are added on to words to expand their meaning. The longest word in Turkish has 70 letters with more than 10 suffixes! Dont' worry though...being fluent isn't required for tourists as English is fairly widely spoken in the tourist areas, but some knowledge is still required to get by. Let's get into it!</p>
                    </li>
                    <li className="flex-item"></li>
                    <li className="flex-item">
                        <h2>"Fishing is forbidden in this area"</h2>
                    </li>
                    <li className="flex-item"></li>
                </ul>
            </div>
            <div className="Twenty">            
                <div className="container">
                    <h1 id="alfabe" className="text-left">Alfabe</h1>
                    <h2 id="alphabet" className="text-left">Alphabet</h2> 
                    <h2 className="col-lg-6 col-lg-offset-6 text-right">
                        The Turkish alphabet consists of 29 letters. It was written using an Arabic script until Atatürk (pictured) changed it to a Latin-based alphabet in 1929 as part of his reforms to modernize Turkey after the fall of the Ottoman Empire. 
                    </h2>
                </div>
            </div>
        </div>
        );
    }
}
