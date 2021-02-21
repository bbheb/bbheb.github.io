function testCon(con,conR) {
  var hebCon = {
    Aleph: 'א',Beth: 'ב',Gimel: 'ג',Daleth: 'ד',Hey: 'ה',Waw: 'ו',Zayin: 'ז',Het: 'ח',Tet: 'ט',Yod: 'י',Kaph: 'כ',Lamed: 'ל',Mem: 'מ',Nun: 'נ',Samek: 'ס',Ayin: 'ע',Peh: 'פ',Tsade: 'צ',Qoph: 'ק',Resh: 'ר',Sin: 'שׂ',Shin: 'שׁ',Taw: 'ת'
  };
  var ans = hebCon[con];
  var input = document.getElementById(con).value;
  var mark = document.getElementById(conR);

  if (input == 'שׂ') {
    input = 'שׂ';
  }
  if (input == 'שׁ') {
    input = 'שׁ';
  }

  if (input == ans) {
    mark.innerHTML = '✅';
  } else {
    mark.innerHTML = '❌';
  }
}

function testVow(id, idR){
  var ansObj = {
    v1:'pathach',v2:'a',v3:'short',v4:'qamets',v5:'a',v7:'hireq',v8:'i',v9:'short',v10:'seghol',v11:'i',v12:'short',v13:'tsere',v14:'i',v15:'long',v16:'qibbuts',v17:'u',v18:'short',v19:'holem',v20:'u',v21:'long',v22:'qamets hatuph',v24:'u',v25:'shewa',v26:'reduced',v28:'hateph pathach',v29:'a',v30:'reduced',v31:'hateph seghol',v32:'i',v33:'reduced',v34:'hateph qamets',v35:'u',v36:'reduced'
  };
  var ans = ansObj[id];
  var input = document.getElementById(id).value.toLowerCase();
  var mark = document.getElementById(idR);
  if (input == ans) {
    mark.innerHTML = '✅';
  } else {
    mark.innerHTML = '❌';
  }
}
