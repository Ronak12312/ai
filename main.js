rx=0;
ry=0;
lx=0;
ly=0;
song="";
function preload(){
    song=loadSound("h.mp3");
}
function p(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,ml);
    posenet.on("pose",gotresults);
}
function ml(){
    console.log("posenet loaded");
}
function draw(){
    image(video,0,0,600,500);
}
function gotresults(results){
if(results.length>0){
    console.log(results);
    rx=results[0].pose.rightWrist.x;
    ry=results[0].pose.rightWrist.y;
    console.log(rx+"      "+ry);
    lx=results[0].pose.leftWrist.x;
    ly=results[0].pose.leftWrist.y;
    console.log(lx+"      "+ly);
}
}