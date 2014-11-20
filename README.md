# node-transform-matrix [![Build Status](https://travis-ci.org/chrisaljoudi/Queue.svg?branch=master)](https://travis-ci.org/chrisaljoudi/node-transform-matrix)
A lightweight, fast transformation Matrix module for node.js and the browser.

## What?

This module enables you to track the transformation matrix of a 2D plane by applying the transformation just as you would on an HTML5 `<canvas>`.

## Installation

```javascript
npm install node-transform-matrix
```

## Usage

First, import with:

```javascript
var Matrix = require("node-transform-matrix");
```

Then you can use the following to interact with the module:

* `new Matrix()` creates and returns a new Matrix initialized to a default, untouched transformation.
* `m.translate(x, y)` applies a translation (`x`, `y`) to Matrix `m`.
* `m.scale(scaleX, scaleY)` scales Matrix `m` by (`scaleX`, `scaleY`).
* `m.rotate(radians)` rotates Matrix `m` by the specified number of `radians`.
* `m.inverse()` returns a Matrix that is the inverse of `m`.
* `m.multiply(n)` returns a Matrix that is the product of `m` and `n`.
* `m.reset()` resets Matrix `m` to the default, transformation-free state.

## Contribution

* All contributions are welcome — thanks for helping make node-transform-matrix better.

## License

[New BSD](LICENSE).
