import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import marmara1 from '../../img/marmara-1.jpg';
import marmara2 from '../../img/marmara-2.jpg';
import aegean1 from '../../img/aegean-1.jpg';
import aegean2 from '../../img/aegean-3.jpg';
import mediterranean1 from '../../img/mediterranean-1.jpg';
import mediterranean2 from '../../img/mediterranean-3.jpg';
import central1 from '../../img/central-1.jpg';
import central2 from '../../img/central-3.jpg';
import blacksea1 from '../../img/black-sea-3.jpg';
import blacksea2 from '../../img/black-sea-1.jpg';
import eastern1 from '../../img/eastern-2.jpg';
import eastern2 from '../../img/eastern-1.jpg';
import southeastern1 from '../../img/southeastern-5.jpg';
import southeastern2 from '../../img/southeastern-4.jpg';


 
const images = [
    marmara1,
    marmara2,
    aegean1,
    aegean2,
    mediterranean1,
    mediterranean2,
    central1,
    central2,
    blacksea1,
    blacksea2,
    eastern1,
    eastern2,
    southeastern1,
    southeastern2,
];

const titles = [
    (<h1 className="carousel-title"> Marmara Region </h1>),
    (<h1 className="carousel-title"> Marmara Region </h1>),
    (<h1 className="carousel-title"> Aegean Region </h1>),
    (<h1 className="carousel-title"> Aegean Region </h1>),
    (<h1 className="carousel-title"> Mediterranean Region</h1>),
    (<h1 className="carousel-title"> Mediterranean Region </h1>),
    (<h1 className="carousel-title"> Central Anatolia Region </h1>),
    (<h1 className="carousel-title"> Central Anatolia Region </h1>),
    (<h1 className="carousel-title"> Black Sea Region </h1>),
    (<h1 className="carousel-title"> Black Sea Region </h1>),
    (<h1 className="carousel-title"> Eastern Anatolia Region </h1>),
    (<h1 className="carousel-title"> Eastern Anatolia Region </h1>),  
    (<h1 className="carousel-title"> Southeastern Anatolia Region </h1>),
    (<h1 className="carousel-title"> Southeastern Anatolia Region </h1>),
];
     
const captions = [
     "This is the famous Bosphorus strait, the waterway dividing Europe from Asia. The massive city of İstanbul sits along both sides. The bosphorus connects the Sea of Marmara with the Black Sea, giving Georgia, Russia, Ukraine, Romania, & Bulgaria access to the Mediterranean. Rumelihisarı (pictured), or Boğazkesen Castle, is a historical fortress that sits on the European side of İstanbul.",
     "Above is Marmara island, which is located in the middle of the Sea of Marmara. The Marmara lies between the Bosphorus and the narrow Dardanelles straight, which leads to the Aegean Sea.",
     "The oceanfront area of İzmir, the third largest city in Turkey. A popular cruise destination, İzmir has a typical Mediterranean climate with dry, warm summers and cool, rainy winters.",
     "The main marian in Çeşme. This city, which is around an hour away from Izmir by car, is less than a stone's throw away from the Greek island of Chios. This is not unsual, as many Greek islands in the Aegean sea are closer to Turkey than Athens.",
     "The Mediterranean region of Turkey is famous for its seemingly endless beaches. This beach lies just outside Antalya in the Southwest of Turkey.",
     "Göynük Canyon, near Antalya, Turkey",
     "The unique landscape within the Cappadocia region in central Turkey.",
     "Ürgüp is a town and district of Nevşehir Province in the Central Anatolia region of Turkey. It is located in the historical region of Cappadocia, and near the cave Churches of Göreme. According to 2010 census, the population of the district is 34,372 of which 18,631 live in the town of Ürgüp. The district covers an area of 217 sq mi and the town lies at an average elevation of 3,422 ft. Cappadocia is one of Turkey’s largest wine-producing regions, with Urgup as its capital. Uphill from Hotel Surban, the renowned Turasan Winery supplies 60% of Cappadocia’s wines and offers free tours and tastings in its rock-carved wine cellar.",
     "The Black Sea region's population is 8,439,213 based on the 2010 census. 4,137,166 people live in cities and 4,301,747 people in villages. This makes it the only one of the seven regions of Turkey in which more people live in rural rather than urban areas.",
     "Artvin (pictured) is an attractive area of steep valleys carved by the Çoruh River system, surrounded by high mountains of Kaçkar, Karçal and Yalnızçam (up to 12795 ft) and forest with much national parkland including the Karagöl-Sahara, which contains the Şavşat and Borçka lakes. The weather in Artvin is very wet and mild at the coast, and as a result is heavily forested. This greenery runs from the top all the way down to the Black Sea coast. The rain turns to snow at higher altitudes, and the peaks are very cold in winter. The forests are home to brown bears and wolves.",
     "Lake Van ('Van Gölü' in Turkish), the largest lake in Turkey, lies in the far east of that country in the provinces of Van and Bitlis. It is a saline soda lake, receiving water from numerous small streams that descend from the surrounding mountains. Lake Van is one of the world's largest endorheic lakes (having no outlet) - a volcanic eruption blocked the original outlet from the basin in ancient times. Although Lake Van has an altitude of 5,380 ft in a region with harsh winters, its high salinity prevents most of it from freezing, and even the shallow northern section freezes only rarely.",
     "Mount Ararat ('Ağrı Dağı' in Turkish) is a snow-capped and dormant compound volcano in the extreme east of Turkey. It consists of two major volcanic cones: Greater Ararat, the highest peak in Turkey and the Armenian plateau with an elevation 16,854 ft; and Little Ararat, with an elevation of 12,782 ft. Despite the scholarly consensus that the 'mountains of Ararat' of the Book of Genesis do not refer to specifically Mt. Ararat, it has been widely accepted in Christianity as the resting place of Noah's Ark. It is the principal national symbol of Armenia and has been considered a sacred mountain by Armenians.",
     "Batman, Turkey. Yes....you read that correctly!",
     "Balıklıgöl, a religious site in Şanlıurfa, Turkey",    
];

//import Draggable from "gsap/Draggable";


export default class Geography extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 1,
            isOpen: false
        };
    }
 
    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
        
        return(
        <div>
            <div className="Three" id="Three">   
                <div className="Three-inner scrollmagic-inner-fadeout">
                    <div className="container">
                        <h1 id="cografya" className="text-center scrollmagic-header" role="heading">Coğrafya</h1>
                        <h2 id="geography" className="text-center scrollmagic-header" role="heading" tabIndex="0">Geography</h2> 
                        <h1 id="uzungol" className="text-right scrollmagic-desc" >Uzungöl</h1>
                        <h2 id="uzungol-desc" className="text-right scrollmagic-desc">Black Sea Region</h2>
                    </div>
                </div>
                <div className="container">
                    <h1 id="cappadocia" className="text-left scrollmagic-desc">Cappadocia</h1>
                    <h2 id="cappadocia-desc" className="text-left scrollmagic-desc">Central Anatolian Region</h2>
                </div>
            </div>
            <div className="Four scrollmagic-div-fadeout">
                <div className="Four-inner scrollmagic-inner-fadeout">
                    <div className="container">
                            <h1 id="merkezi" className="text-center scrollmagic-header" role="heading">Dünyanın merkezi</h1>
                            <h2 id="center" className="text-center scrollmagic-header" role="heading" tabIndex="0">The Center of the World</h2>
                            <p id="ranging" className="col-xs-12 text-center scrollmagic-desc">Ranging from the Southeastern Balkans to the mountainous southern Caucasus in the east, Turkey sits at the junction of Europe & Asia. Turkey is both geographically & historically the center of the world. You'll find its fog-covered economic & historical center Istanbul in the Northwest, Antalya & its California-like surroundings in the Southwest, the mountainous Black Sea Region in the NorthEast with scenery resembling Lord of the Rings, &  the Kurdish region bordering Iran to the Southeast. In the center rests the capital Ankara along with the incredible & other-worldly Cappadocia region to the South.</p>  
                    </div>        
                </div>
                <h1 id="ataturk" className="text-right">Mustafa Kemal Atatürk</h1>
                <h2 id="founder" className="text-right">Founder of the Republic of Turkey</h2> 
            </div>
            <div className="Five">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="bolgeleri" className="scrollmagic-header" role="heading">Türkiye'nın Bölgeleri</h1>
                        <h2 id="regions" className="scrollmagic-header" role="heading">Regions of Turkey</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:0, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Marmara region">
                            <h1>Marmara Bölgesi</h1>
                            <h2>Marmara region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Aegean region">
                            <h1>Ege Bölgesi</h1>
                            <h2>Aegean region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Mediterranean region">
                            <h1>Akdeniz Bölgesi</h1>
                            <h2>Mediterranean region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Central Anatolia region">
                            <h1>İç Anadolu Bölgesi</h1>
                            <h2>Central Anatolia region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Black Sea region">
                            <h1>Karadeniz Bölgesi</h1>
                            <h2>Black sea region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Eastern Anatolia region">
                            <h1>Doğu Anadolu Bölgesi</h1>
                            <h2>Eastern Anatolia region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:12, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Southeastern Anatolia region">
                            <h1>Güney Doğu Anadolu Bölgesi</h1>
                            <h2>Southeastern Anatolia region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:13, isOpen: true })}>
                        <button type="button" alt="opens gallery for Fun Fact">
                            <h1>Eğlenceli gerçek</h1>
                            <h2>Fun Fact</h2>
                        </button>
                        <p>Although Gotham City is doesn't exist in real life, Batman does! The photo you just viewed in the Southeastern region is of Batman, Turkey. The more you know....</p>
                    </li>
                </ul>
            </div>
            {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                        
                        imageTitle={titles[this.state.photoIndex]}
                        imageCaption={captions[this.state.photoIndex]}
                    />
            }
        </div>
        );
    }
}
