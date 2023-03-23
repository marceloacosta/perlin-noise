// Declare global variables for increment and start
var inc = 0.05;
var start = 0;

// Set up the canvas
function setup() {
    createCanvas(400, 400);
}

// Main drawing function
function draw() {
    // Set background color
    background(51);

    // Set stroke color
    stroke(255);

    // Do not fill the shape
    noFill();

    // Begin drawing the shape
    beginShape();

    // Initialize xoff variable
    var xoff = start;

    // Loop through the width of the canvas
    for (var x = 0; x < width; x++) {
        stroke(255);

        // Calculate the y value using Perlin noise
        var y = noise(xoff) * height;

        // Set the vertex of the shape
        vertex(x, y);

        // Increment xoff
        xoff += inc;
    }

    // End drawing the shape
    endShape();

    // Increment start
    start += inc;

    // Set fill color for the text
    fill(255);

    // Display text "pago facil" at the specified position
    text("Hello Perlin", x - 100, y);
}