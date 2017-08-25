import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import grand from '../../img/grand-bazaar-3.jpg';
import basilica from '../../img/basilica-cistern-1.jpg';
import cappadocia from '../../img/cappadocia-3.jpg';
import hagia from '../../img/hagia-sophia-2.jpg';
import library from '../../img/library-of-celsus-1.jpg';
import chora from '../../img/chora-church-1.jpg';
import dolmabahce from '../../img/dolmabahce-1.jpg';
import miniaturk from '../../img/miniaturk-1.jpg';
import nemrut from '../../img/nemrut-1.jpg';
import pamukkale from '../../img/pamukkale-2.jpg';
import sumela from '../../img/sumela-monastery-1.jpg';
import anitkabir from '../../img/anitkabir-1.jpg';
import blue from '../../img/blue-mosque-1.jpg';
import temple from '../../img/temple-of-artemis-1.jpg';
import bodrum from '../../img/bodrum-castle-1.jpg';
import mary from '../../img/virgin-mary-house-2.jpg';



 
const images = [
    grand,
    basilica,
    cappadocia,
    hagia,
    library,
    chora,
    dolmabahce,
    miniaturk,
    nemrut,
    pamukkale,
    sumela,
    anitkabir,
    blue,
    temple,
    bodrum,
    mary
    
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
                    onClick={() => this.setState({photoIndex:1, isOpen: true })}>
                        <h2>Basilica Cistern</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <h2>Cappadocia</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:3, isOpen: true })}>
                        <h2>Hagia Sophia</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <h2>Library of Celsus</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:5, isOpen: true })}>
                        <h2>Chora Church</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <h2>Dolmabahçe</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:7, isOpen: true })}>
                        <h2>Miniatürk</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <h2>Nemrut</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:9, isOpen: true })}>
                        <h2>Pamukkale</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <h2>Sumela Monastery</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:11, isOpen: true })}>
                        <h2>Anıtkabir</h2>
                    </li>
                         <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:8, isOpen: true })}>
                        <h2>Blue Mosque</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:9, isOpen: true })}>
                        <h2>Temple of Artemis</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:10, isOpen: true })}>
                        <h2>Bodrum Castle</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:11, isOpen: true })}>
                        <h2>House of the Virgin Mary</h2>
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

