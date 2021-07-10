// ==UserScript==
// @author		Martin Zhang
// @version	0.4
// @name		changeCanvasMatchQuestionFont
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


  const rules = ['input, div.pull-left > label, div.answer_label { font-family: "Times New Roman"; font-size: 30px !important; }'];


  if (rules.length) {
    const style = document.createElement('style');
    document.head.appendChild(style);
    const sheet = style.sheet;
    for (let i = 0; i < rules.length; i++) {
      sheet.insertRule(rules[i],i);
    }
  }

})();