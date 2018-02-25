import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

var results, latLang, error;

export default class Hotels extends Component {
    constructor(props) {
        super(props)
        this.state = { address: 'San Francisco, CA' }
        this.onChange = (address) => this.setState({ address })
    }

    handleFormSubmit(e) {
        e.preventDefault()

        geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error))
    }
    
    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            //placeholder: 'Search Hotels...',
        }
        
        const shouldFetchSuggestions = ({ value }) => value.length > 3;
        
        return(
        <div>
            <div className="hotels-1-div" id="hotels-1-div">                    
                <div className="container">
                    <h1 id="oteleler" className="text-center scrollmagic-header" role="heading" lang="tr">Oteleler</h1>
                    <h2 id="hotels" className="text-center scrollmagic-header" role="heading" tabIndex="0">Hotels</h2> 
                    <h1 id="raffles1" className="text-right scrollmagic-desc">Raffles Hotel, İstanbul</h1>
                    <h2 id="raffles1-desc" className="text-right scrollmagic-desc">Lobby</h2>
                </div>
            </div>            
            <div className="hotels-2-div scrollmagic-div-fadeout">                 
                <div className="container">
                    <h1 id="kayakapi1" className="text-left scrollmagic-desc">Kayakapi Hotel, Ürgüp</h1>
                    <h2 id="kayakapi1-desc" className="text-left scrollmagic-desc">Accomadations</h2>
                </div>
            </div>
            
            <div className="hotels-3-div">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="bir-otel-bulun" className="text-center scrollmagic-header" role="heading" lang="tr">Bir Otel Bulun</h1>
                        <h2 id="find-a-hotel" className="text-center scrollmagic-header" role="heading" tabIndex="0">Find a Hotel</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <form onSubmit={this.handleFormSubmit}>
                            <PlacesAutocomplete inputProps={inputProps} 
                            shouldFetchSuggestions={shouldFetchSuggestions}
                            />
                            <button type="submit">Submit</button>
                        </form>
                            <h1>Istanbul Hotels</h1>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Aegean region">
                            <h1 lang="tr">Ege Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Mediterranean region">
                            <h1 lang="tr">Akdeniz Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Central Anatolia region">
                            <h1 lang="tr">İç Anadolu Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Black Sea region">
                            <h1 lang="tr">Karadeniz Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Eastern Anatolia region">
                            <h1 lang="tr">Doğu Anadolu Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Southeastern Anatolia region">
                            <h1 lang="tr">Güney Doğu Anadolu Bölgesi</h1>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron">
                        <button type="button" alt="opens gallery for Fun Fact">
                            <h1 lang="tr">Eğlenceli gerçek</h1>
                        </button>
                        <p>Although Gotham City is doesn't exist in real life, Batman does! The photo you just viewed is right outside of Batman, Turkey. The more you know....</p>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
