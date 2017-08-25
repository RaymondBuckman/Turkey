import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import grand1 from '../../img/grand-bazaar-2.jpg';
import grand2 from '../../img/grand-bazaar-3.jpg';
import basilica1 from '../../img/basilica-cistern-1.jpg';
import basilica2 from '../../img/basilica-cistern-4.jpg';
import cappadocia1 from '../../img/cappadocia-3.jpg';
import cappadocia2 from '../../img/cappadocia-4.jpg';
import hagia1 from '../../img/hagia-sophia-2.jpg';
import hagia2 from '../../img/hagia-sophia-3.jpg';
import library1 from '../../img/library-of-celsus-1.jpg';
import library2 from '../../img/library-of-celsus-2.jpg';
import chora1 from '../../img/chora-church-1.jpg';
import chora2 from '../../img/chora-church-2.jpg';
import dolmabahce1 from '../../img/dolmabahce-1.jpg';
import dolmabahce2 from '../../img/dolmabahce-3.jpg';
import miniaturk1 from '../../img/miniaturk-1.jpg';
import miniaturk2 from '../../img/miniaturk-2.jpg';
import nemrut1 from '../../img/nemrut-1.jpg';
import nemrut2 from '../../img/nemrut-2.jpg';
import pamukkale1 from '../../img/pamukkale-2.jpg';
import pamukkale2 from '../../img/pamukkale-3.jpg';
import sumela1 from '../../img/sumela-monastery-2.jpg';
import sumela2 from '../../img/sumela-monastery-3.jpg';
import anitkabir1 from '../../img/anitkabir-1.jpg';
import anitkabir2 from '../../img/anitkabir-2.jpg';
import blue1 from '../../img/blue-mosque-1.jpg';
import blue2 from '../../img/blue-mosque-2.jpg';
import temple1 from '../../img/temple-of-artemis-1.jpg';
import temple2 from '../../img/temple-of-artemis-2.jpg';
import bodrum1 from '../../img/bodrum-castle-1.jpg';
import bodrum2 from '../../img/bodrum-castle-2.jpg';
import mary1 from '../../img/virgin-mary-house-2.jpg';
import mary2 from '../../img/virgin-mary-house-1.jpg';
import duden1 from '../../img/duden-1.jpg';
import duden2 from '../../img/duden-2.jpg';
import gulhane1 from '../../img/gulhane-1.jpg';
import gulhane2 from '../../img/gulhane-2.jpg';
import topkapi1 from '../../img/topkapi-1.jpg';
import topkapi2 from '../../img/topkapi-2.jpg';
import uzungol1 from '../../img/uzungol-2.jpg';
import uzungol2 from '../../img/uzungol-3.jpg';
import mevlana1 from '../../img/mevlana-1.jpg';
import mevlana2 from '../../img/mevlana-2.jpg';
import taksim1 from '../../img/taksim-3.jpg';
import taksim2 from '../../img/taksim-1.jpg';
import maiden1 from '../../img/maidens-tower-2.jpg';
import maiden2 from '../../img/maidens-tower-1.jpg';
import aspendos1 from '../../img/aspendos-1.jpg';
import aspendosl2 from '../../img/aspendos-2.jpg';



 
const images = [
    grand1,
    grand2,
    basilica1,
    basilica2,
    cappadocia1,
    cappadocia2,
    hagia1,
    hagia2,
    library1,
    library2,
    chora1,
    chora2,
    dolmabahce1,
    dolmabahce2,
    miniaturk1,
    miniaturk2,
    nemrut1,
    nemrut2,
    pamukkale1,
    pamukkale2,
    sumela1,
    sumela2,
    anitkabir1,
    anitkabir2,
    blue1,
    blue2,
    temple1,
    temple2,
    bodrum1,
    bodrum2,
    mary1,
    mary2,
    duden1,
    duden2,
    gulhane1,
    gulhane2,
    topkapi1,
    topkapi2,
    uzungol1,
    uzungol2,
    mevlana1,
    mevlana2,
    taksim1,
    taksim2,
    maiden1,
    maiden2,
    aspendos1,
    aspendosl2,    
];
 
export default class Sights extends Component {
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
 
        return (
            <div className="Eleven">
                 <ul className="flex-container">
                    <li className="flex-item" >
                        <h1>Manzaralar</h1>
                        <h2>Sights</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:0, isOpen: true })}>
                        <h2>Grand Bazaar</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <h2>Basilica Cistern</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <h2>Cappadocia</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <h2>Hagia Sophia</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <h2>Library of Celsus</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <h2>Chora Church</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:12, isOpen: true })}>
                        <h2>Dolmabahçe</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:14, isOpen: true })}>
                        <h2>Miniatürk</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:16, isOpen: true })}>
                        <h2>Nemrut</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:18, isOpen: true })}>
                        <h2>Pamukkale</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:20, isOpen: true })}>
                        <h2>Sumela Monastery</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:22, isOpen: true })}>
                        <h2>Anıtkabir</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:24, isOpen: true })}>
                        <h2>Blue Mosque</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:26, isOpen: true })}>
                        <h2>Temple of Artemis</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:28, isOpen: true })}>
                        <h2>Bodrum Castle</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:30, isOpen: true })}>
                        <h2>House of the Virgin Mary</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:32, isOpen: true })}>
                        <h2>Düden Waterfalls</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:34, isOpen: true })}>
                        <h2>Gülhane Park</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:36, isOpen: true })}>
                        <h2>Topkapı Palace</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:38, isOpen: true })}>
                        <h2>Uzungöl</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:40, isOpen: true })}>
                        <h2>Mevlana Museum</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:42, isOpen: true })}>
                        <h2>Taksim Square</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:44, isOpen: true })}>
                        <h2>Maiden's Tower</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:46, isOpen: true })}>
                        <h2>Aspendos</h2>
                    </li>
                </ul>
 
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
                    />
                }
            </div>
        );
    }
}

