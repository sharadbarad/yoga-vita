// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// For menu bar in mobile 
$('.menu-icon').click(function() {
    $('.sidebar').css('display', 'block');
});

$('.close-icon').click(function() {
    $('.sidebar').css('display', 'none');
});


// Animations when reach at element 
// For training centers
var effectApplied = [];

$('.training-center').waypoint(function(direction) {
    var $element = $(this.element);
    if(effectApplied.indexOf($element[0]) === -1){
        $element.addClass('scale');
        effectApplied.push($element[0]);

        // Remove the class after a specific time
        setTimeout(function() {
            $element.removeClass('scale');
        }, 200);
    }

}, {
    offset: '45%'
});

// For pricing cards
var effectApplied_price = [];

$('.plan').waypoint(function(direction) {
    var $element = $(this.element);
    if(effectApplied_price.indexOf($element[0]) === -1){
        $element.addClass('highlight');
        effectApplied_price.push($element[0]);

        // Remove the class after a specific time
        setTimeout(function() {
            $element.removeClass('highlight');
        }, 300);
    }

}, {
    offset: '40%'
});