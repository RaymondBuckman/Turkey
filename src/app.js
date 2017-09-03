const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro/Intro';
import Geography from './components/geography/Geography';
import Cities from './components/cities/Cities';
import Sights from './components/sights/Sights';
import Hotels from './components/hotels/Hotels';
import Cuisine from './components/cuisine/Cuisine';
import Language from './components/language/Language';
import Footer from './components/footer/Footer';

ReactDOM.render(
    <div className="App">
            <Intro />
            <Geography />
            <Cities />
            <Sights /> 
            <Hotels />
            <Cuisine />
            <Language />
            <Footer />
    </div>,
    document.getElementById('root')
);

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    var largeDesktop = window.matchMedia( "(min-width: 0px)" );
     
    
    if(largeDesktop.matches){
        /*if(wScroll > 0){
            document.getElementById("title").innerHTML = "Welcome to Turkey!";
        }*/
        
        if(wScroll > 100) {
            $('#arrow-group > img:nth-child(1)').css({
                'transform': 'rotateY(90deg)'
            })

            $('#arrow-group > img:nth-child(2)').css({
                'transform': 'rotateY(90deg)'
            })

            $('#arrow-group > img:nth-child(3)').css({
                'transform': 'rotateY(90deg)'
            })
        }   
        
        
        $('.One-inner').css({
            //'background-position':  '50% ' + (50 - wScroll/10) + '%',
            'filter': 'grayscale(' + (wScroll/1.5) + '%',
            'opacity': 1 - Math.pow((wScroll/200), 4)
        })
        
        $('.One').css({
            //'background-position':  '50% ' + (50 - wScroll/10) + '%',
            'opacity': 1 - Math.pow((wScroll/900), 8)
        })
        
        /*
        $('.Two').css({
            'opacity': Math.pow((wScroll/300),10)
        })*/
        
        $('.Three-inner').css({
            'background-position':  '50% ' + (50 + wScroll/45) + '%',
            'opacity': 1 - Math.pow((wScroll/2100),20)
        })
        
        $('.Three').css({
            'background-position':  '50% ' + (50 + wScroll/45) + '%',
            'opacity': 1 - Math.pow((wScroll/2650),70)
        })
        
        $('#ataturk').css({
            'opacity': Math.pow((wScroll/3000),200)
        })
        
        $('#founder').css({
            'opacity': Math.pow((wScroll/3000),200)
        })
        
        $('.Four').css({
            'background-position':  '50% ' + (50 + -wScroll/90) + '%'
        })
        
        $('.Four-inner-1').css({
            'opacity': 1 - Math.pow((wScroll/3000),80)
        })
        
        $('.Twelve-inner').css({
            'opacity': 1 - Math.pow((wScroll/13600),180)
        })
        
        $('.Twelve').css({
            'opacity': 1 - Math.pow((wScroll/15700),20)
        })
        
        $('.Thirteen-inner').css({
            'opacity': 1 - Math.pow((wScroll/14800),250)
        })
        
        $('.Thirteen').css({
            'opacity': 1 - Math.pow((wScroll/15600),250)
        })
        
        $('.Fourteen > .flex-container > .flex-item:nth-child(1)').on('click', function(){
           window.location = "https://www.trivago.com/istanbul-32123/hotel"; 
        });
        
        $('.Fourteen > .flex-container > .flex-item:nth-child(2)').on('click', function(){
           window.location = "https://www.trivago.com/izmir-32103/hotel"; 
        });
        
        $('.Fourteen > .flex-container > .flex-item:nth-child(3)').on('click', function(){
           window.location = "https://www.trivago.com/antalya-32134/hotel"; 
        });
        
        $('.Fourteen > .flex-container > .flex-item:nth-child(4)').on('click', function(){
           window.location = "https://www.trivago.com/ankara-32205/hotel"; 
        });
        
        $('.Fourteen .flex-item:nth-child(5)').on('click', function(){
           window.location = "https://www.trivago.com/nevsehir-509044/hotel"; 
        });
        
        $('.Fourteen .flex-item:nth-child(6)').on('click', function(){
           window.location = "https://www.trivago.com/trabzon-32190/hotel/novotel-trabzon-950093"; 
        });
        
        $('.Fourteen .flex-item:nth-child(7)').on('click', function(){
           window.location = "https://www.trivago.com/bursa-509192/hotel"; 
        });
        
        $('.Fourteen .flex-item:nth-child(8)').on('click', function(){
           window.location = "https://www.trivago.com/konya-509022/hotel"; 
        });
        
        $('.Fifteen-inner').css({
            'opacity': 1 - Math.pow((wScroll/16900),400)
        })
        
        $('.Fifteen').css({
            'opacity': 1 - Math.pow((wScroll/17700),400)
        })
        
        $('.Seventeen-inner').css({
            'opacity': 1 - Math.pow((wScroll/18800),400)
        })
        
        $('.Eighteen-inner').css({
            'opacity': 1 - Math.pow((wScroll/20100),400)
        })
        
        $('.Eighteen').css({
            'opacity': 1 - Math.pow((wScroll/21000),400)
        })
        
        $('.Twenty-one').css({
            'opacity': 1 - Math.pow((wScroll/23400),400)
        })
    }
})
