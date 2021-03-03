'use strict';
$(() => {
  // navigator on paradigm practice pages
  let paraNavHTML = '<p style="font-size:14px; text-align:right" ><a href="../../index.html">Return to the Main Resource Page</a></p>'
  $("#para-nav").html(paraNavHTML);

});

function loadSourceHTML(sourceURL,sourceID,currentPageID){
  $.get(sourceURL, htmlRaw => {
    var targetHTML = $(htmlRaw).find("#"+sourceID).html();
    if(typeof targetHTML === 'undefined'){
      targetHTML = $(htmlRaw).filter("#"+sourceID).html();
    }
    $("#"+currentPageID).html(targetHTML);
  });
}
