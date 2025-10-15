# Field

Applies a vector field effect to the drawing. This can be used to create distorted, wavy, or turbulent effects.

## Parameters

| Name | Type   | Description                             |
| :--- | :----- | :-------------------------------------- |
| `type` | `string` | The name of the field to use (e.g., 'perlin'). |

## Example

This example applies a 'perlin' noise field to the drawing, which will affect all subsequent shapes.

```pencode
Field(type: 'perlin'),

// This line will be distorted by the Perlin noise field
Line(x: -100, y: 0, x2: 100, y2: 0)
```
