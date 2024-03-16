// For menu bar in mobile 
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.sidebar').style.display='block';
});

document.querySelector('.close-icon').addEventListener('click', function() {
    document.querySelector('.sidebar').style.display='none';
});