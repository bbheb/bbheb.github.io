function testCon(id,idR) {
  var ansObj = {Aleph: 'א',Beth: 'ב',Gimel: 'ג',Daleth: 'ד',Hey: 'ה',Waw: 'ו',Zayin: 'ז',Het: 'ח',Tet: 'ט',Yod: 'י',Kaph: 'כ',Lamed: 'ל',Mem: 'מ',Nun: 'נ',Samek: 'ס',Ayin: 'ע',Peh: 'פ',Tsade: 'צ',Qoph: 'ק',Resh: 'ר',Sin: 'שׂ',Shin: 'שׁ',Taw: 'ת'};
  var input = document.getElementById(id).value;
  if (input == 'שׂ') { input = 'שׂ'; }
  if (input == 'שׁ') { input = 'שׁ'; }
  testAnsInput(id, idR, ansObj, input);
}

function testVow(id, idR){
  var ansObj = {v1:'pathach',v2:'a',v3:'short',v4:'qamets',v5:'a',v7:'hireq',v8:'i',v9:'short',v10:'seghol',v11:'i',v12:'short',v13:'tsere',v14:'i',v15:'long',v16:'qibbuts',v17:'u',v18:'short',v19:'holem',v20:'u',v21:'long',v22:'qamets hatuph',v24:'u',v25:'shewa',v26:'reduced',v28:'hateph pathach',v29:'a',v30:'reduced',v31:'hateph seghol',v32:'i',v33:'reduced',v34:'hateph qamets',v35:'u',v36:'reduced'};
  testAns(id, idR, ansObj);
}

function testVowLet(id, idR) {
  var ansObj = {v1:'hireq yod',v2:'i',v3:'long',v4:'tsere yod',v5:'i',v6:'long',v7:'seghol yod',v8:'i',v9:'short',v10:'holem waw',v11:'u',v12:'long',v13:'shureq',v14:'u',v15:'long',v16:'qamets hey',v17:'a',v18:'long',v19:'tsere hey',v20:'i',v21:'long',v22:'seghol hey',v23:'i',v24:'short',v25:'holem hey',v26:'u',v27:'long'};
  testAns(id, idR, ansObj);
}

function testAns(id, idR, ansObj){
  var ans = ansObj[id];
  var input = document.getElementById(id).value.toLowerCase();
  var mark = document.getElementById(idR);
  if (input == ans) {
    mark.innerHTML = '✅';
  } else {
    mark.innerHTML = '❌';
  }
}

function testAnsInput(id, idR, ansObj, input){
  var ans = ansObj[id];
  var mark = document.getElementById(idR);
  if (input == ans) {
    mark.innerHTML = '✅';
  } else {
    mark.innerHTML = '❌';
  }
}
