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
    
    //Scrollmagic controller
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
    /*
    .addIndicators({
        name:"bottom-nav",
        colorTrigger: 'green',
        colorStart: '#FFF'
    })*/
    .addTo(controller);
    
    /*----- header animations -----*/
    $('.scrollmagic-header').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
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
    
    $('#ataturk').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: '.Four-inner',
            triggerHook: 0.70,
            offset: 700,
            reverse: true
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
    
    $('#founder').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: '.Four-inner',
            triggerHook: 0.70,
            offset: 700,
            reverse: true
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
    
    /* ----- background fadeout scenes  -----*/
    $('.scrollmagic-inner-fadeout').each(function(){
        var chevronScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.55,
            offset: 700,
            reverse: true
        })
        .setClassToggle(this, 'fadeout')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
   
    /*----- div fadeout animations -----*/
    var oneFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.One',
        triggerHook: 0.1,
        offset: 850,
        reverse: true
    })
    .setClassToggle('.One', 'fadeout')
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var fourinnerFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Four-inner',
        triggerHook: 0.70,
        offset: 700,
        reverse: true
    })
    .setClassToggle('.Four-inner', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var fourFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Four',
        triggerHook: 0.1,
        offset: 700,
        reverse: true
    })
    .setClassToggle('.Four', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    
    var tenFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Ten',
        triggerHook: 0.1,
        offset: 850,
        reverse: true
    })
    .setClassToggle('.Ten', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var thirteenFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Thirteen',
        triggerHook: 0.1,
        offset: 1200,
        reverse: true
    })
    .setClassToggle('.Thirteen', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var fifteenFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Fifteen',
        triggerHook: 0.1,
        offset: 1300,
        reverse: true
    })
    .setClassToggle('.Fifteen', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var eighteenFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Eighteen',
        triggerHook: 0.1,
        offset: 1300,
        reverse: true
    })
    .setClassToggle('.Eighteen', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    
    /*----- chevron animations -----*/
    $('.scrollmagic-chevron').each(function(){
        var chevronScene = new ScrollMagic.Scene({
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
    
    /*----- information square animations -----*/
    $('.scrollmagic-info-squares').each(function(){
        var chevronScene = new ScrollMagic.Scene({
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
            triggerHook: 0.86,
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
    
    /*----- vocabulary animations -----*/
    $('.Twenty-one ul li').each(function(){
        var vocabScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.95,
            reverse: false
        })
        .setClassToggle(this, 'vocab-fadein')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    }) 
    
    /* ----Background Scroll animations -----*/
    var largeDesktop = window.matchMedia( "(min-width: 1400px)" );
    
    if(largeDesktop.matches){
        var oneInnerParallaxTween = TweenMax.to(".One-inner", 1, {
          backgroundPositionY: "-=5%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var oneInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".One-inner", 
            triggerHook: 0,
            duration: "100%"
        })
        .setTween(oneInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var threeInnerParallaxTween = TweenMax.to(".Three-inner", 1, {
          backgroundPositionY: "-=5%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var threeInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Three-inner", 
            triggerHook: 1,
            duration: "150%"
        })
        .setTween(threeInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var threeParallaxTween = TweenMax.to(".Three", 1, {
          backgroundPositionY: "-=5%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var threeParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Three", 
            triggerHook: 0.2,
            offset: 500,
            duration: "100%"
        })
        .setTween(threeParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var sixParallaxTween = TweenMax.from(".Six", 1, {
          backgroundSize: "+=100px +=56.2403px", 
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var sixParallaxscene = new ScrollMagic.Scene({
            triggerElement: ".Six", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(sixParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var sevenParallaxTween = TweenMax.to(".Seven", 1, {
          backgroundPositionY: "+=30%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var sevenParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Seven", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(sevenParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var eightParallaxTween = TweenMax.to(".Eight", 1, {
            backgroundPositionY: "-=10%",
            backgroundSize: "+=100px +=66.666667px",
            autoRound:false, 
            ease:Power1.ease0ut
        });

        var eightParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Eight", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(eightParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var nineParallaxTween = TweenMax.from(".Nine", 1, {
            backgroundSize: "+=100px +=56.32124352331606px",
            autoRound:false, 
            ease:Power1.ease0ut
        });

        var nineParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Nine", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(nineParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var tenParallaxTween = TweenMax.from(".Ten", 1, {
          backgroundPositionY: "+=30%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var tenParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Ten", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(tenParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var twelveInnerParallaxTween = TweenMax.to(".Twelve-inner", 1, {
          backgroundPositionY: "+=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var twelveInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Twelve-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(twelveInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var twelveParallaxTween = TweenMax.to(".Twelve", 1, {
          backgroundPositionX: "-=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var twelveParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Twelve", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(twelveParallaxTween)
        //.addIndicators()
        .addTo(controller);

         var thirteenInnerParallaxTween = TweenMax.to(".Thirteen-inner", 1, {
          backgroundPositionY: "-=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var thirteenInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Thirteen-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(thirteenInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var thirteenParallaxTween = TweenMax.from(".Thirteen", 1, {
          backgroundSize: "+=100px +=74.95px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var thirteenParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Thirteen", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(thirteenParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var fifteenInnerParallaxTween = TweenMax.to(".Fifteen-inner", 1, {
          backgroundPositionY: "-=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var fifteenInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Fifteen-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(fifteenInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var fifteenParallaxTween = TweenMax.from(".Fifteen", 1, {
          backgroundSize: "+=80px +=60px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var fifteenParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Fifteen", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(fifteenParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var seventeenInnerParallaxTween = TweenMax.to(".Seventeen-inner", 1, {
          backgroundSize: "+=80px +=60px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var seventeenInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Seventeen-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(seventeenInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var seventeenParallaxTween = TweenMax.from(".Seventeen", 1, {
          backgroundPositionY: "+=10%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var seventeenParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Seventeen", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(seventeenParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var eighteenInnerParallaxTween = TweenMax.to(".Eighteen-inner", 1, {
          backgroundPositionY: "+=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var eighteenInnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Eighteen-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(eighteenInnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var eighteenParallaxTween = TweenMax.to(".Eighteen", 1, {
          backgroundSize: "+=80px +=60px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var eighteenParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Eighteen", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(eighteenParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var twentyParallaxTween = TweenMax.from(".Twenty", 1, {
          backgroundSize: "+=200px +=125px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var twentyParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Twenty", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(twentyParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var twentyThreeParallaxTween = TweenMax.from(".Twenty-three", 1, {
          backgroundPositionY: "+=10%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var twentyThreeParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Twenty-three", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(twentyThreeParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var geldinizTween = TweenMax.to("#hos-geldiniz", 1, {
            x: "+=100px",
            //y: "+100px",
            ease:Power1.ease0ut
        });

        var geldinizScene = new ScrollMagic.Scene({
            triggerElement: "#hos-geldiniz", 
            triggerHook: .7,
            duration: "100%"
        })
        .setTween(geldinizTween)
        //.addIndicators()
        .addTo(controller);

        var welcomeTween = TweenMax.to("#welcome", 1, {
            x: "-=150px",
            //y: "+100px",
            ease:Power1.ease0ut
        });

        var welcomeScene = new ScrollMagic.Scene({
            triggerElement: "#welcome", 
            triggerHook: .7,
            duration: "100%"
        })
        .setTween(welcomeTween)
        //.addIndicators()
        .addTo(controller);
    }
/*======================= End ScrollMagic Animations =======================*/
    
    /*----- Chevron links for .Fourteen-----*/

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
});

