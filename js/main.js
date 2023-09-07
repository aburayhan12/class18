var effect = document.getElementById('bulbOn');

effect.addEventListener('click', function(){
    var image = document.getElementById('bulb');
    image.setAttribute('src', 'image/pic_bulbon.gif');
});

var effect = document.getElementById('bulbOff');

effect.addEventListener('click', function(){
    var image = document.getElementById('bulb');
    image.setAttribute('src', 'image/pic_bulboff.gif');
});