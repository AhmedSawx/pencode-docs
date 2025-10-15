# Layer

Assigns a vector object to a specific layer. Layers allow you to group objects and control their drawing order.

## Usage

The `Layer` modifier is used with the `SET` keyword. It accepts a single identifier as the name of the layer.

## Example

This example creates two layers, `background` and `foreground`, and places a cube on each.

```pencode
Layer(colorMode: 'RGB') AS background,
Layer(colorMode: 'RGB') AS foreground,

Cube(x: 10, y: 10) SET Layer('background'),
Cube(x: 50, y: 50) SET Layer('foreground')
```