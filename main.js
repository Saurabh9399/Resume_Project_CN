// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');


// for (var i = 0; i < navMenuAnchorTags.length; i++){
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionID);
        

//         var interval = setInterval(function () {

//          var targetSectionCoordinates = targetSection.getBoundingClientRect();

//             if (targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//         }, 20);

//     });
// }


// 2nd method

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        interval = setInterval( scrollVertically, 20,targetSection);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

//Handle scroll event on window 
// Check that skills sections container is visible or not
// Ensure that initial width of colored skill divs is zero -> initialise
// Start animation on every skill -> increase skill width from 0 to skill width
// Store skill level -> HTML with the help of data attributes

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);

function checkScroll() {
    
}