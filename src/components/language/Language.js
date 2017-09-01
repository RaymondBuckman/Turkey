import React, { Component } from 'react';

export default class Language extends Component {
    render() {
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
                        The Turkish alphabet consists of 29 letters. There are 8 vowels (A, E, I, İ, O, Ö, U, Ü) & the rest are consonants. It was written using an Arabic script until Atatürk (pictured) changed it to a Latin-based alphabet in 1929 as part of his reforms to modernize Turkey after the fall of the Ottoman Empire. It's highly phonetic (each letter only makes one sound) & you'll never find large numbers of consonents grouped together.
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
        </div>
        );
    }
}
