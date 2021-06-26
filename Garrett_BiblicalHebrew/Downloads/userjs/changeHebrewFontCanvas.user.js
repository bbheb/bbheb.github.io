// ==UserScript==
// @author		Martin Zhang
// @version		0.2
// @name		changeCanvasMatchQuestionFont
// @namespace	https://bbheb.github.io
// @description	Change the font for matching questions and user input boxes on Canvas, designed for Hebrew vocabulary questions.
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

	var y = document.querySelectorAll('input');
	var j;
	for (j = 0; j < y.length; j++) {
	  y[j].style.fontFamily = "Times New Roman";
	  y[j].style.fontSize = "30px";
	};


})();