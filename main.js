// alert("Well Come to my Website!")
// // get input values


body = document.querySelector('body');
body.addEventListener('click', function() {
    body.style.background = 'gold';
});


var education = document.getElementById('education');
education.addEventListener('click', function() {
    education.style.background = 'green';
});

var button = document.getElementById('button');
// button = document.querySelector('body');
button.addEventListener('click', function() {
    alert ('submit the content that you filled in the formulier')
});

