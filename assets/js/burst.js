const DURATION = 600

const smoke = new mojs.Burst({
  left: 0, top: 0,
  degree:   0,
  count:    3,
  radius:   { 0: 100 },
  children: {
    fill:       '#2A0000',
    pathScale:  'rand(0.5, 1)',
    radius:     'rand(12, 15)',
    swirlSize:  'rand(10, 15)',
    swirlFrequency: 'rand(2, 4)',
    degreeShift: 180,
    direction:  [ 1, -1 ],
    duration:   `rand(${1*DURATION}, ${2*DURATION})`,
    delay:      'rand(0, 75)',
    easing:     'quad.out',
    isSwirl:    true,
    isForce3d:  true,
  }
});


document.addEventListener( 'click',  (e) => {
  smoke
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});

function getRandom(min,max)
{
   return Math.random()*(max-min) + min;
}

function generateBurst()
{

  x_coord = getRandom(10,window.innerWidth-10);
  y_coord = getRandom(10,window.innerHeight-10);

  smoke
    .tune({ x: x_coord, y: y_coord })
    .generate()
    .replay();

};

//setInterval(generateBurst, 1000);