
let meatgrinder;
let userHasClicked = false;
let pistatoma;


function preload() {
  meatgrinder = loadSound('assets2/meatgrinder.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  if (userHasClicked == false) {
    text('Click to start', width / 2, height / 2)
  } else {


    if(meatgrinder.isPlaying() == false) {
      meatgrinder.play();
    }

    let targetVolumeMeatgrinder = map(
      mouseX,
      0,
      width,
      0,
      20
    )
    meatgrinder.setVolume (targetVolume)

  }
}

  function mouseClicked() {
    userHasClicked = true;
  }
