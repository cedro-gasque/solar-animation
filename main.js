document.write('<canvas height="600" width="600" id="c"></canvas>');
document.body.style.padding = 0;
document.body.style.margin = 0;
var ca = document.getElementById('c');
var line = false;
var c = ca.getContext('2d');
var planets = [
    {
        color: 'blue',
        r: 0.5,
        distance: 42,
        angle: 0,
        speed: (0.005),
        moons:[]
    }, {
        color: 'red',
        r: 0.5,
        distance: 78,
        angle: 0,
        speed: (-0.005),
        moons:[]
    }, {
        color: 'purple',
        r: 0.5,
        distance: 5,
        angle: 0,
        speed: (-0.002),
        moons:[]
    }, {
        color: 'limegreen',
        r: 0.5,
        distance: 21,
        angle: 0,
        speed: (0.099),
        moons:[]
    }, {
        color: 'yellow',
        r: 0.5,
        distance: 48,
        angle: 0,
        speed: (-0.007),
        moons:[]
    }, {
        color: 'green',
        r: 0.5,
        distance: 200,
        angle: 0,
        speed: (-0.05*Math.PI/3),
        moons: [/*, {
                r: 4,
                distance: 30,
                angle: 0,
                speed: (1/11)
            }, {
                r: 4,
                distance: 30,
                angle: Math.PI,
                speed: (1/11)
            }, {
                r: 4,
                distance: 40,
                angle: 0,
                speed: (1/22)
            }, {
                r: 4,
                distance: 40,
                angle: Math.PI,
                speed: (1/22)
            }, {
                r: 4,
                distance: 50,
                angle: 0,
                speed: (1/44)
            }, {
                r: 4,
                distance: 50,
                angle: Math.PI,
                speed: (1/44)
            }, {
                r: 4,
                distance: 60,
                angle: 0,
                speed: (1/88)
            }, {
                r: 4,
                distance: 60,
                angle: Math.PI,
                speed: (1/88)
            }, {
                r: 15,
                distance: 100,
                angle: 0,
                speed: (1/132)
            }, {
                r: 15,
                distance: 100,
                angle: Math.PI,
                speed: (1/132)
            }, {
                r: 20,
                distance: 100,
                angle: Math.PI/2,
                speed: (1/132)
            }, {
                r: 20,
                distance: 100,
                angle: -Math.PI/2,
                speed: (1/132)
            }*/
        ]
    }/*, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: 0,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: Math.PI/2,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: Math.PI,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: -Math.PI/2,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: Math.PI*3/4,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: Math.PI*5/4,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: Math.PI/4,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }, {
        color: 'red',
        r: 0,
        distance: 100,
        angle: -Math.PI/4,
        speed: 1/17,
        moons:[
            {
                r: 10,
                distance: 10,
                angle: 0,
                speed: (1/11)
            }, {
                r: 10,
                distance: 10,
                angle: Math.PI,
                speed: (1/11)
            }
        ]
    }*/
];
c.fillRect(0,0,ca.width,ca.height);
function update () {
    c.save();
    c.translate(ca.width/2, ca.height/2);
    c.rotate(planets[0].angle);
    c.fillStyle = planets[0].color;
    c.beginPath();
    c.arc(0, planets[0].distance, planets[0].r, 0, Math.PI*2);
    c.fill();
    c.translate(0, planets[0].distance);
    c.rotate(-planets[0].angle);
    planets[0].angle += planets[0].speed;
    c.rotate(planets[1].angle);
    c.fillStyle = planets[1].color;
    c.beginPath();
    c.arc(0, planets[1].distance, planets[1].r, 0, Math.PI*2);
    c.fill();
    c.translate(0, planets[1].distance);
    c.rotate(-planets[1].angle);
    planets[1].angle += planets[1].speed;
    c.rotate(planets[2].angle);
    c.fillStyle = planets[2].color;
    c.beginPath();
    c.arc(0, planets[2].distance, planets[2].r, 0, Math.PI*2);
    c.fill();
    c.translate(0, planets[2].distance);
    c.rotate(-planets[2].angle);
    planets[2].angle += planets[2].speed;
    c.rotate(planets[3].angle);
    c.fillStyle = planets[3].color;
    c.beginPath();
    c.arc(0, planets[3].distance, planets[3].r, 0, Math.PI*2);
    c.fill();
    c.translate(0, planets[3].distance);
    c.rotate(-planets[3].angle);
    planets[3].angle += planets[3].speed;
    c.rotate(planets[4].angle);
    c.fillStyle = planets[4].color;
    c.beginPath();
    c.arc(0, planets[4].distance, planets[4].r, 0, Math.PI*2);
    c.fill();
    c.translate(0, planets[4].distance);
    c.rotate(-planets[4].angle);
    planets[4].angle += planets[4].speed;
    for (var p = 5; p < planets.length; p++) {
        c.rotate(planets[p].angle);
        c.fillStyle = planets[p].color;
        c.beginPath();
        c.arc(0, planets[p].distance, planets[p].r, 0, Math.PI*2);
        c.fill();
        c.translate(0, planets[p].distance);
        c.rotate(-planets[p].angle);
        for (var m = 0; m < planets[p].moons.length; m++) {
            c.fillStyle = planets[p].moons[m].color || 'white';
            c.beginPath();
            c.rotate(planets[p].moons[m].angle);
            c.arc(0, planets[p].moons[m].distance, planets[p].moons[m].r, 0, Math.PI*2);
            c.rotate(-planets[p].moons[m].angle);
            planets[p].moons[m].angle += planets[p].moons[m].speed;
            c.fill();
        }
        c.rotate(planets[p].angle);
        c.translate(0, -planets[p].distance);
        c.rotate(-planets[p].angle);
        planets[p].angle += planets[p].speed;
    }
    c.restore();
}
function loop () {for (var i = 0; i < 100; i++) update(); requestAnimationFrame(loop);}
requestAnimationFrame(loop);
function resize (e) {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    c.fillStyle = 'black';
    c.fillRect(0,0,this.width,this.height);
}
resize.bind(ca)();
window.addEventListener('resize', resize.bind(ca), false);