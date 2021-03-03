$(() => {
  // navigator on paradigm practice pages
  let paraNavHTML = '<p style="font-size:14px; text-align:right" ><a href="../../index.html">Return to the Main Resource Page</a></p>'
  $("#para-nav").html(paraNavHTML);

});

function loadSourceHTML(sourceURL,sourceID,currentPageID){
  $.get(sourceURL, function(html){
    let $section = $(html).filter("#" + sourceID).html();
    if(typeof $section !== 'undefined'){
      $("#" + currentPageID).html($section);
    } else {
      $.get(sourceURL, function(html){
        let $section = $(html).find("#" + sourceID).html();
        $("#" + currentPageID).html($section);
      });
    }
  });
}
