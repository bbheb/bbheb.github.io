'use strict';


$(() => {
  // navigator on paradigm practice pages


let paraNavHTML = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="/BiblicalHebrew/index.html">Home</a>
<ul class="navbar-nav">
  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/BiblicalHebrew/HebrewKeyboard/index.html" data-toggle="dropdown">Keyboard</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="/BiblicalHebrew/HebrewKeyboard/keyman-win.html">Windows</a>
      <a class="dropdown-item" href="/BiblicalHebrew/HebrewKeyboard/keyman-mac.html">MacOS</a>
      <a class="dropdown-item" href="/BiblicalHebrew/HebrewKeyboard/keyman-mobile.html">mobile</a>
    </div>
  </li>
  <li class="nav-item"><a class="nav-link" href="/BiblicalHebrew/HebrewTypingTest/index.html">Typing Test</a>
  <li class="nav-item"><a class="nav-link" href="https://github.com/martinmts/BiblicalHebrew/tree/main/Garrett_BiblicalHebrew/Downloads">Resources</a>
  <li class="nav-item"><a class="nav-link" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Paradigms/all-paradigms-list.html">Paradigms</a>
  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">EH Supp</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch01.html">Ch. 01</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch02.html">Ch. 02</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch03.html">Ch. 03</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex1_1–3.html">Ex. 1, chs. 1–3</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch04.html">Ch. 04</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch05.html">Ch. 05</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch06.html">Ch. 06</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex2_4–6.html">Ex. 2, chs. 4-6</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch07.html">Ch. 07</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch08.html">Ch. 08</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch09.html">Ch. 09</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex3_7–9.html">Ex. 3, chs. 7-9</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch10.html">Ch. 10</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch11.html">Ch. 11</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch12.html">Ch. 12</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex4_10–12.html">Ex. 4, chs. 10-12</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch13.html">Ch. 13</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch14.html">Ch. 14</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch15.html">Ch. 15</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex5_13–15.html">Ex. 5, chs. 13-15</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch16.html">Ch. 16</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch17.html">Ch. 17</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch18.html">Ch. 18</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex6_16–18.html">Ex. 6, chs. 16-18</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch19.html">Ch. 19</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch20.html">Ch. 20</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch21.html">Ch. 21</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ehex7_19-21.html">Ex. 7, chs. 19-21</a>
    </div>
  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">HS Supp</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch22.html">Ch. 22</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch23.html">Ch. 23</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/hsex1_principal-parts.html">Ex. 1, Principal Parts</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch24.html">Ch. 24</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch25.html">Ch. 25</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/hsex2_22–25.html">Ex. 2, chs. 22-25</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch26.html">Ch. 26</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch27.html">Ch. 27</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch28.html">Ch. 28</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch29.html">Ch. 29</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/hsex3_26–29.html">Ex. 3, chs. 26-29</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch30.html">Ch. 30</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch31.html">Ch. 31</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch32.html">Ch. 32</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch33.html">Ch. 33</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/hsex4_30–33.html">Ex. 4, chs. 30-33</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch34.html">Ch. 34</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch35.html">Ch. 35</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch36.html">Ch. 36</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch37.html">Ch. 37</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/hsex5_34–37.html">Ex. 5, chs. 34-37</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch38.html">Ch. 38</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch39.html">Ch. 39</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch40.html">Ch. 40</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/ch41.html">Ch. 41</a>
      <a class="dropdown-item" href="/BiblicalHebrew/Garrett_BiblicalHebrew/Supplements/hsex6_38-41.html">Ex. 6, chs. 38-41</a>
    </div>
</li>
</ul>
</nav>`;

//  let paraNavHTML = '<p style="font-size:14px; text-align:right" ><a href="../../index.html">Return to the Main Resource Page</a></p>'
  $("#para-nav").html(paraNavHTML);


});

/*
function loadSourceHTML(sourceURL,sourceID,currentPageID){
  $.get(sourceURL, htmlRaw => {
    var targetHTML = $(htmlRaw).find("#"+sourceID).html();
    if(typeof targetHTML === 'undefined'){
      targetHTML = $(htmlRaw).filter("#"+sourceID).html();
    }
    $("#"+currentPageID).html(targetHTML);
  });
}
*/
