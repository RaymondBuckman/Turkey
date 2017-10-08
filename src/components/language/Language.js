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
     
    "There are two groups of vowels in Turkish: the undotted A vowels (A I O U) and the dotted e vowels (E İ Ö Ü). Many Turkish suffixes that are added on to words  have vowels that fall in one of these groups. For example in Turkish to make something plural, you either have add the suffix 'lar' or 'ler' depending on the last vowel in the word. If the last vowel is an undotted A vowel, the plural suffix is 'lar'. For example the word 'at', which means horse, turns into 'atlar' when pluralized. If the last vowel is a dotted E vowel, you use the 'ler' suffix (i.e. 'ev', which means house, becomes 'evler' in plural form). Choosing between these two categories is called 2-way vowel harmony. There's also 4-way vowel harmony, but that will be  discussed later.",
     
    "There are six personal pronouns in Turkish: Ben - I, Sen - You, O - he/she/it, Biz - We, Siz - You(plural/formal), Onlar - they. These are their forms as the subject (or 'önze') of the sentence. Unlike romance languages there isn't any gender in Turkish, so only 'O' replaces the English 3rd person singular words he & she. Also, like Spanish, these personal pronounces (in subject form) can be dropped in many cases. View the chart above to view their forms as the obect (nesne), possessive form (sahiplik), reflexive form(yansima) and interest form (ilgi).",
     
    "Here are some useful adjectives (as well as adverbs) to know in Turkish. Keep in mind that in Turkish the adjective comes before the 'a' instead of after like in English. For example, in the English phrase 'a blue car', the adjective 'blue' comes after the word 'a'. In the Turkish equivalent 'mavi bir araba', the word for blue 'mavi' comes before the word for a 'bir. Literally, it's 'blue a car' instead of 'a blue car'. Obviously this takes some getting used to.",
     
    "The accusative case is used when a subject is applying an action to an object. The suffix for the accussative tense is (y)İ, the 'y' being only for words ending in a vowel & the İ representing the vowel harmony letter. This is where 4-way vowel harmony comes in. In the simplest possible terms, if the last vowel ends in an i or e, it becomes i. Likewise ı or a becomes ı,  u or o becomes u, and ü or ö becomes ü. For example in the sentence 'Sen çorbayı içiyorsun' (which means 'You're drinking the soup'), the words for soup 'çorba' gets a yı suffix because 'soup' is the direct object. In the sentence 'İstanbul'u seviyorlar' ('They love Istanbul' in English), İstanbul receives a u suffix because its last vowel is a u. This takes a lot of practice & it some cases the last constanent will change too." ,
     
    "Unfortunately, memorizing the possessive (sahiplik) column in the chart several slides ago isn't enough to express ownership in Turkish. The object being possessed also needs a suffix. In the example above, you can see the different forms of the word 'ev' (house) depending on whose house it is. 'My house' would be 'Benim evim' (or just 'evim' for short). For a more complex example, the word for orange (the fruit) is 'portakal'. If you wanted to say 'our oranges', you'd say 'bizim portakallarız' (or 'portakallarız'). Broken down, it's portakal + lar (plural 2-way vowel harmony) + ız (possessive 4-way vowel harmony). You can imagine how complicated this can get with 5 or more suffixes added on.",
     
    "Some useful question words for beginners.",
     
    "Although the vocabulary is different, the way numbers combine grammatically to form larger numbers is identical to English.",
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
                    <li className="flex-item scrollmagic-info-squares">
                        <h1 id="dili" className="scrollmagic-header" role="heading">Türk Dili</h1>
                        <h2 id="language" className="scrollmagic-header" role="heading">The Turkish Language</h2>
                        <p>By now you've probably noticed some foreign words with odd looking characters. This is the Turkish language. Linguistically, Turkish is unrelated to English, Spanish, or any romance or germanic language. It has an SOV sentence structure (subjuct -> object -> verb), & is highly agglutinative, meaning that numerous suffixes are added on to words to expand their meaning. The longest word in Turkish has 70 letters with more than 10 suffixes! Don't worry though...words like this aren't used in daily speech & being fluent isn't required for tourists as English is fairly widely spoken in the tourist areas. Still, knowing a little Turkish goes a long way!</p>
                    </li>
                    <li alt="Book in turkish" className="flex-item scrollmagic-info-squares"></li>
                    <li alt="fishing sign in turkish" className="flex-item scrollmagic-info-squares">
                        <h2>"Fishing is forbidden in this area"</h2>
                    </li>
                    <li alt="Airport signs in turkish" className="flex-item scrollmagic-info-squares"></li>
                </ul>
            </div>
            <div className="Twenty">            
                <div className="container">
                    <h1 id="alfabe" className="text-left scrollmagic-header" role="heading">Alfabe</h1>
                    <h2 id="alphabet" className="text-left scrollmagic-header" role="heading">Alphabet</h2> 
                    <h2 className="col-lg-8 col-lg-offset-4 text-right scrollmagic-desc">
                        A	B	C	Ç	D	E	F	G	Ğ	H	I	İ	J	K	L	M	N	O	Ö	P	R	S	Ş	T	U	Ü	V	Y	Z
                        <br/><br/>
                        The Turkish alphabet consists of 29 letters. There are 8 vowels (a, e, ı, i, o, ö, u, ü) & the rest are consonants. It was written using an Arabic script until Mustafa Kemal Atatürk (pictured) changed it to a Latin-based alphabet in 1929 as part of his reforms to modernize Turkey after the fall of the Ottoman Empire. Most of the letters will be familiar to English speakers, except for 6: ç, ş, ğ, ı , ö, & ü. Some letters are also pronouced differently. 
                        <br/><br/>
                        <a href="https://www.youtube.com/watch?v=TOZ0CwkRtxI" target="_blank" role="link"
                        aria-label="watch a video with more info about the turkish alphabet">More info</a>
                    </h2>
                </div>
            </div>
            <div className="Twenty-one scrollmagic-div-fadeout">            
                <div className="container">
                    <h1 id="cumleler" className="text-center scrollmagic-header" role="heading">Temel Cümleler</h1>
                    <h2 id="phrases" className="text-center scrollmagic-header" role="heading">Basic Phrases</h2> 
                    
                    <ul className="col-lg-12 col-lg-offset-0 text-left">
                        <li className="scrollmagic-vocab">Merhaba <span id="pronunciation">(mayor-ha-bah)</span>  - <span id="translation">Hello</span></li>
                        
                        <li className="scrollmagic-vocab">Güle güle <span id="pronunciation">(goo-lay-goo-lay)</span> - <span id="translation">Bye</span></li>
                        
                        <li className="scrollmagic-vocab">Evet <span id="pronunciation">(eh-vet)</span> - <span id="translation">Yes</span></li>
                        
                        <li className="scrollmagic-vocab">Hayır <span id="pronunciation">(hire)</span> - <span id="translation">No</span></li> 
    
                        <li className="scrollmagic-vocab">Nasılsın? <span id="pronunciation">(na-sul-sun)</span> - <span id="translation">How are you?</span></li>
                        
                        <li className="scrollmagic-vocab">İyiyim  <span id="pronunciation">(ee-yee-yim)</span> - <span id="translation">I'm fine</span></li>
                        
                        <li className="scrollmagic-vocab">Teşekkürler <span id="pronunciation">(te-shek-kur-lair)</span> - <span id="translation">Thanks</span></li>
                        
                        <li className="scrollmagic-vocab">Birşey değil <span id="pronunciation">(beer-shay-dee-ill)</span> - <span id="translation">You're welcome</span></li>
                        
                        <li className="scrollmagic-vocab">Lütfen <span id="pronunciation">(loot-fen)</span> - <span id="translation">Please</span></li>
                        
                        <li className="scrollmagic-vocab">Pardon <span id="pronunciation">(par-don)</span> - <span id="translation">Sorry</span></li>
                        
                        <li className="scrollmagic-vocab">Afedersiniz <span id="pronunciation">(ah-fair-dare-sin-is)</span> - <span id="translation">Excuse me</span></li>
                        
                        <li className="scrollmagic-vocab">Bu otele nerede? <span id="pronunciation">(bu-oh-tell-ay-nair-ray-day)</span> - <span id="translation">Where is this hotel?</span></li>
                        
                        <li className="scrollmagic-vocab">İngilizce biliyor musunuz? <span id="pronunciation">(en-gi-leez-jay-bill-ee-yor-moo-soo-nooz)</span> - <span id="translation">Do you speak English?</span></li>
                        
                        <li className="scrollmagic-vocab">Ne kedar? <span id="pronunciation">(nay-ka-dar)</span> - <span id="translation">How much does it cost?</span></li>
                        
                        <li className="scrollmagic-vocab">Yardım edebilir misiniz? <span id="pronunciation">(yar-dumb-edd-ay-bill-ear-mih-sin-is)</span> - <span id="translation">Can you help me?</span></li>
                    </ul>
                </div>
            </div>
            <div className="Twenty-two">
                 <ul className="flex-container">
                    <li className="flex-item" >
                        <h1 id="konular" className="scrollmagic-header">Diğer Konular</h1>
                        <h2 id="topics" className="scrollmagic-header">Other Topics</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:0, isOpen: true})}>
                        <button type="button" alt="opens gallery for Pronunciation">
                            <h2>Pronunciation</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:1, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Vowel Harmony">
                            <h2>Vowel Harmony</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:2, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Pronouns">
                            <h2>Pronouns</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:2, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Adjectives">
                            <h2>Adjectives</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:4, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Accusative">
                            <h2>Accusative</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:5, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Possessive">
                            <h2>Possessive</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:6, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Questions">
                            <h2>Questions</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:7, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Numbers">
                            <h2>Numbers</h2>
                        </button>
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
