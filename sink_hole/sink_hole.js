function setup() {
	canvasX = 600;
	canvasY = 600;
	createCanvas(canvasX, canvasY);
	
	step_count = 0;
	increment = 0.04;
	color = 255;
}

function draw() {
	noLoop();
	noFill();
	background(255, 195, 0);
	
	while (color >= 0) {
		color = 255 - step_count;
		stroke(200 * (color/255), 200 * (color/255)**2, color, 100 * (1 - color/300));
		
		X = (canvasX / 2) + (canvasX * cos(color) * (color/255)**1.8 + (Math.random() * 15));
		Y = (canvasY / 7) + (canvasY * sin(color) * (color/255)**1.8 + (Math.random() * 15));
		perturbed_radius = (canvasX / 25) + (Math.random() * (canvasX / 50));
		
		ellipse(X, Y, perturbed_radius, perturbed_radius);
		
		step_count += increment;
	}
}