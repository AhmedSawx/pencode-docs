# Layer (Vector Object)

Creates a new drawing layer. Layers are like transparent sheets that you can draw on. Objects can be assigned to different layers to control their drawing order and apply effects to specific groups of objects.

This is different from the `Layer` **modifier**, which assigns an object to a layer. This `Layer` **vector object** is what actually creates the layer itself.

## Parameters

| Name        | Type   | Description                                       |
| :---------- | :----- | :------------------------------------------------ |
| `colorMode` | `string` | The color mode for the layer (e.g., 'RGB', 'HSB'). |

## Example

This example creates two layers, `background` and `foreground`, and then uses the `Layer` modifier to place objects on them.

```pencode
// Create the layers first and give them names
Layer(colorMode: 'RGB') AS background,
Layer(colorMode: 'RGB') AS foreground,

Rectangle(x: -15, y: -15, width: 50, height: 50) SET Layer('background'),

// Assign another rectangle to the foreground layer
Rectangle(x: 25, y: 25, width: 50, height: 50) SET Layer('foreground')
```
