 // Get the button
 let mybutton = document.getElementById("myBtn");
      
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 } 

// map
 $ = new jQuery.noConflict();
$(document).ready(function(){
$(".division").click(function(){
    var division_name = $(this).attr('id');
    var url = "https://en.wikipedia.org/wiki/"+division_name+"_District";
    var win = window.open(url, '_blank');
    win.focus();
})
})

//   tabnav
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
}

