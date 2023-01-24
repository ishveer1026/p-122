function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(150,350);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0,0,640,580);
fill("blue");
stroke("green");
circle(0,0,100)
fill("green");
stroke("green");
rect(50,0,540,10)
fill("blue");
stroke("green");
circle(640,0,100)
fill("green");
stroke("green");
rect(50,470,540,10)
fill("blue");
stroke("green");
circle(640,480,100)
fill("green");
stroke("green");
rect(0,50,10,380)
fill("blue");
stroke("green");
circle(0,480,100)
fill("green");
stroke("green");
rect(630,50,10,380)
}
function take_snapshot(){
    save("image.jpg");
}
