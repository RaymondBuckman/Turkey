const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Geography from './components/geography/Geography';
import Cities from './components/cities/Cities';
import Sights from './components/sights/Sights';
import Hotels from './components/hotels/Hotels'

ReactDOM.render(
    <div className="App">
            <Intro />
            <Geography />
            <Cities />
            <Sights /> 
            <Hotels />
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
            'opacity': 1 - Math.pow((wScroll/800), 8)
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
            'opacity': 1 - Math.pow((wScroll/2700),20)
        })
        
        $('.Four').css({
            'background-position':  '50% ' + (50 + -wScroll/90) + '%'
        })
        
        $('.Four-inner-1').css({
            'opacity': 1 - Math.pow((wScroll/3000),80)
        })
        
        $('.Twelve-inner').css({
            'opacity': 1 - Math.pow((wScroll/13300),180)
        })
        
        $('.Twelve').css({
            'opacity': 1 - Math.pow((wScroll/15700),20)
        })
        /*
        $('.Six-inner-4').css({
            'opacity': 1 - Math.pow((wScroll/6100),100)
        })
    
        $('.Eight').css({
            'opacity': 1 - Math.pow((wScroll/7000),100)
        })
        
        $('.Ten').css({
            'opacity': 1 - Math.pow((wScroll/7900),100)
        })
        
        
        
        if(wScroll > 1500){
            $('.App').css({
                'background':  'url(/"/img/ataturk-1.jpg/") no-repeat fixed center'
            })
        }*/
    }
})