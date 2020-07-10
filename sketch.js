var inc = 0.05;
var start = 0;

function setup() {
    createCanvas(400,400)
}

function draw() {
    
    
    
    background(51);
    stroke(255);
    noFill();
    beginShape();
    var xoff = start;
    
for (var x = 0; x < width; x++){
    stroke(255);
    //var y = random(height);
    
    var y = noise(xoff) * height;
   
    vertex(x,y);
    
   
    xoff += inc;
    
}
    

    endShape();
    
     start += inc;
    fill(255);
    text("pago facil",x-100,y);
    
    
}
    

    
/*    var x = map(noise(xoff1),0,1,0,width);
    var y = map(noise(xoff2),0,1,0,height);
    xoff1 += 0.01;
    xoff2 += 0.01;
    
    ellipse(x,y,24,24);
    */
    
    
    
    


