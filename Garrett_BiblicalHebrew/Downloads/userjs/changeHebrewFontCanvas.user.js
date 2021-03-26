// ==UserScript==
// @author		Martin Zhang
// @version		0.1
// @name		changeCanvasMatchQuestionFont
// @namespace	https://martinmts.github.io/BiblicalHebrew
// @description	Change the font for matching questions on Canvas, designed for Hebrew vocabulary questions.
// @match		https://*.instructure.com/courses/*/quizzes/*/take*
// ==/UserScript==

(function(){
	'use strict';
	var x = document.querySelectorAll('.pull-left label');
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.fontFamily = "Times New Roman";
	  x[i].style.fontSize = "30px";
	};

})();