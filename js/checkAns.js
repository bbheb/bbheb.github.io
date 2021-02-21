
function testAns(id, idR, ansObj){
  var ans = ansObj[id];
  var input = document.getElementById(id).value.toLowerCase();
  var mark = document.getElementById(idR);
  if (input == '') {
    mark.innerHTML = '❓';
  } else if (input == ans) {
    mark.innerHTML = '✅';
  } else {
    mark.innerHTML = '❌';
  }
}

function testAnsInput(id, idR, ansObj, input){
  var ans = ansObj[id];
  var mark = document.getElementById(idR);
  if (input == '') {
    mark.innerHTML = '❓';
  } else if (input == ans) {
    mark.innerHTML = '✅';
  } else {
    mark.innerHTML = '❌';
  }
}

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

function testNoun(id, idR) {
  var ansObj = {v1:'סוּס',v2:'סוּסִים',v3:'סוּסָה',v4:'סוּסוֹת'};
  testAns(id, idR, ansObj);
}

function testQalQatal(id, idR) {
  var ansObj = {v1:'קָטַל',v2:'קָטְלוּ',v3:'קָטְלָה',v4:'קָטַלְתָּ',v5:'קְטַלְתֶּם',v6:'קָטַלְתְּ',v7:'קְטַלְתֶּן',v8:'קָטַלְתִּי',v9:'קָטַלְנוּ',v10:'בָּנָה',v11:'בָּנוּ',v12:'בָּנְתָה',v13:'בָּנִיתָ',v14:'בְּנִיתֶם',v15:'בָּנִית',v16:'בְּנִיתֶן',v17:'בָּנִיתִי',v18:'בָּנִינוּ'};
  testAns(id, idR, ansObj);
}

function testQalYiqtol(id, idR) {
  var ansObj = {v1:'יִקְטֹל',v2:'יִקְטְלוּ',v3:'תִּקְטֹל',v4:'תִּקְטֹלְנָה',v5:'תִּקְטֹל',v6:'תִּקְטְלוּ',v7:'תּקְטְלִי',v8:'תִּקְטֹלְנָה',v9:'אֶקְטֹל',v10:'נִקְטֹל',v11:'יִבְנֶה',v12:'יִבְנוּ',v13:'תִּבְנֶה',v14:'תִּבְנֶינָה',v15:'תִּבְנֶה',v16:'תִּבְנוּ',v17:'תִּבְנִי',v18:'תִּבְנֶינָה',v19:'אֶבְנֶה',v20:'נִבְנֶה'};
  testAns(id, idR, ansObj);
}

function testQalWayyiqtol(id, idR) {
  var ansObj = {v1:'וַיִּקְטֹל',v2:'וַיִּקְטְלוּ',v3:'וַתִּקְטֹל',v4:'וַתִּקְטֹלְנָה',v5:'וַתִּקְטֹל',v6:'וַתִּקְטְלוּ',v7:'וַתִּקְטְלִי',v8:'וַתִּקְטֹלְנָה',v9:'וָאֶקְטֹל',v10:'וַנִּקְטֹל',v11:'וַיִּבֶן',v12:'וַיִּבְנוּ',v13:'וַתִּבֶן',v14:'וַתִּבְנֶינָה',v15:'וַתִּבֶן',v16:'וַתִּבְנוּ',v17:'וַתִּבְנִי',v18:'וַתִּבְנֶינָה',v19:'וָאֶבְנֶה',v20:'וַנִּבְנֶה'};
  testAns(id, idR, ansObj);
}

function testNounPron(id, idR) {
  var ansObj = {v1:'סוּסוֹ',v2:'סוּסָם',v3:'סוּסָהּ',v4:'סוּסָן',v5:'סוּסְךָ',v6:'סוּסְכֶם',v7:'סוּסֵךְ',v8:'סוּסְכֶן',v9:'סוּסִי',v10:'סוּסֵנוּ',v11:'סוּסָיו',v12:'סוּסֵיהֶם',v13:'סוּסֶיהָ',v14:'סוּסֵיהֶן',v15:'סוּסֶיךָ',v16:'סוּסֵיכֶם',v17:'סוּסַיִךְ',v18:'סוּסֵיכֶן',v19:'סוּסַי',v20:'סוּסֵינוּ'};
  testAns(id, idR, ansObj);
}
