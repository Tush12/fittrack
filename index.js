window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  var buttonId = urlParams.get('id');
  if(buttonId == "en"){
      document.getElementById("topic").innerHTML = "Hong Kong Fitness Walking Tracks";
      document.getElementById("content").innerHTML = "Language: ";
      document.getElementById("back").innerHTML = "English";
  } 
  else if(buttonId == "tc"){
      document.getElementById("topic").innerHTML = "香港健步行";
      document.getElementById("content").innerHTML = "語言: ";
      document.getElementById("back").innerHTML = "繁體中文";
  }
  else {
      document.getElementById("topic").innerHTML = "香港健步行";
      document.getElementById("content").innerHTML = "语言: ";
      document.getElementById("back").innerHTML = "简体中文";
  }

  fetch('data.json')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {   
      if(buttonId == "en"){
          for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              var div = document.createElement('div');
              div.innerHTML = "<button onclick=\"detail(this.id)\" id=\"" + obj.Title_en + "\"><h2>" + obj.Title_en + "</h2><p>" + obj.District_en + "</p></button>";
              document.getElementById('data').appendChild(div);
            }
      }
      else if(buttonId == "tc"){
          for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              var div = document.createElement('div');
              div.innerHTML = "<button onclick=\"detail(this.id)\" id=\"" + obj.Title_en + "\"><h2>" + obj.Title_tc + "</h2><p>" + obj.District_tc + "</p></button>";
              document.getElementById('data').appendChild(div);
            }
      }
      else {
          for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              var div = document.createElement('div');
              div.innerHTML = "<button onclick=\"detail(this.id)\" id=\"" + obj.Title_en + "\"><h2>" + obj.Title_sc + "</h2><p>" + obj.District_sc + "</p></button>";
              document.getElementById('data').appendChild(div);
            }
      }
      
  })
  
  function showEnglish() {
    document.getElementById("Engdistrictselect").style.display = "";
    document.getElementById("EnglishDistrictfuncButton").style.display = "";
    document.getElementById("Chidistrictselect").style.display = "none";
    document.getElementById("ChineseDistrictfuncButton").style.display = "none";
    document.getElementById("engVerwithdistrict").style.display = "none";
    document.getElementById("chiVerwithdistrict").style.display = "none";
  
  }
  
  function showChinese() {
    
    document.getElementById("Engdistrictselect").style.display = "none";
    document.getElementById("EnglishDistrictfuncButton").style.display = "none";
    document.getElementById("Chidistrictselect").style.display = "";
    document.getElementById("ChineseDistrictfuncButton").style.display = "";
    document.getElementById("engVerwithdistrict").style.display = "none";
    document.getElementById("chiVerwithdistrict").style.display = "none";
    
  }

}
var urlParams = new URLSearchParams(window.location.search);
var buttonId = urlParams.get('id');
function detail(place){
  if(buttonId == "en"){
      window.location.href = "detail.html?id=en&place=" + place;
  }
  else if(buttonId == "tc"){
      window.location.href = "detail.html?id=tc&place=" + place;
  }
  else {
      window.location.href = "detail.html?id=sc&place=" + place;
  }
}