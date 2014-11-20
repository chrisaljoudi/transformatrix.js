function Matrix() {
	this.reset();
}
Matrix.prototype.reset = function() {
	this.m = [1, 0, 0, 1, 0, 0];
};
Matrix.prototype.multiply = function(matrix) {
	var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
	var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];

	var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
	var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];

	var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
	var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];

	this.m[0] = m11;
	this.m[1] = m12;
	this.m[2] = m21;
	this.m[3] = m22;
	this.m[4] = dx;
	this.m[5] = dy;
};
Matrix.prototype.inverse = function() {
	var inv = new Matrix();
	inv.m = this.m.slice(0);
	var d = 1 / (inv.m[0] * inv.m[3] - inv.m[1] * inv.m[2]);
	var m0 = inv.m[3] * d;
	var m1 = -inv.m[1] * d;
	var m2 = -inv.m[2] * d;
	var m3 = inv.m[0] * d;
	var m4 = d * (inv.m[2] * inv.m[5] - inv.m[3] * inv.m[4]);
	var m5 = d * (inv.m[1] * inv.m[4] - inv.m[0] * inv.m[5]);
	inv.m[0] = m0;
	inv.m[1] = m1;
	inv.m[2] = m2;
	inv.m[3] = m3;
	inv.m[4] = m4;
	inv.m[5] = m5;
	return inv;
};
Matrix.prototype.rotate = function(rad) {
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	var m11 = this.m[0] * c + this.m[2] * s;
	var m12 = this.m[1] * c + this.m[3] * s;
	var m21 = this.m[0] * -s + this.m[2] * c;
	var m22 = this.m[1] * -s + this.m[3] * c;
	this.m[0] = m11;
	this.m[1] = m12;
	this.m[2] = m21;
	this.m[3] = m22;
};
Matrix.prototype.translate = function(x, y) {
	this.m[4] += this.m[0] * x + this.m[2] * y;
	this.m[5] += this.m[1] * x + this.m[3] * y;
};
Matrix.prototype.scale = function(sx, sy) {
	this.m[0] *= sx;
	this.m[1] *= sx;
	this.m[2] *= sy;
	this.m[3] *= sy;
};
Matrix.prototype.transformPoint = function(px, py) {
	var x = px;
	var y = py;
	px = x * this.m[0] + y * this.m[2] + this.m[4];
	py = x * this.m[1] + y * this.m[3] + this.m[5];
	return [px, py];
};
module.exports = Matrix;
