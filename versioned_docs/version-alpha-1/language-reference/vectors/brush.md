# Brush

Sets the active brush for subsequent drawing commands. This object does not draw anything itself, but it affects how other objects like `Line` and `Rectangle` are rendered.

## Parameters

| Name  | Type   | Description                               |
| :---- | :----- | :---------------------------------------- |
| `type`  | `string` | The name of the brush to use (e.g., 'pen', 'spray'). |
| `color` | `string` | The color of the brush.                   |
| `size`  | `Number` | The size or thickness of the brush.       |

## Example

This example sets the brush to a large, red `spray` brush and then draws a line with it.

```pencode
Brush(type: 'spray', color: 'red', size: 20),
Line(x: -100, y: 0, x2: 100, y2: 0)
```
