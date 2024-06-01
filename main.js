function preload() {

}

function setup() {
    canvas = createCanvas(700,680);
	canvas.parent("canvas")
	video= createCapture(VIDEO)
	video.size(700, 680)
	video.parent("canvas")
	poseNet= ml5.poseNet(video, modelLoaded)
	poseNet.on("pose", gotPoses)
}

function modelLoaded() {
  console.log("model loaded")
}

function draw() {

}
