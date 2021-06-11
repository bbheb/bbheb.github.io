// ==UserScript==
// @author		Martin Zhang
// @version		0.1
// @name		changeCanvasMatchQuestionFont
// @namespace	https://bbheb.github.io
// @description	Change the font for matching questions on Canvas, designed for Hebrew vocabulary questions.
// @match		https://*.instructure.com/courses/*/gradebook/speed_grader*
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

	var z = document.querySelectorAll('.answer');
	var k;
	for (k = 0; k < z.length; k++) {
	  z[k].style.fontFamily = "Times New Roman";
	  z[k].style.fontSize = "30px";
	};

	var a = document.querySelectorAll('.answer_text');
	var b;
	for (b = 0; b < a.length; b++) {
	  a[b].style.fontFamily = "Times New Roman";
	  a[b].style.fontSize = "30px";
	};
})();