import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import marmara1 from '../../img/marmara-1.jpg';
import marmara2 from '../../img/marmara-2.jpg';
import aegean1 from '../../img/aegean-1.jpg';
import aegean2 from '../../img/aegean-2.jpg';
import mediterranean1 from '../../img/mediterranean-1.jpg';
import mediterranean2 from '../../img/mediterranean-2.jpg';
import central1 from '../../img/central-1.jpg';
import central2 from '../../img/central-2.jpg';
import blacksea1 from '../../img/black-sea-2.jpg';
import blacksea2 from '../../img/black-sea-3.jpg';
import eastern1 from '../../img/eastern-2.jpg';
import eastern2 from '../../img/eastern-1.jpg';
import southeastern1 from '../../img/southeastern-1.jpg';
import southeastern2 from '../../img/southeastern-3.jpg';


 
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
            <div className="Three">            
                <div className="Three-inner">            
                    <div className="container">
                        <h1 id="cografya" className="text-center">Coğrafya</h1>
                        <h2 id="geography" className="text-center">Geography</h2> 
                        <h1 className="text-right">Lake Uzungöl, Trabzon</h1>
                    </div>
                </div>
                <div className="container">
                    <h1 id="cappadocia" className="text-left">Cappadocia</h1>
                </div>
            </div>
            <div className="Four">
                <div className="Four-inner-1">
                    <div className="container">
                            <h1 id="dunyanin" className="text-center">Dünyanın merkezi</h1>
                            <h2 id="center" className="text-center">The Center of the World</h2>
                            <p id="ranging" className="col-xs-12 text-center">Ranging from the Southeastern Balkans to the mountainous southern Caucasus in the east, Turkey sits at the junction of Europe & Asia. Turkey is both geographically & history the center of the world. You'll find its fog-covered economic & historical center Istanbul in the Northwest, Antalya & its California-like surroundings in the Southwest, the mountainous Black Sea Region in the NorthEast with scenery resembling Lord of the Rings, &  the Kurdish region bordering Iran to the Southeast. In the center rests the capital Ankara along with the incredible & other-worldly Cappadocia region to the South. No other country on Earth is a geographically blessed as Turkey.</p>  
                    </div>        
                </div>
                <h1 id="ataturk" className="text-right">Mustafa Kemal Atatürk</h1>
                <h2 id="founder" className="text-right">Founder of the Republic of Turkey</h2> 
            </div>
            <div className="Five">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Türkiye'nın Bölgeleri</h1>
                        <h2>Regions of Turkey</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:0, isOpen: true })}>
                        <div className="map"></div>
                        <h1>Marmara Bölgesi</h1>
                        <h2>Marmara region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <div className="map"></div>
                        <h1>Ege Bölgesi</h1>
                        <h2>Aegean region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <div className="map"></div>
                        <h1>Akdeniz Bölgesi</h1>
                        <h2>Mediterranean region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <div className="map"></div>
                        <h1>İç Anadolu Bölgesi</h1>
                        <h2>Central Anatolia region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <div className="map"></div>
                        <h1>Karadeniz Bölgesi</h1>
                        <h2>Black sea region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <div className="map"></div>
                        <h1>Doğu Anadolu Bölgesi</h1>
                        <h2>Eastern Anatolia Region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:12, isOpen: true })}>
                        <div className="map"></div>
                        <h1>Güney Doğu Anadolu Bölgesi</h1>
                        <h2>Southeastern Anatolia region</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:13, isOpen: true })}>
                        <h1>Eğlenceli gerçek</h1>
                        <h2>Fun Fact</h2>
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
                    />
                }
        </div>
        );
    }
}
