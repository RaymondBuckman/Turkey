import React, { Component } from 'react';


export default class Cuisine extends Component {
    render() {
        return(
        <div>
            <div className="Fifteen scrollmagic-div-fadeout" id="Fifteen">     
                <div className="Fifteen-inner scrollmagic-inner-fadeout">            <div className="container">
                        <h1 id="mutfak" className="text-center scrollmagic-header">Mutfak</h1>
                        <h2 id="cuisine" className="text-center scrollmagic-header">Cuisine</h2>
                        <div className="col-lg-6 col-lg-offset-6 text-right">
                            <h1 id="meze" className="text-right scrollmagic-desc">Turkish Meze</h1>
                            <p id="meze-desc" className="scrollmagic-desc">Turkish Meze consists of a wide variety of small plates & can be treated like an appitizer. Common meze dishes include sliced melon, strained yogurt with herbs, eggplant salad, and fried calamari.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-6 text-left">
                        <h1 id="doner" className="scrollmagic-desc">Döner Kebab</h1>
                        <p id="doner-desc" className="scrollmagic-desc">The poster boy of Turkish cuisine, the döner kebab is a world-famous Turkish kebab usually consisting of lamb cooked on a vertical rotisserie.</p>
                    </div>
                </div>
            </div>
            <div className="Sixteen">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-info-squares">
                        <h1 id="yemegi" className="scrollmagic-header">Türk yemeği</h1>
                        <h2 id="food" className="scrollmagic-header">Turkish food</h2>
                        <p>They say the history of a country can be seen in its food, & Turkish food is certainly no exception. The Greeks, Persians, Arabs, & other groups have all left their mark to form what is one of the most unique yet familiar cuisines in the world. A meal in Turkey can consist of anything from kebabs with massive swaths of meat to stuffed vegetables. Popular beverages are Turkish tea & rakı, a clear alcoholic drink from in the Balkans. Turkish delight & baklava are Turkey's most famous desserts. Dig in!</p>
                    </li>
                    <li className="flex-item scrollmagic-info-squares">
                        <h2 className="scrollmagic-desc">Baklava</h2>
                    </li>
                    <li className="flex-item scrollmagic-info-squares">
                        <h2 className="scrollmagic-desc">Adana Kebab</h2>
                    </li>
                    <li className="flex-item scrollmagic-info-squares"> 
                        <h2 className="scrollmagic-desc">Rakı</h2>
                    </li>
                </ul>
            </div>
            <div className="Seventeen">            
                <div className="Seventeen-inner scrollmagic-inner-fadeout">    
                    <div className="container"> 
                        <div className="col-lg-6 col-lg-offset-6 text-right"> 
                            <h1 id="delight" className="scrollmagic-desc">Turkish Delight</h1>   
                            <p id="delight-desc" className="scrollmagic-desc">Turkish delight, or 'lokum' in Turkish, is a variety of desserts made from sugar and gel. You can find a plethora of different flavors including pistachio, walnut & cinnamon.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-6 text-left">
                        <h1 id="dolma" className="scrollmagic-desc">Dolma</h1>
                        <p id="dolma-desc" className="scrollmagic-desc">Dolma is a family of stuffed vegetable dishes that can be found all over the Balkans, Middle East, & Central Asia. Common vegetables to stuff include tomato, pepper, onion, zucchini, eggplant, and garlic.</p>
                    </div>
                </div>
            </div>
            <div className="Eighteen scrollmagic-div-fadeout">           
                <div className="Eighteen-inner scrollmagic-inner-fadeout">          <div className="container"> 
                        <div className="col-lg-6 col-lg-offset-6 text-right"> 
                            <h1 id="simit" className="scrollmagic-desc">Simit</h1>   
                            <p id="simit-desc" className="scrollmagic-desc">Simit is a circular bread with sesame seeds & is the Turkish equivalent of a bagel. Its texture, size, & sweetness varies by region.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-lg-6 text-left">
                        <h1 id="kokorec" className="scrollmagic-desc">Kokoreç</h1>
                        <p id="kokorec-desc" className="scrollmagic-desc">Kokoreç is a dish consisting of lamb or goat intestines wrapped around either seasoned meat or bread. In Turkey it's served mostly as fast-food.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
