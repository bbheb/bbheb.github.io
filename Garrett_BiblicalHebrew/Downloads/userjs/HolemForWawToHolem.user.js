// ==UserScript==
// @author		Martin Zhang
// @version	0.4
// @name		changeCanvasFont
// @namespace	https://bbheb.github.io/Garrett_BiblicalHebrew/Downloads/userjs/changeHebrewFontCanvas.user.js
// @description	Change the font for matching questions (for Hebrew vocabulary questions) and user input boxes (for Hebrew paradigm questions) on Canvas.
// @match		https://*.instructure.com/courses/*/quizzes/*/take*
// ==/UserScript==

(function(){
	'use strict';


/*
 * this user script is based on the one made by [James Jones] 
 *   at https://github.com/jamesjonesmath/canvancement/blob/master/miscellaneous/canvas-css-tweaks.user.js
 * It changes the font of the Hebrew words in the Vocabulary Match questions.
 * It also changes the font of the input box for the Hebrew paradigm questions.
 */ 

var sinFB2B = 'שׂ'; // \uFB2B
var shinFB2A = 'שׁ'; // \uFB2A
var sin05E9 = 'שׂ'; // \u05E9\u05C1
var shin05E9 = 'שׁ'; // \u05E9\u05C2
var holemForWaw = 'ֺ'; // \u05BA
var holem = 'ֹ'; // \u05B9

var input = document.querySelectorAll('input');
input.forEach(function(e){
  e.addEventListener('keyup', function(){
    var text = e.value;
    console.log('New text is "' + text + '"');
    if (input.includes(shinFB2A)){
      input = input.replace(shinFB2A,shin05E9);
    } else if (input.includes(sinFB2B)){
      input = input.replace(sinFB2B,sin05E9);
    } else if (input.includes(holeForWaw)){
      input = input.replace(holemForWaw, holem);
    }
    console.log('New text is "' + text + '"');
   

})

})();