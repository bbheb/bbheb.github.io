'use strict';


$(() => {
  // navigator on paradigm practice pages

//  <a class="navbar-brand py-0" href="/index.html">Home</a>

let navHTML = `<nav class="navbar justify-content-center navbar-expand-sm bg-light navbar-light fixed-top">
  <ul class="navbar-nav">
    <li class="nav-item dropdown"><a class="nav-link py-0" href="/index.html">Home</a></li>
    <li class="nav-item dropdown"><a class="nav-link py-0 dropdown-toggle" href="/HebrewKeyboard/index.html" data-toggle="dropdown">Keyboard</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="/HebrewKeyboard/keyman-win.html">Windows</a>
        <a class="dropdown-item" href="/HebrewKeyboard/keyman-mac.html">MacOS</a>
        <a class="dropdown-item" href="/HebrewKeyboard/keyman-mobile.html">Mobile Devices</a>
      </div>
    </li>

    <li class="nav-item"><a class="nav-link py-0" href="/HebrewTypingTest/index.html">Typing Test</a></li>

    <li class="nav-item"><a class="nav-link py-0" href="/tutorials/hebfontcanvas-tempermonkey.html">User Script</a></li>

    <li class="nav-item dropdown"><a class="nav-link py-0 dropdown-toggle" href="https://github.com/bbheb/tree/main/Garrett_BiblicalHebrew/Downloads" data-toggle="dropdown">Resources</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/01_Hebrew Alphabet Song.mp3">Ch. 01 Hebrew Alphabet Song.mp3</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/01_Hebrew Consonants Practice Sheet.pdf">Ch. 01 Hebrew Consonants Practice Sheet.pdf</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/09_Qal Qatal Strong and III-Hey verb Paradigms.pdf">Ch. 09 Qal Qatal Strong and III-Hey verb Paradigms.pdf</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/10_Qal Yiqtol Strong and III-Hey verb Paradigms.pdf">Ch. 10 Qal Yiqtol Strong and III-Hey verb Paradigms.pdf</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/11_Qal Wayyiqtol Strong and III-Hey verb Paradigms.pdf">Ch. 11 Qal Wayyiqtol Strong and III-Hey verb Paradigms.pdf</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/21_Principle Parts Practice Sheet (p.149 Table 21.4).pdf">Ch. 21 Principle Parts Practice Sheet (p.149 Table 21.4).pdf</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Downloads/23, 21_Principle Parts Practice Sheet (pp. 149&164 Table 21.4, 23.6).pdf">Chs. 23, 21 Principle Parts Practice Sheet (pp. 149&164 Table 21.4, 23.6).pdf</a>
      </div>
    </li>

    <li class="nav-item dropdown"><a class="nav-link py-0 dropdown-toggle" href="/Garrett_BiblicalHebrew/Paradigms/all-paradigms-list.html" data-toggle="dropdown">Paradigms</a>
      <div class="dropdown-menu">
        <a class="dropdown-item disabled" href="#">Elementary Hebrew</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch01-consonants.html">Alphabet Reproduction Practice (Table 1.1)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch01-vowels.html">Vowels Reproduction Practice (Tables 1.13, 1.14)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch02-vowel-letters.html">Vowel Letters Reproduction Practice (Table 2.1)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch05-noun-pattern.html">Noun Pattern Reproduction Practice (Table 5.1)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch09-qal-qatal.html">Qal Qatal Paradigms Reproduction (Tables 9.1, 9.3)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch10-qal-yiqtol.html">Qal Yiqtol Paradigms Reproduction (Tables 10.2, 10.6)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch11-qal-wayyiqtol.html"">Qal Wayyiqtol Paradigms Reproduction (Tables 11.3, 11.4)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch14-noun-pronominal.html">Qal Noun + Pronominal Suffix Paradigms Reproduction (Tables 14.2, 14.4)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch16-geminate-nouns.html">Geminate Nouns Paradigm Reproduction (Tables 16.1, 2, 3)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch17-pronouns.html">Pronouns Paradigms Reproduction (Tables 17.1, 6)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch18-qal-imperative.html">Qal Imperative Paradigm Reproduction (Tables 18.1, 3)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch21-qal-principal-parts.html">Qal Principal Parts Reproduction (Table 21.4)</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item disabled" href="#">Hebrew Syntax</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch21-qal-principal-parts.html">Qal Principal Parts Reproduction (Table 21.4)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch23-derived-stems-principal-parts.html">Derived Stems Principal Parts Reproduction (Table 23.6)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch31-niphal.html">Niphal Paradigm Reproduction (Tables 31.2, 3)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch32-piel.html">Piel Paradigm Reproduction (Tables 32.2, 4)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch32-pual.html">Pual Paradigm Reproduction (Tables 32.9, 10)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch33-hiphil.html">Hiphil Paradigm Reproduction (Tables 33.2, 4)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch33-hophal.html">Hophal Paradigm Reproduction (Tables 33.10, 11)</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Paradigms/ch34-hithpael.html">Hithpael Paradigm Reproduction (Tables 34.2, 3)</a>
      </div>
    </li>

    <li class="nav-item dropdown"><a class="nav-link py-0 dropdown-toggle" href="#" data-toggle="dropdown">EH Supp</a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch01.html">Ch. 01 The Hebrew Alphabet and Vowels</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch02.html">Ch. 02 Pointed Vowel Letters and the Silent Shewa</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch03.html">Ch. 03 Daghesh Forte, Mappiq, Metheg, and Rules for Gutturals</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex1_1–3.html">Ex. 1, chs. 1–3</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch04.html">Ch. 04 Accent Shift and Vowel Changes</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch05.html">Ch. 05 Gender and Number in Nouns</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch06.html">Ch. 06 Hebrew Verbs</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex2_4–6.html">Ex. 2, chs. 4-6</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch07.html">Ch. 07 The Directive <span class="heb" dir="rtl">ה</span>, Negative <span class="heb" dir="rtl">עַל</span> and Interrogative <span class="heb" dir="rtl">ה</span></a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch08.html">Ch. 08 The Definite Article</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch09.html">Ch. 09 Roots, Stems, and the Qal Qatal</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex3_7–9.html">Ex. 3, chs. 7-9</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch10.html">Ch. 10 The Conjunction and the Qal Yiqtol and Weqatal</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch11.html">Ch. 11 The Qal Infinitive Construct and Wayyiqtol</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch12.html">Ch. 12 The Construct Chain</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex4_10–12.html">Ex. 4, chs. 10-12</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch13.html">Ch. 13 Prepositions</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch14.html">Ch. 14 Pronominal Suffixes on Nouns and Prepositions</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch15.html">Ch. 15 Adjectives and the Qal Participles</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex5_13–15.html">Ex. 5, chs. 13-15</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch16.html">Ch. 16 Geminate and Segholate Nouns</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch17.html">Ch. 17 Pronouns</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch18.html">Ch. 18 More About <span class="heb" dir="rtl">יֵשׁ</span> and <span class="heb" dir="rtl">אֵין</span> and the Qal Imperative</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex6_16–18.html">Ex. 6, chs. 16-18</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch19.html">Ch. 19 Numbers</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch20.html">Ch. 20 Stems, Roots, and Principal Parts</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch21.html">Ch. 21 Principal Parts of Other Weak Roots in the Qal Stem</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/ehex7_19-21.html">Ex. 7, chs. 19-21</a>
      </div>
    </li>

    <li class="nav-item dropdown"><a class="nav-link py-0 dropdown-toggle" href="#" data-toggle="dropdown">HS Supp</a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch22.html">Ch. 22 Characteristics of the Niphal, Piel, and Hiphil</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch23.html">Ch. 23 Characteristics of the Pual, Hophal, and Hithpael</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/hsex1_principal-parts.html">Ex. 1, Principal Parts</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch24.html">Ch. 24 Principal Parts of Weak Roots in the Derived Stems</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch25.html">Ch. 25 Pronominal Suffixes on Verbs</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/hsex2_22–25.html">Ex. 2, chs. 22-25</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch26.html">Ch. 26 Infinitive Constructs with Suffixes and Infinitive Absolutes</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch27.html">Ch. 27 The Qal Yiqtol and Wayyiqtol with Weak Roots</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch28.html">Ch. 28 The Qal Imperative and Participle with Weak Roots</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch29.html">Ch. 29 The Qal Qatal, Statives, and Passive Participle</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/hsex3_26–29.html">Ex. 3, chs. 26-29</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch30.html">Ch. 30 The Qal Cohortative, Jussive, and Weyiqtol</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch31.html">Ch. 31 The Niphal</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch32.html">Ch. 32 The Piel and Pual</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch33.html">Ch. 33 The Hiphil and Hophal</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/hsex4_30–33.html">Ex. 4, chs. 30-33</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch34.html">Ch. 34 The Hithpael</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch35.html">Ch. 35 The Alternative Doubled Stems</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch36.html">Ch. 36 The Cantillation Marks and Other Masoretic Conventions</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch37.html">Ch. 37 An Overview of Text Syntax and Literary Structure</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/hsex5_34–37.html">Ex. 5, chs. 34-37</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch38.html">Ch. 38 More on Historical Discourse, Connectors, and Subordination</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch39.html">Ch. 39 More on Anticipatory Discourse and Copular Clauses</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch40.html">Ch. 40 Discourse Markers and More on Directive Discourse</a>
        <a class="dropdown-item" href="/Garrett_BiblicalHebrew/Supplements/ch41.html">Ch. 41 An Overview of Poetry</a>
        <a class="dropdown-item text-success" href="/Garrett_BiblicalHebrew/Supplements/hsex6_38-41.html">Ex. 6, chs. 38-41</a>
      </div>
    </li>
  </ul>
</nav>`;

  $("#nav").html(navHTML);
});
