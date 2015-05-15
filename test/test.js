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
  describe("Create a 'blank' Matrix, execute transformation and return self", function() {
    var m = new Matrix();
    it("after translate, returned should be instance of Matrix", function() {
      assert(m.translate(10,10) instanceof Matrix,'translate function returns instance of Matrix');
    });
    it("after scale, returned should be instance of Matrix", function() {
      assert(m.scale(2,2) instanceof Matrix,'scale function returns instance of Matrix');
    });
    it("after rotate, returned should be instance of Matrix", function() {
      assert(m.rotate(Math.PI / 180 * 45) instanceof Matrix,'rotate function returns instance of Matrix');
    });
    it("after inverse, returned should be instance of Matrix", function() {
      assert(m.inverse() instanceof Matrix,'inverse function returns instance of Matrix');
    });
    it("after multiply, returned should be instance of Matrix", function() {
      assert(m.multiply(new Matrix()) instanceof Matrix,'multiply function returns instance of Matrix');
    });
    it("after reset, returned should be instance of Matrix", function() {
      assert(m.reset() instanceof Matrix,'reset function returns instance of Matrix');
    });
  });
  describe("Create a 'blank' Matrix, execute transformation in chain", function() {
    var m = new Matrix();
    it("execute translate, scale, rotate in chain", function() {
      assert.deepEqual(
        m.translate(10,10)
        .scale(2,2)
        .rotate(Math.PI / 180 * 45).m,
        [ 1.4142135623730951,
          1.414213562373095,
          -1.414213562373095,
          1.4142135623730951,
          10,
          10 ]
        );
    });
  });
});
