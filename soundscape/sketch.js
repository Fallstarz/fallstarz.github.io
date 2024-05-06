
let riverSound;
let userHasClicked = false;
let metalSound


function preload() {
  riverSound = loadSound('assets/river.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background('hotpink');

  if (userHasClicked == false) {
    text('Click to start', width / 2, height / 2)
  } else {

    background('blue')

    if(riverSound.isPlaying() == false) {
      riverSound.play();
    }

    let targetVolumeRiver = map(
      mouseX,
      0,
      width,
      0,
      20
    )
    riverSound.setVolume (targetVolume)

  }
}

  function mouseClicked() {
    userHasClicked = true;
  }
