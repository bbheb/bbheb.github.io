// ==UserScript==
// @name        resizeCommentBoxCanvasGrader
// @namespace   https://bbheb.github.io/Garrett_BiblicalHebrew/Downloads/userjs/resizeCommentBoxCanvasGrader.user.js
// @description It resizes the comment box as you type/paste text into the box.
// @match       https://*.instructure.com/courses/*/assignments/*/submissions/*
// @version     0.1
// ==/UserScript==
(function () {
	'use strict';
  
  /*
   * this user script is based on the one made by [James Jones]
   * at https://github.com/jamesjonesmath/canvancement/blob/master/miscellaneous/canvas-css-tweaks.user.js
   * It is for graders and runs on the speedgrader page.
   * The @match link pattern with "assignments" is for the Discussion Boards pages.
   * #content > div is for DB.
   * It changes the width of the discussion board.
   */
  
  
	const rules = ['body.is-inside-submission-frame.no-headers #content > div { width: 80% !important; }'];
  
  
	if (rules.length) {
	  const style = document.createElement('style');
	  document.head.appendChild(style);
	  const sheet = style.sheet;
	  for (let i = 0; i < rules.length; i++) {
		sheet.insertRule(rules[i],i);
	  }
	}
	
  }) ();
  