const css = require('./app.scss');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';




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

/*======================= Begin ScrollMagic Animations =======================*/

/*----- h1/h2 rotations -----*/
$(document).ready(function(){

    var hosGeldiniz = $('#hos-geldiniz');
    var welcome = $('#welcome');
    
    TweenLite.from(hosGeldiniz, 0.7, {delay: 0.5, y: -30, opacity: 0, rotation: -10});
    
    TweenLite.from(welcome, 0.7, {delay: 0.5, y: 30, opacity: 0, rotation: 10});
    
    TweenMax.staggerFrom("#top-nav li", 0.7, { ease:  Power0.easeNone, delay: 1, opacity: 0, y:25, rotation: 10}, 0.15); 
    
    var controller = new ScrollMagic.Controller();
    
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '#top-nav',
        triggerHook: 0,
        duration: '60%'
    })
    .setPin('#top-nav')
    .addTo(controller);
    
    
    var bottomNavTween = TweenMax.staggerFrom("#bottom-nav li", 0.7, { ease:  Power0.easeNone, delay: 0.3, opacity: 0, y:-25, rotation: 10}, 0.15);
    
    var bottomNavScene = new ScrollMagic.Scene({
        triggerElement: '#bottom-nav',
        triggerHook: .95,
        reverse: false
    })
    
    .setTween(bottomNavTween)
    .addIndicators({
        name:"bottom-nav",
        colorTrigger: 'green',
        colorStart: '#FFF'
    })
    .addTo(controller);
    
    /*----- header animations -----*/
    $('.scrollmagic-header').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    
    /*----- div animations -----*/
    $('.scrollmagic').each(function(){
        var divScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'horizontal-fade')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    /*----- description animations -----*/
    
    $('.scrollmagic-desc').each(function(){
        var descScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'horizontal-fade')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    }) 
/*======================= End ScrollMagic Animations =======================*/
});



$(window).scroll(function(){    
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    var largeDesktop = window.matchMedia( "(min-width: 0px)" );
     
    
    if(largeDesktop.matches){ 
        
        $('.One-inner').css({
            'background-position':  '50% ' + (50 + wScroll/45) + '%'
        })
        
        /*
        if(wScroll > 300){
            $('.One').css({
                'background': 'transparent'
            })
        }
        */
        
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
            window.location = ("https://www.trivago.com/konya-509022/hotel");
            
        });
        
        $('.Fifteen-inner').css({
            'opacity': 1 - Math.pow((wScroll/16900),400)
        })
        
        $('.Fifteen').css({
            'opacity': 1 - Math.pow((wScroll/17700),400)
        })
        
        $('.Seventeen-inner').css({
            'opacity': 1 - Math.pow((wScroll/19000),400)
        })
        
        $('.Eighteen-inner').css({
            'opacity': 1 - Math.pow((wScroll/20400),400)
        })
        
        $('.Eighteen').css({
            'opacity': 1 - Math.pow((wScroll/21200),400)
        })
        
        $('.Twenty-one').css({
            'opacity': 1 - Math.pow((wScroll/23700),400)
        })
    }
})
