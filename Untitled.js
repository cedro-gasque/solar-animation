document.write('<audio controls><source id="yolo"></audio>');
var yolo = document.getElementById('yolo');
var src = 'data:audio/wav;base64,';
var base64 = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','/','+'];
for (var i = 0; i < 1000000; i++) src += base64[Math.floor(Math.random()*64)];
yolo.src = src;