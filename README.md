# raster: _a minimalist SVG to PNG inline rasterizer_

I generate a few `svg`s with d3.js dynamically. What if someone wants to save that `svg`?.

Rasterizing, in this context is the process of converting `svg` (vector graphics) to `png` (bitmap graphics). It's not a trivial conversion because the processes of drawing the two sorts of graphics rely on different rendering methods. Luckily, we can use HTML5 to our advantage to make a very quick conversion.

The methods used by this tool are heavily derivative of [this Atomic Object article](https://spin.atomicobject.com/2014/01/21/convert-svg-to-png/) by Eric Shull, who used some of Mike Bostock's code, found [here](https://bl.ocks.org/mbostock/6466603).

This rasterizer does not take into account CSS styles and therefore only recognized the built in 'inline' styles. Including CSS is on the TODO, however.

Note: this script does **not** support old versions of IE as it relies pretty heavily on ES6 keywords. This could be easily changed, or feel free to run it through [Babel](https://babeljs.io/).

## Usage:

```js
window.rasterize(element, 'name');
//or
rasterize(element, 'name');
```

Where element is the svg element and name is the desired name of the output (download). **N.B.**: `.png` will be appended to name. There is no need to write `'name.png'`, and doing so will result in some strange names.

#### TODO

- [x] rasterize inline.
- [ ] rasterize _with_ CSS styles.
