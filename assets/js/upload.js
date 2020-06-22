// upload.js
const $ = require('jquery');

$(document).ready(function() {
    console.log('Das kommt aus upload.js');
});


/* 
#Kurswahl: zB GMM
#Kurstermin: zB Folge 3
*/

function kursTermineEinfuegen() {
    var hier = $("#hier");
    hier.text("nachher");
}

function clearDropdown(selectDropdown) {
    $(selectDropdown).empty();
}

// $("#Kurswahl").on("click", kursTermineEinfuegen); 
$("#hier").on("click", clearDropdown("#Kurswahl")); 