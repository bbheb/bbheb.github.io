// ==UserScript==
// @author		Martin Zhang
// @version		0.3
// @name		changeCanvasGraderDBWidth
// @namespace	https://bbheb.github.io
// @description	Change the font for matching questions (for Hebrew vocabulary questions) and user input boxes (for Hebrew paradigm questions) on Canvas.
// @ match		https://*.instructure.com/courses/*/assignments/*/submissions/*
// ==/UserScript==

(function(){
	'use strict';


// common function in css to change css style
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('body.is-inside-submission-frame.no-headers #content > div { width: 100% !important; }');
 


/*
	try {
		var div = document.querySelector("#content > div");
		div.style.width = "800px";
	} catch {

	}
*/

})();