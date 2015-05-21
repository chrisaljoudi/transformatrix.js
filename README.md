# transformatrix.js [![Build Status](https://travis-ci.org/chrisaljoudi/Queue.svg?branch=master)](https://travis-ci.org/chrisaljoudi/transformatrix.js)
A lightweight, fast transformation matrix implementantion in JavaScript.

## What?

**transformatrix.js** enables you you to track the transformation matrix of a 2D plane by applying the transformation just as you would, for example, on an HTML5 `<canvas>` context.

## Installation

```javascript
npm install node-transform-matrix
```

It's recommended you use [browserify](http://browserify.org) if you're targeting browsers, but you can also simply drop in the main `.js` file which will export `Matrix` globally.

## Usage

First, import with:

```javascript
var Matrix = require("transformatrix");
```

The module provides the following:

Syntax             | Description
-------------------|-----------------------------------------------------------------------
**`new Matrix()`** | creates and returns a new, untouched transformation Matrix
**`m.translate(x, y)`** | applies a translation to Matrix `m`
**`m.scale(scaleX, scaleY)`** | scales Matrix `m` by `scaleX`, `scaleY`
**`m.rotate(radians)`** | rotates Matrix `m` by the specified number of `radians`
**`m.inverse()`** | returns a Matrix that is the inverse of `m`
**`m.multiply(n)`** | returns a Matrix that is the product of `m` and `n`
**`m.reset()`** | resets Matrix `m` to the default, transformation-free state
**`m.transformPoint(x, y)`** | transforms the point `(x, y)` through `m`, returns `[new_x, new_y]`
**`m.transformVector(x, y)`** | transforms the vector `(x, y)` through `m`, returns `[new_x, new_y]`


**Tip:** where appropriate, the functions above return a `Matrix` instance, which means you can chain them: `m.inverse().multiply(2)`.

## Who made this?

This module was written with care and love by [Chris](https://chrismatic.io/).

## Contribution

* All contributions are welcome — thanks for helping make **transformatrix.js** better.

## License

**transformatrix.js** is released under the MIT License. [See LICENSE](LICENSE).
