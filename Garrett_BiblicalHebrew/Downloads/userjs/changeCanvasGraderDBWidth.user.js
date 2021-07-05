// ==UserScript==
// @author		Martin Zhang
// @version		0.2
// @name		changeCanvasGraderDBWidth
// @namespace	https://bbheb.github.io
// @description	Change the font for matching questions (for Hebrew vocabulary questions) and user input boxes (for Hebrew paradigm questions) on Canvas.
// @match		https://*.instructure.com/courses/*/gradebook/speed_grader*
// ==/UserScript==

(function(){
	'use strict';

	try {
		var div = document.querySelector("#content > div");
		div.style.width = "800px";
	} catch {

	}
	
})();