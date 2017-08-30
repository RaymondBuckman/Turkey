import React, { Component } from 'react';
import Lightbox from 'lightbox-react';


export default class Cuisine extends Component {
    render() {
        return(
        <div>
            <div className="Fifteen">            
                <div className="Fifteen-inner">            
                    <div className="container">
                        <h1 id="mutfak" className="text-center">Mutfak</h1>
                        <h2 id="cuisine" className="text-center">Cuisine</h2> 
                        <h1 className="text-right">Turkish Meze</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="doner" className="text-left">Doner Kebab</h1>
                </div>
            </div>
            <div className="Sixteen">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Türk yemeği</h1>
                        <h2>Turkish food</h2>
                        <p>They say the history of a country can be seen in its food, & Turkish food is certainly no exception. The Greeks, Persians, Arabs, & other groups have all left their mark to form what is one of the most unique yet familiar cuisine in the world. A meal in Turkey can consist of anything from kebabs with massive swaths of meat to stuffed vegetables (Dolma). Popular beverages are Turkish tea & rakı, a clear alcoholic drink from in the Balkans. Turkish delight & baklava are Turkey's most famous desserts. Dig in!</p>
                    </li>
                    <li className="flex-item">
                        <h2>Baklava</h2>
                    </li>
                    <li className="flex-item">
                        <h2>Adana Kebab</h2>
                    </li>
                    <li className="flex-item"> 
                        <h2>Rakı</h2>
                    </li>
                </ul>
            </div>
            <div className="Seventeen">            
                <div className="Seventeen-inner">            
                    <div className="container"> 
                        <h1 className="text-right">Turkish Delight</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="dolma" className="text-left">Dolma</h1>
                </div>
            </div>
            <div className="Eightteen">
            </div>
        </div>
        );
    }
}
