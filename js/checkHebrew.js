  function checkHebrew() {
    var inputString = document.getElementById("hebrewtypingtest").value;
    var resCode = document.getElementById("resultCode");
    var resName = document.getElementById("resultName");
    var strUnicode = toUnicode(inputString);
    var strName = toName(inputString);
    resName.innerHTML = strName;
    resCode.innerHTML = strUnicode;
  }

  function toUnicode(theString) {
    var unicodeString = '';
    for (var i = 0; i < theString.length; i++) {
      var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
      while (theUnicode.length < 4) {
        theUnicode = '0' + theUnicode;
      }
      theUnicode = ' \\u' + theUnicode;
      unicodeString += theUnicode;
    }
    return unicodeString;
  }


  function toName(theString) {
    var theNameAll = '';
    var sourceDict = {
      uu0591: "Athnach",
      uu0592: "Segolta",
      uu0593: "Shalsheleth",
      uu0594: "Zaqeph Qaton",
      uu0595: "Zaqeph Gadol",
      uu0596: "Tiphcha",
      uu0597: "Revia",
      uu0598: "Zarqa",
      uu0599: "Pashta",
      uu059A: "Yethiv",
      uu059B: "Tevir",
      uu059C: "Geresh",
      uu059D: "Geresh Muqdam",
      uu059E: "Garshaim",
      uu059F: "Great Pazer",
      uu05A0: "Great Telisha",
      uu05A1: "Pazer",
      uu05A2: "Athnach Hafukh",
      uu05A3: "Munach",
      uu05A4: "Mehupakh",
      uu05A5: "Merkha",
      uu05A6: "Merkha Kefula",
      uu05A7: "Darga",
      uu05A8: "Qadma",
      uu05A9: "Telisha Qetana",
      uu05AA: "Yerah Ben Yomo",
      uu05AB: "Ole [Accent]",
      uu05AC: "Illuy",
      uu05AD: "Dechi",
      uu05AE: "Sinnor",
      uu05AF: "Masora Circle",
      uu05B0: "Shewa",
      uu05B1: "Hateph Seghol",
      uu05BA: "Holem for Waw",
      uu05B2: "Hateph Pathach",
      uu05B3: "Hateph Qamets (Hatuph)",
      uu05B4: "Hireq",
      uu05B5: "Tsere",
      uu05B6: "Seghol",
      uu05B7: "Pathach",
      uu05B8: "Qamets",
      uu05B9: "Holem",
      uu05BB: "Qibbuts",
      uu05BC: "Dagesh or Mappiq",
      uu05BD: "Metheg",
      uu05BE: "Maqeph",
      uu05BF: "Rafe",
      uu05C0: "Paseq",
      uu05C1: "Shin Dot",
      uu05C2: "Sin Dot",
      uu05C3: "Sof Pasuq",
      uu05C4: "Upper Dot",
      uu05C5: "Lower Dot",
      uu05C6: "Nun Hafukha",
      uu05C7: "Qamats Hatuph",
      uu05D0: "Aleph",
      uu05D1: "Beth",
      uu05D2: "Gimel",
      uu05D3: "Daleth",
      uu05D4: "Hey",
      uu05D5: "Waw",
      uu05D6: "Zayin",
      uu05D7: "Heth",
      uu05D8: "Teth",
      uu05D9: "Yod",
      uu05DA: "Final Kaph",
      uu05DB: "Kaph",
      uu05DC: "Lamed",
      uu05DD: "Final Mem",
      uu05DE: "Mem",
      uu05DF: "Final Nun",
      uu05E0: "Nun",
      uu05E1: "Samekh",
      uu05E2: "Ayin",
      uu05E3: "Final Pe",
      uu05E4: "Pe",
      uu05E5: "Final Tsade",
      uu05E6: "Tsade",
      uu05E7: "Qoph",
      uu05E8: "Resh",
      uu05E9: "Shin",
      uu05EA: "Taw",
      uu05F3: "Geresh",
      uu05F4: "Gershayim",
      uuFB2A: "Shin with Shin Dot",
      uuFB2B: "Shin with Sin Dot",
      uu25CC: "mark base"
    };
    var otherDict = {
      uu05F0: "Yiddish Double Vav",
      uu05F1: "Yiddish Vav Yod",
      uu05F2: "Yiddish Double Yod",
      uuFB1D: "Yod with Hiriq",
      uuFB1E: "Judeo-Spanish Varika",
      uuFB1F: "Yiddish Yod Yod Patah",
      uuFB20: "Alternative Ayin",
      uuFB21: "Wide Alef",
      uuFB22: "Wide Dalet",
      uuFB23: "Wide He",
      uuFB24: "Wide Kaf",
      uuFB25: "Wide Lamed",
      uuFB26: "Wide Final Mem",
      uuFB27: "Wide Resh",
      uuFB28: "Wide Tav",
      uuFB29: "Alternative Plus Sign",
      uuFB2C: "Shin with Dagesh and Shin Dot",
      uuFB2D: "Shin with Dagesh and Sin Dot",
      uuFB2E: "Alef with Patah",
      uuFB2F: "Alef with Qamats",
      uuFB30: "Alef with Mapiq",
      uuFB31: "Bet with Dagesh",
      uuFB32: "Gimel with Dagesh",
      uuFB33: "Dalet with Dagesh",
      uuFB34: "He with Mapiq",
      uuFB35: "Vav with Dagesh",
      uuFB36: "Zayin with Dagesh",
      uuFB38: "Tet with Dagesh",
      uuFB39: "Yod with Dagesh",
      uuFB3A: "Final Kaf with Dagesh",
      uuFB3B: "Kaf with Dagesh",
      uuFB3C: "Lamed with Dagesh",
      uuFB3E: "Mem with Dagesh",
      uuFB40: "Nun with Dagesh",
      uuFB41: "Samekh with Dagesh",
      uuFB43: "Final Pe with Dagesh",
      uuFB44: "Pe with Dagesh",
      uuFB46: "Tsadi with Dagesh",
      uuFB47: "Qof with Dagesh",
      uuFB48: "Resh with Dagesh",
      uuFB49: "Shin with Dagesh",
      uuFB4A: "Tav with Dagesh",
      uuFB4B: "Vav with Holam",
      uuFB4C: "Bet with Rafe",
      uuFB4D: "Kaf with Rafe",
      uuFB4E: "Pe with Rafe",
      uuFB4F: "Alef Lamed"
    };
    for (var i = 0; i < theString.length; i++) {
      var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
      while (theUnicode.length < 4) {
        theUnicode = '0' + theUnicode;
      }
      theUnicode = 'uu' + theUnicode; //得到类似 uu0591 的结果。

      if (theUnicode in sourceDict) {
        theName = '{' + sourceDict[theUnicode] + '}';
      } else if (theUnicode in otherDict) {
        theName = '{' + otherDict[theUnicode] + ' - Not acceptable Hebrew!}';
      } else {
        theName = '{Not Hebrew!}';
      }
      theNameAll = theNameAll + theName;
    }

    return theNameAll;
  }
