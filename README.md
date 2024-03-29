# Perlin Noise

At its core, Perlin noise is a technique for generating smooth, natural-looking noise that resembles patterns found in nature. It can be thought of as a way to create random values that change gradually, rather than abruptly, across a range.

Imagine you're asked to create a random, wavy line on paper. If you were to use purely random values for the height of the line at each point, the result would be a chaotic, jagged line. This doesn't look natural, as most patterns in nature have some level of continuity and smoothness.

Perlin noise is like a controlled randomness that produces more organic-looking patterns. Instead of having sharp, sudden changes, the values generated by Perlin noise change gradually and smoothly. When you use Perlin noise to create a wavy line, the line appears more like rolling hills or waves, which is more representative of natural patterns.

To achieve this, Perlin noise generates random gradient vectors in a grid and smoothly interpolates between them based on the position of the points in the grid. This ensures a continuous, gradual transition between values, mimicking the smooth variations often seen in natural phenomena.

In summary, Perlin noise is a technique for generating smooth, gradual noise that looks more natural and organic than purely random noise, making it a popular choice for creating textures, animations, and patterns that resemble those found in nature.

## The Script

This code is a simple p5.js sketch that creates a canvas of 400x400 pixels and displays a wavy line generated using Perlin noise. It also displays the text "Hello Perlin" on the canvas.

The setup function initializes the canvas, while the draw function handles the actual drawing of the wavy line and text.

The wavy line is generated by looping through the width of the canvas and using the Perlin noise function to calculate the y value for each x value. The increment inc is used to control the smoothness of the noise function. The larger the increment, the more jagged the wavy line will be. The start variable is incremented after each frame to create an animated effect, making the wavy line appear to move.

The text "Hello Perlin" is displayed at the end of the wavy line using the text function, with a fill color of white (255).

## Usefulness
This is completely useless.