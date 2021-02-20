function testCon(con,conR) {
  var hebCon = {
    Aleph: 'א',Beth: 'ב',Gimel: 'ג',Daleth: 'ד',Hey: 'ה',Waw: 'ו',Zayin: 'ז',Het: 'ח',Tet: 'ט',Yod: 'י',Kaph: 'כ',Lamed: 'ל',Mem: 'מ',Nun: 'נ',Samek: 'ס',Ayin: 'ע',Peh: 'פ',Tsade: 'צ',Qoph: 'ק',Resh: 'ר',Sin: 'שׂ',Shin: 'שׁ',Taw: 'ת'
  };
  var ans = hebCon[con];
  var input = document.getElementById(con).value;
  var grade = document.getElementById(conR);

  if (input == 'שׂ') {
    input = 'שׂ';
  }
  if (input == 'שׁ') {
    input = 'שׁ';
  }

  if (input == ans) {
    grade.innerHTML = '✅';
  } else {
    grade.innerHTML = '❌';
  }
}
