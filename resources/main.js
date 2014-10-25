var ca = document.getElementById('c');
var c = ca.getContext('2d');
var recording = {
    ramses: document.getElementById('ramsesRecording'),
    evie: document.getElementById('evieRecording')
};
function resize () {
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;
    c.fillStyle = 'black';
    c.fillRect(0, 0, ca.width, ca.height);
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
        requestAnimationFrame((function () {delay(this.delayleft, this.callback, this.date);}).bind({delayleft: delayleft, callback: callback, date: date}));
    }
}
var spaceship = new (function () {
    this.img = document.getElementById('spaceship');
    this.angle = 0;
    this.x = 0;
    this.draw = function (context) {
        context.save();
        context.translate(this.x, ca.height/2);
        context.rotate(this.angle);
        context.drawImage(this.image, -this.image.width/2, -this.image.height/2, this.image.width, this.image.height);
        context.restore();
    };
})();
var requestToken = 0;
function drawEvie () {
    c.fillStyle = 'black';
    c.fillRect(0, 0, ca.width, ca.height);
    c.fillStyle = 'yellow';
    c.beginPath();
    c.arc(ca.width/2, ca.height/2, 20, 0, Math.PI*2);
    c.fill();
    if (spaceship.x < ca.width/2-100) spaceship.x+=5;
    else {
        recording.evie.play();
        delay(recording.evie.length + 1000, function () {
            cancelAnimationFrame(requestToken);
            ramsesAnimation();
        }, +new Date());
    }
    spaceship.draw(c);
    return requestAnimationFrame(drawEvie);
}
function evieAnimation () {
    c.fillStyle = 'black';
    c.fillRect(0, 0, ca.width, ca.height);
    requestToken = drawEvie();
    
}
function ramsesAnimation () {
    
}
window.addEventListener('resize', resize, false);