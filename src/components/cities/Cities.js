import React, { Component } from 'react';

var CityRow = React.createClass({
  setTime: function(){
      
    var localTime = new Date(); //get your local time
    var utcTime = localTime.getUTCHours(); // find UTC hours
    var currentdate = new Date(); // create a new date object for the EST time
    currentdate.setHours(utcTime+3); // adjust it for EST hours.
      
      
  	var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);    

        // correct for number over 24, and negatives
        if( hours >= 12 ){ hours -= 12; }
        if( hours < 0   ){ hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if( hours.length == 1 ){ hours = "0" + hours; }

        // minutes are the same on every time zone
        var minutes = currentdate.getUTCMinutes();
	  
        // add leading zero, first convert hours to string
        minutes = minutes + "";
        if( minutes.length == 1 ){ minutes = "0" + minutes; }

        var seconds = currentdate.getUTCSeconds();
      
        seconds = seconds + "";
        if( seconds.length == 1 ){ seconds = "0" + seconds; }
      
        this.setState({
      	    hours: hours,
            minutes: minutes,
            seconds: seconds
        });
  },
    
  componentWillMount: function(){
  	this.setTime();
  },
    
  componentDidMount: function(){
  	 window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  },
    
  render: function() {    
    return(
      <div className="city-row" ref="cityRow">
        <span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
      </div>
    )
  }
});


export default class Cities extends Component {
    render() {
        return(
        <div>
            <div className="Six" id="Six"> 
                <h1 id="sehirler" className="text-center scrollmagic-header">En Büyük Şehirler</h1>
                <h2 id="cities" className="text-center scrollmagic-header">Largest Cities</h2> 
                <p id="istanbul-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <span id="istanbul">İstanbul</span><br/>
                    Economic & Cultural Center<br/>
                    Location: Marmara<br/>
                    Population: 14.8 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
            
                <p id="ankara-description" className="col-lg-6 col-lg-offset-0 text-left scrollmagic-desc">
                <span id="ankara">Ankara</span><br/>
                    Capital City<br/>
                    Location: Central Anatolia<br/>
                    Population: 5.3 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
            
                <p id="izmir-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <span id="izmir">İzmir</span><br/>
                    Crusiseline hotspot<br/>
                    Location: Aegean region<br/>
                    Population: 2.8 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
            
                <p id="bursa-description" className="col-lg-6 col-lg-offset-0 text-left scrollmagic-desc">
                    <span id="bursa">Bursa</span><br/>
                    ~300 Year Capital of the Ottoman Empire<br/>
                    Location: Marmara<br/>
                    Population: 2.3 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
            
                <p id="adana-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <span id="adana">Adana</span><br/>
                    Mediterranean Capital<br/>
                    Location: Mediterranean Region<br/>
                    Population: 1.7 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
                    
                <p id="gaziantep-description" className="col-lg-6 col-lg-offset-0 text-left scrollmagic-desc">
                    <span id="gaziantep">Gaziantep</span><br/>
                    One of the oldest continually inhabited cities on earth<br/>
                    Location: Southeastern Anatolia Region<br/>
                    Population: 1.5 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
            
                <p id="konya-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <span id="konya">Gaziantep</span><br/>
                    Former capital of the Seljuk sultanate of Rum<br/>
                    Location: Central Anatolia Region<br/>
                    Population: 1 million<br/>
                    Current time: <CityRow name="CityRow" UTCOffset="5"/>
                </p>
            </div> {/*End of Six*/}
        </div>
        );
    }
}

