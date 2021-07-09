// ==UserScript==
// @author		Martin Zhang
// @version		0.4
// @name		changeCanvasMatchQuestionFontGrader
// @namespace	https://bbheb.github.io
// @description	Change the font for matching questions (for Hebrew vocabulary questions) and user input boxes (for Hebrew paradigm questions) on Canvas.
// @match		https://*.instructure.com/courses/*/assignments/*/submissions/*
// ==/UserScript==

(function(){
	'use strict';


	function addGlobalStyle(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.innerHTML = css;
		head.appendChild(style);
	}
	
	addGlobalStyle('body.is-inside-submission-frame.no-headers .answer_match_left { font-family: Times New Roman !important; font-size: 30px !important; }');
	

	
	try {
		var y = document.querySelectorAll("input");
		var j;
		for (j = 0; j < y.length; j++) {
		  y[j].style.fontFamily = "Times New Roman";
		  y[j].style.fontSize = "30px";
		};
	
	} catch {

	}

	try {
		var z = document.querySelectorAll(".answer");
		var k;
		for (k = 0; k < z.length; k++) {
		  z[k].style.fontFamily = "Times New Roman";
		  z[k].style.fontSize = "30px";
		};
	
	} catch {

	}

	try {
		var a = document.querySelectorAll(".answer_text");
		var b;
		for (b = 0; b < a.length; b++) {
		  a[b].style.fontFamily = "Times New Roman";
		  a[b].style.fontSize = "30px";
		};
	
	} catch {
		
	}
	
})();