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
     "The oceanfront area of İzmir, a popular cruise destination in Western Turkey. İzmir has almost 4,000 years of recorded urban history and even longer as an advanced human settlement. Lying on an advantageous location at the head of a gulf running down in a deep indentation, midway on the western Anatolian coast, it has been one of the principal mercantile cities of the Mediterranean Sea for much of its history.",
     "The main marian in Çeşme. This city, which is around an hour away from Izmir by car, is less than a stone's throw away from the Greek island of Chios. This is not unsual, as many Greek islands in the Aegean sea are closer to Turkey than Athens.",
     "The Mediterranean region of Turkey is famous for its seemingly endless beaches. It is bordered by the Aegean Region to the west, the Central Anatolia Region to the north, the Eastern Anatolia Region to the northeast, the Southeastern Anatolia Region to the east, Syria to the southeast, and the Mediterranean Sea to the south.",
     "Göynük Canyon (pictured above) is in Antalya Province, in southwestern Turkey. The 2.8 mile long canyon is located inside the Beydağları Coastal National Park & is an important part of the long distance trail Lycian Way. There are waterfalls and ponds inside the canyon. It offers outdoor recreational activities such as hiking and trekking on a daily base. By April 2009, touristic facilities were opened in the canyon, which provide security equipment, guidance service and food.",
     "Cappadocia lies in central Anatolia, the Asian part of Turkey. The relief consists of a high plateau over 1000 m in altitude that is pierced by volcanic peaks, with Mount Erciyes near Kayseri being the tallest at 12847 ft. The boundaries of historical Cappadocia are vague, particularly towards the west. To the south, the Taurus Mountains form the boundary with Cilicia and separate Cappadocia from the Mediterranean Sea. To the west, Cappadocia is bounded by the historical regions of Lycaonia to the southwest, and Galatia to the northwest. Due to its inland location and high altitude, Cappadocia has a markedly continental climate, with hot dry summers and cold snowy winters. Rainfall is sparse and the region is largely semi-arid.",
     "Ürgüp is a town and district of Nevşehir Province in the Central Anatolia region of Turkey. It is located in the historical region of Cappadocia, and near the cave Churches of Göreme. According to 2010 census, the population of the district is 34,372 of which 18,631 live in the town of Ürgüp. The district covers an area of 217 sq mi and the town lies at an average elevation of 3,422 ft. Cappadocia is one of Turkey’s largest wine-producing regions, with Urgup as its capital. Uphill from Hotel Surban, the renowned Turasan Winery supplies 60% of Cappadocia’s wines and offers free tours and tastings in its rock-carved wine cellar.",
     "The Black Sea region's population was 8,439,213 in 2010. Approximately ~4,100,000 people live in cities and ~4,300,000 people in villages. This makes it the only one of the seven regions of Turkey in which more people live in the countryside than urban areas.",
     "Artvin (pictured) is an attractive area of steep valleys carved by the Çoruh River system, surrounded by high mountains of Kaçkar, Karçal and Yalnızçam (up to 12795 ft) and forest with much national parkland including the Karagöl-Sahara, which contains the Şavşat and Borçka lakes. The weather in Artvin is very wet and mild at the coast, and as a result is heavily forested. This greenery runs from the top all the way down to the Black Sea coast. The rain turns to snow at higher altitudes, and the peaks are very cold in winter. The forests are home to brown bears and wolves.",
     "Lake Van ('Van Gölü' in Turkish), the largest lake in Turkey, lies in the far east of that country in the provinces of Van and Bitlis. It is a saline soda lake, receiving water from numerous small streams that descend from the surrounding mountains. Lake Van is one of the world's largest endorheic lakes (having no outlet) - a volcanic eruption blocked the original outlet from the basin in ancient times. Although Lake Van has an altitude of 5,380 ft in a region with harsh winters, its high salinity prevents most of it from freezing, and even the shallow northern section freezes only rarely.",
     "Mount Ararat ('Ağrı Dağı' in Turkish) is a snow-capped and dormant compound volcano in the extreme east of Turkey. It consists of two major volcanic cones: Greater Ararat, the highest peak in Turkey and the Armenian plateau with an elevation 16,854 ft; and Little Ararat, with an elevation of 12,782 ft. Despite the scholarly consensus that the 'mountains of Ararat' of the Book of Genesis do not refer to specifically Mt. Ararat, it has been widely accepted in Christianity as the resting place of Noah's Ark. It is the principal national symbol of Armenia and has been considered a sacred mountain by Armenians.",
     "Hasankeyf is an ancient town and district located along the Tigris River in the Batman Province in southeastern Turkey. It was declared a natural conservation area by Turkey in 1981. n Roman times, Hasankeyf (known as Kepha, Cephe, Cepha or Ciphas) was a base for legionaries on the frontier with the Sasanian Empire of Persia.",
     "Mount Judi (or 'Cudi Dağı' in Turkish) according to very Early Christian and Islamic tradition (based on the Qur'an, Hud:44), is Noah's apobaterion or 'Place of Descent', the actual location where the Ark came to rest after the Great Flood. The Quranic tradition is similar to the Judeo-Christian legend. The identification of Mount Judi as the landing site of the ark persisted in Syriac and Armenian tradition throughout Late Antiquity but was abandoned for the tradition equating the biblical location with the highest mountain of the region, Mount Ararat. Jewish Babylonian, Syriac, and Islamic traditions identify Mount Judi or Qardu as a peak near the town of Jazirat ibn Umar (modern Cizre), at the headwaters of the Tigris, near the modern Syrian–Turkish border.",    
];

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
            <div className="Geography-1" id="Geography-1">   
                <div className="Geography-1-inner scrollmagic-inner-fadeout">
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
            <div className="Geography-2 scrollmagic-div-fadeout">
                <div className="Geography-2-inner scrollmagic-inner-fadeout">
                    <div className="container">
                            <h1 id="merkezi" className="text-center scrollmagic-header" role="heading">Dünyanın merkezi</h1>
                            <h2 id="center" className="text-center scrollmagic-header" role="heading" tabIndex="0">The Center of the World</h2>
                            <p id="ranging" className="col-xs-12 text-center scrollmagic-desc">Ranging from the Southeastern Balkans to the mountainous southern Caucasus in the east, Turkey sits at the junction of Europe & Asia. Turkey is both geographically & historically the center of the world. You'll find its fog-covered economic & historical center Istanbul in the Northwest, Antalya & its California-like surroundings in the Southwest, the mountainous Black Sea Region in the NorthEast with scenery resembling Lord of the Rings, &  the Kurdish region bordering Iran to the Southeast. In the center rests the capital Ankara along with the incredible & other-worldly Cappadocia region to the South.</p>  
                    </div>        
                </div>
                <h1 id="ataturk" className="text-right">Mustafa Kemal Atatürk</h1>
                <h2 id="founder" className="text-right">Founder of the Republic of Turkey</h2> 
            </div>
            <div className="Geography-3">
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
                    onClick={() => this.setState({photoIndex:13, isOpen: true })}>
                        <div className="map" alt="Map of turkey with region highlighted"></div>
                        <button type="button" alt="opens gallery for Southeastern Anatolia region">
                            <h1>Güney Doğu Anadolu Bölgesi</h1>
                            <h2>Southeastern Anatolia region</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" 
                    onClick={() => this.setState({photoIndex:12, isOpen: true })}>
                        <button type="button" alt="opens gallery for Fun Fact">
                            <h1>Eğlenceli gerçek</h1>
                            <h2>Fun Fact</h2>
                        </button>
                        <p>Although Gotham City is doesn't exist in real life, Batman does! The photo you just viewed is right outside of Batman, Turkey. The more you know....</p>
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
