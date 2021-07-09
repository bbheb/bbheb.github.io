// ==UserScript==
// @author		Martin Zhang
// @version		0.3
// @name		changeCanvasGraderDBWidth
// @namespace	https://bbheb.github.io
// @description	Change the font for matching questions (for Hebrew vocabulary questions) and user input boxes (for Hebrew paradigm questions) on Canvas.
// @match		https://*.instructure.com/courses/*/gradebook/speed_grader*
// ==/UserScript==

(function(){
	'use strict';


// common function in css to change css style
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
// how to implement it, dont forget the !important part
// the site i was looking at had an embedded css style sheet that I didnt like its .tableStyle rule, so this is how you change that - CHANGE HERE
addGlobalStyle('#content > div { width: 850px !important; }');
 


/*
	try {
		var div = document.querySelector("#content > div");
		div.style.width = "800px";
	} catch {

	}
*/

})();