'use strict';

// Show warning message if Safari.
window.onload = function() {
  if (navigator.platform.includes("Mac")) {
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      let safariWarning = `<details><summary style="font-size: 24px; background-color: #FFFF00;">You are using Safari. Please use another browser!</summary>
      <ul class="alert alert-secondary">
        <li>If you use Safari, your answer will be marked as incorrect when the word contains <span class="heb" dir="rtl">שׁ ,שׂ</span> or Dagesh.</li>
        <li>The issue with Unicode Normalization. More precisely, when you type the word in the box, it maybe marked as correct. But when you <i>paste</i> the same word that contains Sin, Shin or Dagesh, you answer will be marked incorrect, becuase Safari normalizes the Hebrew word you just pasted. The normalized word happened to follow a different typing order.</li>
        <ul>
          <li>The same thing happened when you do exams on Safari (MacOS). As soon as you hit the "Submit" key, Safari normalizes the Hebrew words you typed before it compares it with the answer key.</li>
        </ul>
        <li>The iOS version of Safari seems to be fine.</li>
        <li>Safari (MacOS) is the only browser that does the Normalization. For more info about Unicode Normalization, see <a href="https://www.sbl-site.org/Fonts/SBLHebrewUserManual1.5x.pdf">SBL Hebrew User Manual</a>, pages 8–17.</li>
      </ul>
      </details>`

      $('#safari').html(safariWarning);
    }
  } else {
    // do nothing
  }
};


// All correct answers
const ansObjList = {
  "ch01c":{Aleph: 'א',Beth: 'ב',Gimel: 'ג',Daleth: 'ד',Hey: 'ה',Waw: 'ו',Zayin: 'ז',Het: 'ח',Tet: 'ט',Yod: 'י',Kaph: 'כ',Lamed: 'ל',Mem: 'מ',Nun: 'נ',Samek: 'ס',Ayin: 'ע',Peh: 'פ',Tsade: 'צ',Qoph: 'ק',Resh: 'ר',Sin: 'שׂ',Shin: 'שׁ',Taw: 'ת'},
  "ch01v":{v1:'pathach',v2:'a',v3:'short',v4:'qamets',v5:'a',v7:'hireq',v8:'i',v9:'short',v10:'seghol',v11:'i',v12:'short',v13:'tsere',v14:'i',v15:'long',v16:'qibbuts',v17:'u',v18:'short',v19:'holem',v20:'u',v21:'long',v22:'qamets hatuph',v23:'u',v25:'shewa',v26:'reduced',v28:'hateph pathach',v29:'a',v30:'reduced',v31:'hateph seghol',v32:'i',v33:'reduced',v34:'hateph qamets',v35:'u',v36:'reduced'},
  "ch02":{v1:'hireq yod',v2:'i',v3:'long',v4:'tsere yod',v5:'i',v6:'long',v7:'seghol yod',v8:'i',v9:'short',v10:'holem waw',v11:'u',v12:'long',v13:'shureq',v14:'u',v15:'long',v16:'qamets hey',v17:'a',v18:'long',v19:'tsere hey',v20:'i',v21:'long',v22:'seghol hey',v23:'i',v24:'short',v25:'holem hey',v26:'u',v27:'long'},
  "ch05":{v1:'סוּס',v2:'סוּסִים',v3:'סוּסָה',v4:'סוּסוֹת'},
  "ch09":{v1:'קָטַל',v2:'קָטְלוּ',v3:'קָטְלָה',v4:'קָטַלְתָּ',v5:'קְטַלְתֶּם',v6:'קָטַלְתְּ',v7:'קְטַלְתֶּן',v8:'קָטַלְתִּי',v9:'קָטַלְנוּ',v10:'בָּנָה',v11:'בָּנוּ',v12:'בָּנְתָה',v13:'בָּנִיתָ',v14:'בְּנִיתֶם',v15:'בָּנִית',v16:'בְּנִיתֶן',v17:'בָּנִיתִי',v18:'בָּנִינוּ'},
  "ch10":{v1:'יִקְטֹל',v2:'יִקְטְלוּ',v3:'תִּקְטֹל',v4:'תִּקְטֹלְנָה',v5:'תִּקְטֹל',v6:'תִּקְטְלוּ',v7:'תִּקְטְלִי',v8:'תִּקְטֹלְנָה',v9:'אֶקְטֹל',v10:'נִקְטֹל',v11:'יִבְנֶה',v12:'יִבְנוּ',v13:'תִּבְנֶה',v14:'תִּבְנֶינָה',v15:'תִּבְנֶה',v16:'תִּבְנוּ',v17:'תִּבְנִי',v18:'תִּבְנֶינָה',v19:'אֶבְנֶה',v20:'נִבְנֶה'},
  "ch11":{v1:'וַיִּקְטֹל',v2:'וַיִּקְטְלוּ',v3:'וַתִּקְטֹל',v4:'וַתִּקְטֹלְנָה',v5:'וַתִּקְטֹל',v6:'וַתִּקְטְלוּ',v7:'וַתִּקְטְלִי',v8:'וַתִּקְטֹלְנָה',v9:'וָאֶקְטֹל',v10:'וַנִּקְטֹל',v11:'וַיִּבֶן',v12:'וַיִּבְנוּ',v13:'וַתִּבֶן',v14:'וַתִּבְנֶינָה',v15:'וַתִּבֶן',v16:'וַתִּבְנוּ',v17:'וַתִּבְנִי',v18:'וַתִּבְנֶינָה',v19:'וָאֶבְנֶה',v20:'וַנִּבְנֶה'},
  "ch14":{v1:'סוּסוֹ',v2:'סוּסָם',v3:'סוּסָהּ',v4:'סוּסָן',v5:'סוּסְךָ',v6:'סוּסְכֶם',v7:'סוּסֵךְ',v8:'סוּסְכֶן',v9:'סוּסִי',v10:'סוּסֵנוּ',v11:'סוּסָיו',v12:'סוּסֵיהֶם',v13:'סוּסֶיהָ',v14:'סוּסֵיהֶן',v15:'סוּסֶיךָ',v16:'סוּסֵיכֶם',v17:'סוּסַיִךְ',v18:'סוּסֵיכֶן',v19:'סוּסַי',v20:'סוּסֵינוּ'},
  "ch16":{v1:'עַמִּים',v2:'הָרִים',v3:'חִצִּים',v4:'אִמּוֹת',v5:'חֻקִּים'},
  "ch17":{v1:'זֶה',v2:'אֵלֶּה',v3:'זֹאת',v5:'הוּא',v6:'הֵם',v7:'הִיא',v8:'הֵנָּה',v11:'הוּא',v12: ['הֵם','הֵמָּה'],v13:'הִיא',v14:'הֵנָּה',v15:'אַתָּה',v16:'אַתֶּם',v17:'אַתְּ',v18:['אַתֶּן','אַתֵּנָה'],v19:['אֲנִי','אָנֹכִי'],v20:'אֲנַחְנוּ'},
  "ch18":{v1:'קְטֹל',v2:'קִטְלוּ',v3:'קִטְלִי',v4:'קְטֹלְנָה',v5:'בְּנֵה',v6:'בְּנוּ',v7:'בְּנִי',v8:'בְּנֶינָה'},
  "ch21":{v1:'קָטַל',v2:'יִקְטֹל',v3:'קְטֹל',v4:'קֹטֵל',v5:'בָּנָה',v6:'יִבְנֶה',v7:'בְּנוֹת',v8:'בּוֹנֶה',v9:'עָמַד',v10:'יַעֲמֹד',v11:'עֲמֹד',v12:'עֹמֵד',v13:'בָּחַר',v14:'יִבְחַר',v15:'בְּחֹר',v16:'בֹּחֵר',v17:'שָׁמַע',v18:'יִשְׁמַע',v19:'שְׁמֹעַ',v20:'שֹׁמֵעַ',v21:'מָצָא',v22:'יִמְצָא',v23:'מְצֹא',v24:'מֹצֵא',v25:'חָטָא',v26:'יֶחֱטָא',v27:'חֲטֹא',v28:'חוֹטֵא',v29:'נָפַל',v30:'יִפֹּל',v31:'נְפֹל',v32:'נֹפֵל',v33:'שָׁב',v34:'יָשׁוּב',v35:'שׁוּב',v36:'שָׁב',v37:'סָבַב',v38:'יָסֹב',v39:'סְבֹב',v40:'סֹבֵב',v41:'יָשַׁב',v42:['יֵשֵׁב','תֵּשֵׁב'],v43:'שֶׁבֶת',v44:'יֹשֵׁב',v45:'יָרַשׁ',v46:'יִירַשׁ',v47:'רֶשֶׁת',v48:'יוֹרֵשׁ',v49:'אָמַר',v50:'יֹאמַר',v51:'לֵאמֹר',v52:'אֹמֵר',v53:'אָהַב',v54:'יֶאֱהַב',v55:'אַהֲבַת',v56:'אֹהֵב'},
  "ch23":{v1:'נִקְטַל',v2:'יִקָּטֵל',v3:'הִקָּטֵל',v4:'נִקְטָל',v5:'קִטֵּל',v6:'קִטַּלְתָּ',v7:'יְקַטֵּל',v8:'קַטֵּל',v9:'מְקַטֵּל',v10:'הִקְטִיל',v11:'הִקְטַלְתָּ',v12:'יַקְטִיל',v13:'הַקְטִיל',v14:'מַקְטִיל',v15:'הִתְקַטֵּל',v16:'הִתְקַטַּלְתָּ',v17:'יִתְקַטֵּל',v18:'הִתְקַטֵּל',v19:'מִתְקַטֵּל',v20:'קֻטַּל',v21:'יְקֻטַּל',v22:'קֻטַּל',v23:'מְקֻטָּל',v24:'הׇקְטַל',v25:'יׇקְטַל',v26:'הׇקְטַל',v27:'מׇקְטָל'},
  "ch31":{v1:'נִקְטַל',v2:'נִקְטְלוּ',v3:'נִקְטְלָה',v4:'נִקְטַלְתָּ',v5:'נִקְטַלְתֶּם',v6:'נִקְטַלְתְּ',v7:'נִקְטַלְתֶּן',v8:'נִקְטַלְתִּי',v9:'נִקְטַלְנוּ',v10:'יִקָּטֵל',v11:'יִקָּטְלוּ',v12:'תִּקָּטֵל',v13:'תִּקָּטַלְנָה',v14:'תִּקָּטֵל',v15:'תִּקָּטְלוּ',v16:'תִּקָּטְלִי',v17:'תִּקָּטַלְנָה',v18:'אֶקָּטֵל',v19:'נִקָּטֵל'},
  "ch32pi":{v1:'קִטֵּל',v2:'קִטְּלוּ',v3:'קִטְּלָה',v4:'קִטַּלְתָּ',v5:'קִטַּלְתֶּם',v6:'קִטַּלְתְּ',v7:'קִטַּלְתֶּן',v8:'קִטַּלְתִּי',v9:'קִטַּלְנוּ',v10:'יְקַטֵּל',v11:'יְקַטְּלוּ',v12:'תְּקַטֵּל',v13:'תְּקַטֵּלְנָה',v14:'תְּקַטֵּל',v15:'תְּקַטְּלוּ',v16:'תְּקַטְּלִי',v17:'תְּקַטֵּלְנָה',v18:'אֲקַטֵּל',v19:'נְקַטֵּל'},
  "ch32pu":{v1:'קֻטַּל',v2:'קֻטְּלוּ',v3:'קֻטְּלָה',v4:'קֻטַּלְתָּ',v5:'קֻטַּלְתֶּם',v6:'קֻטַּלְתְּ',v7:'קֻטַּלְתֶּן',v8:'קֻטַּלְתִּי',v9:'קֻטַּלְנוּ',v10:'יְקֻטַּל',v11:'יְקֻטְּלוּ',v12:'תְּקֻטַּל',v13:'תְּקֻטַּלְנָה',v14:'תְּקֻטַּל',v15:'תְּקֻטְּלוּ',v16:'תְּקֻטְּלִי',v17:'תְּקֻטַּלְנָה',v18:'אֲקֻטַּל',v19:'נְקֻטַּל'},
  "ch33hi":{v1:'הִקְטִיל',v2:'הִקְטִילוּ',v3:'הִקְטִילָה',v4:'הִקְטַלְתָּ',v5:'הִקְטַלְתֶּם',v6:'הִקְטַלְתְּ',v7:'הִקְטַלְתֶּן',v8:'הִקְטַלְתִּי',v9:'הִקְטַלְנוּ',v10:'יַקְטִיל',v11:'יַקְטִילוּ',v12:'תַּקְטִיל',v13:'תַּקְטֵלְנָה',v14:'תַּקְטִיל',v15:'תַּקְטִילוּ',v16:'תַּקְטִילִי',v17:'תַּקְטֵלְנָה',v18:'אַקְטִיל',v19:'נַקְטִיל'},
  "ch33ho":{v1:'הׇקְטַל',v2:'הׇקְטְלוּ',v3:'הׇקְטְלָה',v4:'הׇקְטַלְתָּ',v5:'הׇקְטַלְתֶּם',v6:'הׇקְטַלְתְּ',v7:'הׇקְטַלְתֶּן',v8:'הׇקְטַלְתִּי',v9:'הׇקְטַלְנוּ',v10:'יׇקְטַל',v11:'יׇקְטְלוּ',v12:'תׇּקְטַל',v13:'תׇּקְטַלְנָה',v14:'תׇּקְטַל',v15:'תׇּקְטְלוּ',v16:'תׇּקְטְלִי',v17:'תׇּקְטַלְנָה',v18:'אׇקְטַל',v19:'נׇקְטַל'},
  "ch34":{v1:'הִתְקַטֵּל',v2:'הִתְקַטְּלוּ',v3:'הִתְקַטְּלָה',v4:'הִתְקַטַּלְתָּ',v5:'הִתְקַטַּלְתֶּם',v6:'הִתְקַטַּלְתְּ',v7:'הִתְקַטַּלְתֶּן',v8:'הִתְקַטַּלְתִּי',v9:'הִתְקַטַּלְנוּ',v10:'יִתְקַטֵּל',v11:'יִתְקַטְּלוּ',v12:'תִּתְקַטֵּל',v13:'תִּתְקַטֵּלְנָה',v14:'תִּתְקַטֵּל',v15:'תִּתְקַטְּלוּ',v16:'תִּתְקַטְּלִי',v17:'תִּתְקַטֵּלְנָה',v18:'אֶתְקַטֵּל',v19:'נִתְקַטֵּל'}
};

const ch = getMeta('description'); // get meta data for the currect page.
const ansObj = ansObjList[ch]; // get the correct answer set for the currect page.


$(() => {

  // navigator on paradigm practice pages
/*
  let paraNavHTML = '<p style="font-size:14px; text-align:right" ><a href="../../index.html">Return to the Main Resource Page</a></p>\
  <p style="font-size:14px; text-align:right" ><a href="all-paradigms-list.html">Return to the Paradigms List Page</a></p>'
  $('#nav').html(paraNavHTML);
*/
  // Click ❓ or ❌ to reveal the answer key. Buttons to reveal/clear all answer keys.
  let revealAnsTipHTML = '<b>* Click ❓ or ❌ to reveal individual answer key.</b></br>\
  <button type="button" class="btn btn-success" onclick="revealAllAnswers()">Click Me</button> to Reveal All Answers;\
  <button type="button" class="btn btn-info" onclick="clearAllAnswers()">Click Me</button> to Clear All Answers.\
  </br>'
  $('#revealAnsTip').html(revealAnsTipHTML);

  // show correct answer key.
  $('.mark').click(function() {
    let idR = $(this).attr('id'); // get id for the "mark" cell
    let id = idR.substr(0, idR.length - 1); // get id for the "input" cell
    let ans = ansObj[id]; // get the correct answer key.
    $("#" + id).val(ans); // show answer key in the "input" cell.
    $("#" + idR).text('✅'); // mark as correct.
  });

  // check user input to see if it matches.
  $('input').on("keyup change input", function() {
    let input = $(this).val(); // get user input value.
    let id = $(this).attr('id'); // get id for the "input" cell
    let idR = id + "r"; // get id for the "mark" cell.
    testAns(id, idR, ansObj); // check answer key.
  });

});

// reveal all answers keys.
function revealAllAnswers(){
  $('.mark').each(function() {
    let idR = $(this).attr('id'); // get id for the "mark" cell
    let id = idR.substr(0, idR.length - 1); // get id for the "input" cell
    let ans = ansObj[id]; // get the correct answer key.
    $("#" + id).val(ans); // show answer key in the "input" cell.
    $("#" + idR).text('✅'); // mark as correct.
  });
}

// clear all answers keys.
function clearAllAnswers(){
  $('input').val('');
  $('.mark').text('❓');
}


// get meta data
function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
}


// this function is intended to be called by other functions below.
function testAns(id, idR, ansObj){
  let input = document.getElementById(id).value.toLowerCase();
  let mark = document.getElementById(idR);
  if (input == '') {
    mark.innerText = '❓';
    return;
  }

  // replace \ufb2a and \ufb2b with \u05e9\u05c1 and \u05e9\u05c2
  var sinFB2B = 'שׂ'; // \uFB2B
  var shinFB2A = 'שׁ'; // \uFB2A
  var sin05E9 = 'שׂ'; // \u05E9\u05C1
  var shin05E9 = 'שׁ'; // \u05E9\u05C2
  if (input.includes(shinFB2A)){
    input = input.replace(shinFB2A,shin05E9);
  } else if (input.includes(sinFB2B)){
    input = input.replace(sinFB2B,sin05E9);
  }

  // check answer
  let ans = ansObj[id]; // correct answer.

  if (typeof ans === 'string') {  // one correct answer.
      if (input == ans) {
        mark.innerText = '✅';
      } else {
        mark.innerText = '❌';
      }
    } else if (typeof ans === 'object') {  // multiple correct answers.
        if (ans.includes(input)) {
          mark.innerText = '✅';
        } else {
          mark.innerText = '❌';
        }
    }

/* 为了让学生在这里的经历和在 Canvas 上一样，不要对输入和正确答案做 Normalization。
  input = input.normalize('NFC');

  if (typeof ans === 'string') {  // one correct answer.
    ans = ans.normalize('NFC');
  } else if (typeof ans === 'object') {  // multiple correct answers.
      for (i = 0; i < ans.length; i++) {
        ans[i] = ans[i].normalize('NFC');
      }
  }
*/

}
