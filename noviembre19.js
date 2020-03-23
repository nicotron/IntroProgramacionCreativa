var easycam;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  easycam = createEasyCam();
  // easycam = new Dw.EasyCam(this._renderer);
  // easycam = new Dw.EasyCam(this._renderer, {distance:300, center:[0,0,0]});
  // easycam = new Dw.EasyCam(this._renderer, {distance:300, center:[0,0,0], rotation:[1,0,0,0]});
}

function draw(){
  background(64);
  fill(255);
  box(200);
}
