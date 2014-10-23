document.write('<canvas id="c"></canvas>');
var ca = document.getElementById('c');
var c = ca.getContext('2d');
function resize () {
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;
}
var bodsty = document.body.style;
bodsty.padding = 0;
bodsty.margin = 0;
resize();
function delay (time, callback, lastTime) {
    var date = +new Date();
    var delayleft = time;
    delayleft -= date-lastTime;
    if (delayleft <= 0) {
        callback();
        console.log(delayleft);
    } else {
        setTimeout(function () {delay(delayleft, callback, date)}, 1);
    }
}
function rectanglered () {
    c.fillStyle = 'red';
    c.fillRect(0, 0, ca.width, ca.height);
    delay(1, rectangleblue, +new Date());
}
function rectangleblue () {
    c.fillStyle = 'blue';
    c.fillRect(0, 0, ca.width, ca.height);
    delay(1, rectangleorange, +new Date());
}
function rectangleorange () {
    c.fillStyle = 'orange';
    c.fillRect(0, 0, ca.width, ca.height);
    delay(1, rectanglegreen, +new Date());
}
function rectanglegreen () {
    c.fillStyle = 'green';
    c.fillRect(0, 0, ca.width, ca.height);
    delay(1, rectanglepurple, +new Date());
}
function rectanglepurple () {
    c.fillStyle = 'purple';
    c.fillRect(0, 0, ca.width, ca.height);
    delay(1, rectangleyellow, +new Date());
}
function rectangleyellow () {
    c.fillStyle = 'yellow';
    c.fillRect(0, 0, ca.width, ca.height);
    delay(1, rectanglered, +new Date());
}
rectanglered();
delay(5000, rectanglered, +new Date());
window.addEventListener('resize', resize, false);