// ==UserScript==
// @author		Martin Zhang
// @version	1.1
// @name		changeCanvasFont
// @namespace	https://bbheb.github.io/Garrett_BiblicalHebrew/Downloads/userjs/changeHebrewFontCanvas.user.js
// @description	Change the font for matching questions (for Hebrew vocabulary questions) and user input boxes (for Hebrew paradigm questions) on Canvas.
// @match		https://*.instructure.com/courses/*/quizzes/*
// @match		https://bbheb.github.io/HebrewTypingTest/index.html
// @match		https://bbheb.github.io/Garrett_BiblicalHebrew/Paradigms/*.html
// ==/UserScript==

(function(){
	'use strict';


/*
 * this user script is based on the one made by [James Jones]
 *   at https://github.com/jamesjonesmath/canvancement/blob/master/miscellaneous/canvas-css-tweaks.user.js
 * It changes the font of the Hebrew words in the Vocabulary Match questions.
 * It also changes the font of the input box for the Hebrew paradigm questions.
 */

/*
 * v. 1.1 update note (08/16/2021, 05:22 PM ET): 
 *     1. Removed '/take/*' from the end of the quiz match link so that the user script will also work on the review page after completing the quizzes.
 *     2. Added additional css selector and style to work with the quiz rewiew page.
 */


  const rules = ['input, div.pull-left > label, div.answer_label, div.answer_match_left, div.answer_html > span >p { font-family: "Times New Roman"; font-size: 30px !important; font-weight: normal !important; }'];


  if (rules.length) {
    const style = document.createElement('style');
    document.head.appendChild(style);
    const sheet = style.sheet;
    for (let i = 0; i < rules.length; i++) {
      sheet.insertRule(rules[i],i);
    }
  }


/*
 * The following script changes "Holem for Waw" to "Holem".
 * It is designed to work with the SIL Hebrew keyboard in Keyman.app (MacOS).
 * When we type Waw followed by Holem, the keyboard automatically changes Holem into Holem for Waw.
 * This script changes it back to Holem.
 * It is designed for Dr. Garrett's Hebrew course on Canvas.
 * With this script, you will not be able to type Holem for Waw, because every Holem for Waw will be
 *   changed to Holem instantly.
 * It is ok with Dr. Garrett's Hebrew courses, because they do not need Holem for Waw.
 * I make it to work with https://bbheb.github.io as well, because
 *   students may use this website to test their typing.
 */
    var holemForWaw = 'ֺ'; // \u05BA. You may not see/recognize it, but it is there.
    var holem = 'ֹ'; // \u05B9. You may not see/recognize it, but it is there.

    var input = document.querySelectorAll('input');

    input.forEach(function(e){
        e.addEventListener('keyup', function(){
            var text = e.value;
            if (text.includes(holemForWaw)){
               text = text.replace(holemForWaw, holem);
               e.value = text;
            }
        })
    })

})();