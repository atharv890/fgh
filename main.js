left_WritsX=0;
right_Wrist_X=0;
difference=0;
function setup(){
camera=createCapture(VIDEO);
camera.size(550,550);
canvas=createCanvas(500,450);
canvas.position(600,250);
library=ml5.poseNet(camera,modelloaded);
library.on("pose",hi);
text("Atharv",100,200);
}
function draw(){
background("white");
}
function modelloaded(){
    console.log("Model is Loaded");
}
function hi(results){
if(results){
    console.log(results);
left_WritsX=results[0].pose.leftWrist.x;
right_WritsX=results[0].pose.rightWrist.x;
difference=Math.floor(left_WritsX-right_Wrist_X);
textSize(difference);
console.log("differnce");
}
}
