// 图片点击放大
var $ = function(obj) {
  return document.querySelector(obj);
}

var initWindowWithIMGAndShow = function(src) {
  $('.window img').src = src;
  $('.window').classList.add('window-show');
}

$('img').addEventListener('click', function() {
  var src = this.src;
  initWindowWithIMGAndShow(src);
}, false)

$('.cloes-tag').addEventListener('click', function() {
  $('.window').classList.remove('window-show');
}, false)
