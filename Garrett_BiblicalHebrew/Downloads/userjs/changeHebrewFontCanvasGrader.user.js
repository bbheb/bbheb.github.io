// ==UserScript==
// @name        Canvas CSS Tweaks
// @namespace   https://bbheb.github.io/Garrett_BiblicalHebrew/Downloads/userjs/changeHebrewFontCanvasGrader.user.js
// @description Various tweaks to Canvas CSS
// @match       https://*.instructure.com/courses/*/assignments/*/submissions/*
// @match       https://*.instructure.com/courses/*/quizzes/*/history?*
// @version     0.6
// ==/UserScript==
(function () {
	'use strict';
  
  /*
   * this user script is based on the one made by [James Jones]
   * at https://github.com/jamesjonesmath/canvancement/blob/master/miscellaneous/canvas-css-tweaks.user.js
   * It is for graders and runs on the speedgrader page.
   * The @match link pattern with "assignments" is for the Discussion Boards pages.
   * The @match link pattern with "quizzes" is for the Quizzes pages.
   * It changes the width of the discussion board.
   * It also changes the Hebrew words in the vocabulary match questions, answer keys for fill-in-the-blank questions.
   */
  
  
	const rules = ['body.is-inside-submission-frame.no-headers #content > div { width: 80% !important; }',
				   'div.answer_match_left, div.answer, div.answer_text, input.question_input { font-family: "Times New Roman"; font-weight: normal !important; font-size: 30px; }'
				];
  
  
	if (rules.length) {
	  const style = document.createElement('style');
	  document.head.appendChild(style);
	  const sheet = style.sheet;
	  for (let i = 0; i < rules.length; i++) {
		sheet.insertRule(rules[i],i);
	  }
	}
  }) ();
  