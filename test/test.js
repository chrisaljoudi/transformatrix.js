var assert = require("assert");
var Matrix = require("../index.js");

describe("Matrix", function() {
	describe("Create a 'blank' Matrix and transform point", function() {
		var m = new Matrix();
		var point = [5, 10];
		it("should be in default state", function() {
			assert.deepEqual(m.m, [1, 0, 0, 1, 0, 0]);
		});
		it("should leave the point as-is", function() {
			assert.deepEqual(m.transformPoint(point[0], point[1]), point);
		});
	});
	describe("Create a 'blank' Matrix, scale, and transform point", function() {
		var m = new Matrix();
		var point = [5, 10];
		m.scale(2, 2);
		it("should scale the point by 2x", function() {
			assert.deepEqual(m.transformPoint(point[0], point[1]), [point[0] * 2, point[1] * 2]);
		});
	});
	describe("Create a 'blank' Matrix, scale, and transform vector", function() {
		var m = new Matrix();
		var point = [50, 50];
		m.scale(3, 2);
		it("should scale the point by 2x", function() {
			assert.deepEqual(m.transformVector(point[0], point[1]), [point[0] * 3, point[1] * 2]);
		});
	});
});
