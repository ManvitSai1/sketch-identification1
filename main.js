function setup(){
    canvas=createCanvas( 280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = windows.speechsynthesis;


}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pMouseY, mouseX, mouseY);

    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
        
}
function gotResult(){
    if (error){
        console.error(error);

    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label : ' + results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence : ' + Math.round(results[o].confidedence * 100) + % ;

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);

}