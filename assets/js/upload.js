// upload.js
const $ = require('jquery');
// jquery hier notwendig, da sonst Fehler in Konsole angezeigt wird


/* 
#Kurswahl: zB GMM
#Kurstermin: zB Folge 3 (KW reicht nicht, da nicht alles wöchentlich vorkommt bzw. GMM mehrmals wöchentlich)

  <option value="AMSP">Allgemeinmedizinische Sprechstunde</option>
  <option value="ACSU">Alumni-Club Students Skill Update</option>
  <option value="DLT">Distance Learning Tertialfälle</option>
  <option value="GMM">Good Medical Morning</option>
  <option value="IFK">Interdisziplinäre Fallkonferenz 20S</option>
  <option value="KPSY">Konsil Psychiatrie</option>
  <option value="ANAT">Living Anatomy</option>
  <option value="NEUR">Neurokonsil</option>
  <option value="RTM">Radiologisches Team-Meeting</option>
  <option value="TACL">Talk in der Alumni-Club-Lounge</option>
  <option value="WAMB">Webambulanz</option>
*/

var kursdaten = {
    "AMSP":[ "KW1","KW2","KW3" ], 
    "ACSU":[ "ACSU1","ACSU2","ACSU3" ], 
    "DLT":[ "DLT1","DLT2","DLT3" ], 
    "GMM":[ "GMM vom Mo","GMM vom Mi","GMM vom Fr" ], 
    "IFK":[ "IFK1","IFK2","IFK3" ], 
    "KPSY":[ "KPSY1","KPSY2","KPSY3" ], 
    "ANAT":[ "ANAT1","ANAT2","ANAT3" ], 
    "NEUR":[ "NEUR1","NEUR2","NEUR3" ], 
    "RTM":[ "RTM1","RTM2","RTM3" ], 
    "TACL":[ "Talk 1 vom XX.XX.2020","Talk 2 vom XX.XX.2020","Talk 3" ], 
    "WAMB":[ "WAMB1","WAMB2","WAMB3" ]
};

// var kursdaten = JSON.parse(kursdaten_roh);


$(function(){
    $("#Kurswahl").on("change", function() {
        let ausgewaehlt = this.value; 
        $("#Kurstermin").empty();
        $.each(kursdaten[ausgewaehlt], function (index, value) { 
            $("#Kurstermin").append("<option>" + value + "</option>"); 
        });
    });
});