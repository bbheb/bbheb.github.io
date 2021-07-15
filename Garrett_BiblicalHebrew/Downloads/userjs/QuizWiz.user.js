// ==UserScript==
// @name        changeCanvasFontGrader
// @namespace   https://bbheb.github.io/Garrett_BiblicalHebrew/Downloads/userjs/changeHebrewFontCanvasGrader.user.js
// @description It changes the font for some texts on Canvas. It is intended for Hebrew words but will work with others without distinctions.
// @match       https://*.instructure.com/courses/*/quizzes/*/history?*
// @version     0.6
// ==/UserScript==
(function () {
	'use strict';
  
  /*
   * this user script is based on the one made by [James Jones]
   * at https://github.com/jamesjonesmath/canvancement/blob/master/miscellaneous/canvas-css-tweaks.user.js
   * It is for graders and runs on the speedgrader page.
   * The @match link pattern with "quizzes" is for the Quizzes pages.
   * It changes the Hebrew words in the vocabulary match questions, answer keys for fill-in-the-blank questions.
   */
    
	const rules = ['div.answer_match_left, div.answer, div.answer_text, input.question_input { font-family: "Times New Roman"; font-weight: normal !important; font-size: 30px; }'];
  
  
	if (rules.length) {
	  const style = document.createElement('style');
	  document.head.appendChild(style);
	  const sheet = style.sheet;
	  for (let i = 0; i < rules.length; i++) {
		sheet.insertRule(rules[i],i);
	  }
	}
	
	//duplicate question headers
	// from https://github.com/jamesjonesmath/canvancement/blob/master/quizzes/questions/duplicate_question_header.user.js
	try {
		if (/^\/courses\/[0-9]+\/quizzes\/[0-9]+\/history$/.test(window.location.pathname)) {
		  var nodes = document.querySelectorAll('div#questions > div.question_holder > div.display_question > div.header');
		  for (var i = 0; i < nodes.length; i++) {
			var original = nodes[i];
			var parent = original.parentNode;
			var commentNode;
			for (var j = parent.children.length - 1; j >= 0; j--) {
			  if (parent.children[j].classList.contains('quiz_comment')) {
				commentNode = parent.children[j + 1];
			  }
			}
			if (typeof commentNode === 'undefined') {
			  // Unable to find the quiz_comment class, so don't know where to stick
			  // the duplicated header.
			  continue;
			}
			var duplicate = original.cloneNode(true);
			duplicate.style.borderTop = '1px solid #AAA';
			duplicate.style.borderBottom = 'none';
			var userPoints = duplicate.querySelector('div.user_points');
			userPoints.removeAttribute('class');
			var input = userPoints.querySelector('input.question_input');
			var originalInput = original.querySelector('div.user_points > input.question_input');
			input.addEventListener('change', userPointsUpdate, false);
			originalInput.addEventListener('change', userPointsUpdate, false);
			parent.insertBefore(duplicate, commentNode);
		  }
		}
	  } catch (e) {
		console.log(e);
	  }
	  function userPointsUpdate(e) {
		var name = e.target.name;
		var value = e.target.value;
		var parent = e.target.parentNode;
		var isPrimary = parent.classList.contains('user_points');
		if (isPrimary) {
		  // This is a change to the primary value.
		  // Change secondaries but don't propagate events
		  var dsts = document.querySelectorAll('div.header div:not(.user_points) > input.question_input[name="' + name + '"]');
		  for (var i = 0; i < dsts.length; i++) {
			if (dsts[i].value !== value) {
			  dsts[i].value = value;
			}
		  }
		} else {
		  // This is a change to the secondary point.
		  // Update the main one and trigger its events
		  var dst = document.querySelector('div.header div.user_points > input.question_input[name="' + name + '"]');
		  if (dst.value !== value) {
			dst.value = value;
			dst.dispatchEvent(new Event('change', {
			  'bubbling' : false
			}));
		  }
		}
	  }

  }) ();
  