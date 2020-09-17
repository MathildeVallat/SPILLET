var n=0
let billeder=[];
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img_goal
let img_blaasejr;
let img_rodsejr;


function preload() {
	img1=loadImage('img1.jpg');
	img2=loadImage('img2.jpg');
	img3=loadImage('img3.jpg');
	img4=loadImage('img4.jpg');
	img5=loadImage('img5.jpg');
	img6=loadImage('img6.jpg');
	img7=loadImage('img7.jpg');
	img_goal=loadImage('img_goal.jpg')
	img_blaasejr=loadImage ('img8_blaasejr.jpg')
	img_rodsejr=loadImage('img8_rodsejr.jpg')
	billeder=[img1,img2,img3,img4,img_goal,img5,img6,img_goal,img7,img_blaasejr,img_rodsejr];
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
	image(billeder[n],50,100, 1000,700);
}

function keyPressed() {
  if (keyCode === 32) {
		n=n+1
  }
	if (n==9){
		n=0
	}
	if(keyCode === 66) {//blaa sejr
		n=9
	}
	if(keyCode === 82) {//rod sejr
		n=10
	}
}
