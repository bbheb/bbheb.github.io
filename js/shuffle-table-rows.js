(function($){
  //Shuffle all rows, while keeping the first column
  //Requires: Shuffle
$.fn.shuffleRows = function(){
   return this.each(function(){
      var main = $(/table/i.test(this.tagName) ? this.tBodies[0] : this);
      var firstElem = [], counter=0;
      main.children().each(function(){
           firstElem.push(this.firstChild);
      });
      main.shuffle();
      main.children().each(function(){
         this.insertBefore(firstElem[counter++], this.firstChild);
      });
   });
 }
/* Shuffle is required */
$.fn.shuffle = function() {
  return this.each(function(){
    var items = $(this).children();
    return (items.length)
      ? $(this).html($.shuffle(items))
      : this;
  });
}

$.shuffle = function(arr) {
  for(
    var j, x, i = arr.length; i;
    j = parseInt(Math.random() * i),
    x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  return arr;
}
})(jQuery)