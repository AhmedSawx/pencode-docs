# Fill

Fills a closed shape with color and an optional bleed effect.

## Usage

The `Fill` modifier is used with the `SET` keyword. It only works on closed shapes like `Rectangle`.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `color` | `string` | The fill color (e.g., 'red', '#FF0000'). |
| `opacity` | `Number` | The opacity of the fill (0-255). |
| `bleed` | `Number` | The strength of the bleed effect (0-0.5). |
| `bleedDir` | `string` | The direction of the bleed ('in' or 'out'). |

## Example

```pencode
// Create a cube with a red fill and a slight bleed effect
Rectangle(x: -25, y: -25, width: 50, height: 50) SET Fill('color: "red", bleed: 0.2')
```
