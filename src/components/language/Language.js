import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import pronounciation from '../../img/alphabet-1.png';
import harmony from '../../img/harmony-1.jpg';
import pronouns from '../../img/pronouns-1.jpg';
import adjectives from '../../img/adjectives-1.jpg';
import accusative from '../../img/turkish-8.jpg';
import possessive from '../../img/possessive-1.jpg';
import questions from '../../img/questions-1.jpg';
import numbers from '../../img/numbers-1.jpg';

const images = [
    pronounciation,
    harmony,
    pronouns,
    adjectives,
    accusative,
    possessive,
    questions,
    numbers,
];

const titles = [
    (<h1 className="carousel-title"> Pronounciation </h1>),
    (<h1 className="carousel-title"> Vowel Harmony </h1>),
    (<h1 className="carousel-title"> Pronouns </h1>),
    (<h1 className="carousel-title"> Adjectives </h1>),
    (<h1 className="carousel-title"> Accusative </h1>),
    (<h1 className="carousel-title"> Possessive </h1>),
    (<h1 className="carousel-title"> Questions </h1>),
    (<h1 className="carousel-title"> Numbers </h1>),
];
     
const captions = [
    "The pronounciation in Turkish is fairly straightforward.  Most letters are pronounced like their English counterparts. The main differences are the 'ç' & 'ş', which are pronounced like 'ch' & 'sh', respectively. Also the letter 'c' is pronounced like the English  'j'. Also there's 'ı', which looks like an i without the dot.  It's pronounced like 'uh',  or the German 'ö'. The last new letter is ğ. It's completely silent & never shows up at the beginning  of a word.",
     
    "There are two groups of vowels in Turkish: the undotted A vowels (A I O U) and the dotted e vowels (E İ Ö Ü). Many Turkish suffixes that are added on to words  have vowels that fall in one of these groups. For example in Turkish to make something plural, you either have add the suffix 'lar' or 'ler' depending on the last vowel in the word. If the last vowel is an undotted A vowel, the plural suffix is 'lar'. For example the word 'at', which means horse, turns into 'atlar' when pluralized. If the last vowel is a dotted E vowel, you use the 'ler' suffix (i.e. 'ev', which means house, becomes 'evler' in plural form).",
     
    "The Basilica Cistern is the largest of several hundred ancient cisterns that lie beneath the city of Istanbul (formerly Constantinople), Turkey. The cistern, located 500 feet southwest of the Hagia Sophia on the historical peninsula of Sarayburnu, was built in the 6th century during the reign of Byzantine Emperor Justinian I.",
     
    "This cathedral-size cistern is an underground chamber approximately 453 ft by 212 ft – about 105,000 sq ft in area – capable of holding 2,800,000 cu ft of water. The ceiling is supported by a forest of 336 marble columns, each 30 ft tall, arranged in 12 rows of 28 columns each spaced 16 ft apart.",
     
    "Cappadocia is a historical region in Central Anatolia, largely in the Nevşehir, Kayseri, Kırşehir, Aksaray, and Niğde Provinces in Turkey. The relief consists of a high plateau over 1000 m in altitude that is pierced by volcanic peaks, with Mount Erciyes (ancient Argaeus) near Kayseri (ancient Caesarea) being the tallest at 3916 m.",
     
    "The earliest record of the name of Cappadocia dates from the late 6th century BC, when it appears in the trilingual inscriptions of two early Achaemenid kings, Darius I and Xerxes, as one of the countries of the Persian Empire. In these lists of countries, the Old Persian name is Haspaduya, which according to some researchers is derived from Iranian Huw-aspa-dahyu- 'the land of beautiful horses'",
     
    "Hagia Sophia was a Greek Orthodox Christian patriarchal basilica (church), later an imperial mosque, and now a museum (Ayasofya Müzesi) in Istanbul, Turkey. The Roman Empire's first Christian Cathedral, from the date of its construction in 537 AD, and until 1453, it served as an Eastern Orthodox cathedral and seat of the Patriarch of Constantinople, except between 1204 and 1261, when it was converted by the Fourth Crusaders to a Roman Catholic cathedral under the Latin Empire. The building was later converted into an Ottoman mosque from 29 May 1453 until 1931. It was then secularized and opened as a museum on 1 February 1935.",
     
    "Famous in particular for its massive dome, it is considered the epitome of Byzantine architecture and is said to have 'changed the history of architecture'. It remained the world's largest cathedral for nearly a thousand years, until Seville Cathedral was completed in 1520.",
];

export default class Language extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 1,
            isOpen: false,
        };
    }
    
    render() {
        const {
            photoIndex,
            isOpen
        } = this.state;
        
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
                    <h2 className="col-lg-8 col-lg-offset-4 text-right">
                        A	B	C	Ç	D	E	F	G	Ğ	H	I	İ	J	K	L	M	N	O	Ö	P	R	S	Ş	T	U	Ü	V	Y	Z
                        <br/><br/>
                        The Turkish alphabet consists of 29 letters. There are 8 vowels (A, E, I, İ, O, Ö, U, Ü) & the rest are consonants. It was written using an Arabic script until Mustafa Kemal Atatürk (pictured) changed it to a Latin-based alphabet in 1929 as part of his reforms to modernize Turkey after the fall of the Ottoman Empire. It's highly phonetic (each letter only makes one sound) & you'll never find large numbers of consonents grouped together.
                        <br/><br/>
                        <a href="https://www.youtube.com/watch?v=TOZ0CwkRtxI" target="_blank">More info</a>
                    </h2>
                </div>
            </div>
            <div className="Twenty-one">            
                <div className="container">
                    <h1 id="cumleler" className="text-center">Temel cümleler</h1>
                    <h2 id="phrases" className="text-center">Basic Phrases</h2> 
                    <h2 className="col-lg-6 col-lg-offset-0 text-left">
                        Merhaba - <span>Hello</span><br/>
                        Güle güle - <span>Bye</span><br/>
                        Evet - <span>Yes</span><br/>
                        Hayır - <span>No</span><br/>                        
                        Nasılsın? - <span>How are you?</span><br/>
                        İyiyim  - <span>I'm fine</span><br/>
                        Teşekkürler - <span>Thanks</span><br/>
                        Birşey değil - <span>You're welcome</span><br/>
                        Lütfen - <span>Please</span><br/>
                        Pardon - <span>Sorry</span><br/>
                        Afedersiniz - <span>Excuse me</span><br/>
                        Bu otele nerede? - <span>Where is this hotel?</span><br/>
                        İngilizce biliyor musunuz? - <span>Do you speak English?</span><br/>
                        Ne kedar? - <span>How much does it cost?</span><br/>
                        Yardım edebilir misiniz? - <span>Can you help me?</span><br/>
                    </h2>
                </div>
            </div>
            <div className="Twenty-two">
                 <ul className="flex-container">
                    <li className="flex-item" >
                        <h1 id="konular">Diğer Konular</h1>
                        <h2 id="topics">Other Topics</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:0, isOpen: true,  })}>
                        <h2>Pronounciation</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:1, isOpen: true })}>
                        <h2>Vowel Harmony</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:2, isOpen: true })}>
                        <h2>Pronouns</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:3, isOpen: true })}>
                        <h2>Adjectives</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:4, isOpen: true })}>
                        <h2>Accusative</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:5, isOpen: true })}>
                        <h2>Possessive</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:6, isOpen: true })}>
                        <h2>Questions</h2>
                    </li>
                    <li className="flex-item" 
                    onClick={() => this.setState({photoIndex:7, isOpen: true })}>
                        <h2>Numbers</h2>
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
                        
                        imageTitle={titles[this.state.photoIndex]}
                        imageCaption={captions[this.state.photoIndex]}
                    />
                }
            </div>
        </div>
        );
    }
}
