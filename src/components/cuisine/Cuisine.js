import React, { Component } from 'react';


export default class Cuisine extends Component {
    render() {
        return(
        <div>
            <div className="Fifteen" id="Fifteen">            
                <div className="Fifteen-inner">            
                    <div className="container">
                        <h1 id="mutfak" className="text-center">Mutfak</h1>
                        <h2 id="cuisine" className="text-center">Cuisine</h2>
                        <div className="col-lg-6 col-lg-offset-6">
                            <h1 id="meze" className="text-right">Turkish Meze</h1>
                            <p id="meze-desc">The poster boy of Turkish cuisine, the döner kebab is a world-famous Turkish kebab usually consisting of lamb cooked on a vertical rotisserie.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-6 text-left">
                        <h1 id="doner">Döner Kebab</h1>
                        <p id="doner-desc">The poster boy of Turkish cuisine, the döner kebab is a world-famous Turkish kebab usually consisting of lamb cooked on a vertical rotisserie.</p>
                    </div>
                </div>
            </div>
            <div className="Sixteen">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Türk yemeği</h1>
                        <h2>Turkish food</h2>
                        <p>They say the history of a country can be seen in its food, & Turkish food is certainly no exception. The Greeks, Persians, Arabs, & other groups have all left their mark to form what is one of the most unique yet familiar cuisines in the world. A meal in Turkey can consist of anything from kebabs with massive swaths of meat to stuffed vegetables (Dolma). Popular beverages are Turkish tea & rakı, a clear alcoholic drink from in the Balkans. Turkish delight & baklava are Turkey's most famous desserts. Dig in!</p>
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
                        <div className="col-lg-6 col-lg-offset-6 text-right"> 
                            <h1 id="delight">Turkish Delight</h1>   
                            <p id="delight-desc">Turkish delight, or 'lokum' in Turkish, is a variety of desserts made from sugar and gel. You can find a plethora of different flavors including pistachio, walnut & cinnamon.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-6 text-left">
                        <h1 id="dolma">Dolma</h1>
                        <p id="dolma-desc">Dolma is a family of stuffed vegetable dishes that can be found all over the Balkans, Middle East, & Central Asia. Common vegetables to stuff include tomato, pepper, onion, zucchini, eggplant, and garlic.</p>
                    </div>
                </div>
                <div className="container">   
                    
                </div>
            </div>
            <div className="Eighteen">            
                <div className="Eighteen-inner">            
                    <div className="container"> 
                        <div className="col-lg-6 col-lg-offset-6 text-right"> 
                            <h1 id="simit">Simit</h1>   
                            <p id="simit-desc">Simit is a circular bread with sesame seeds & is the Turkish equivalent of a bagel. Its texture, size, & sweetness varies by region.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-6 text-left">
                        <h1 id="kokorec">Kokoreç</h1>
                        <p id="kokorec-desc">Kokoreç is a dish consisting of lamb or goat intestines wrapped around either seasoned meat or bread. In Turkey it's served mostly as fast-food.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
