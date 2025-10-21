# Layer

Assigns a vector object to a specific layer. Layers allow you to group objects and control their drawing order.

## Usage

The `Layer` modifier is used with the `SET` keyword. It accepts a single identifier as the name of the layer.

## Example

This example creates two layers, `background` and `foreground`, and places a cube on each.

```pencode
Layer(colorMode: 'RGB') AS background,
Layer(colorMode: 'RGB') AS foreground,

Rectangle(x: -15, y: -15, width: 50, height: 50) SET Layer('background'),
Rectangle(x: 25, y: 25, width: 50, height: 50) SET Layer('foreground')
```