const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
//import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Geography from'./components/geography/Geography';
import Cities from'./components/cities/Cities';
import $ from "jquery";

ReactDOM.render(
    <div className="App" data-spy="scroll"
        data-target=".navbar-default" data-offset="450">
            <Intro />
            <Geography />
            <Cities />
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
            'opacity': 1 - Math.pow((wScroll/1950),20)
        })
        
        $('.Three').css({
            'background-position':  '50% ' + (50 + wScroll/45) + '%',
            'opacity': 1 - Math.pow((wScroll/2700),20)
        })
        
        $('.Six-inner-4').css({
            'opacity': 1 - Math.pow((wScroll/5600),100)
        })
        
        $('.Six-inner-3').css({
            'opacity': 1 - Math.pow((wScroll/6200),100)
        })
        
        $('.Six-inner-2').css({
            'opacity': 1 - Math.pow((wScroll/6800),100)
        })
        
        $('.Six-inner-1').css({
            'opacity': 1 - Math.pow((wScroll/7400),100)
        })
        
        
        
        /*if(wScroll > 1500){
            $('.App').css({
                'background':  'url(/"/img/ataturk-1.jpg/") no-repeat fixed center'
            })
        }*/
    }
})