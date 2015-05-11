/** Draws a line on a canvas. */
function drawLine(canvas, x1, y1, x2, y2, color) {
	var ctx = canvas.getContext('2d');
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

/** Draws an unfilled circle on a canvas. */
function drawCircle(canvas, centerX, centerY, radius, color) {
	var ctx = canvas.getContext('2d');
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
	ctx.stroke();
}

/** Draws an unfilled triangle on a canvas. */
function drawTri(canvas, x1, y1, x2, y2, x3, y3, color) {
	var ctx = canvas.getContext('2d');
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x1, y1);
	ctx.stroke();
}

/** Draws an unfilled rectangle on a canvas. */
function drawRect(canvas, cornerX, cornerY, width, height, color) {
	var ctx = canvas.getContext('2d');
	ctx.strokeStyle = color;
	ctx.strokeRect(cornerX, cornerY, width, height);
}


/** Fills a circle on a canvas.
 * color - must be an HTML hex color string of the form: #rrggbb */
function fillCircle(canvas, centerX, centerY, radius, color) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
	ctx.fill();
}

/** Fills a triangle on a canvas.
 * color - must be an HTML hex color string of the form: #rrggbb */
function fillTri(canvas, x1, y1, x2, y2, x3, y3, color) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x1, y1);
	ctx.fill();
}

/** Fills a rectangle on a canvas.
 * color - must be an HTML hex color string of the form: #rrggbb */
function fillRect(canvas, cornerX, cornerY, width, height, color) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = color;
	ctx.fillRect(cornerX, cornerY, width, height);
}


/** Converts an integer to an HTML hex color string of the form: #rrggbb */
function makeColor1(n) {
	n &= (1<<24) - 1;
	var s = n.toString(16);
	var len = s.length;
	return '#00000'.substr(0, 7 - len) + s;
}


/** Converts three integers to an HTML hex color string of the form: #rrggbb */
function makeColor3(r, g, b) {
	return '#' + hexStr(r) + hexStr(g) + hexStr(b);
}

/** Converts an integer in the range [0, 255] to a two digit hex string. */
function hexStr(n) {
	return hexDigits[(n >>> 4) & 0x0f] + hexDigits[n & 0x0f];
}

var hexDigits = [
	'0', '1', '2', '3', '4', '5', '6', '7',
	'8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
];
