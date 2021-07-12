// ==UserScript==
// @name        AutoExpand Comments - Rev.
// @namespace   
// @description Expands the comment boxes when there is content in them.
// @include     https://*.instructure.com/courses/*/quizzes/*/history?*
// @version     1
// @grant none
// ==/UserScript==
(function() {
    'use strict';
  
      //This is based on the user script made by [James Jones]
      // at https://github.com/jamesjonesmath/canvancement
  
    try {
      if (/^\/courses\/[0-9]+\/quizzes\/[0-9]+\/history$/.test(window.location.pathname)) {
        var nodes = document.querySelectorAll('div#questions > div.question_holder > div.display_question > div.quiz_comment');
        for (var i = 0; i < nodes.length; i++) {
          var t = nodes[i].querySelector('textarea');
          if (t.value.length > 0) {
            resizeComment(t);
          }
          t.addEventListener('input', watchComment, false);
        }
      }
    } catch (e) {
      console.log(e);
    }
    function watchComment(e) {
      if (e.target.value.length >= 1) { // I changed it from <= to >=, otherwise, it won't expand when I paste text into the box instead of type.
        resizeComment(e.target);
      }
    }
    function resizeComment(e) {
      var divElement = e.parentNode;
      if (e.value.length > 0) {
        divElement.style.display = 'block';
        e.style.width = '98%';
        e.style.height = '200px';
      } else {
        divElement.style.display = 'inline-block';
        e.style.width = '98%';
        e.style.height = '200px';
      }
    }
  })();
  