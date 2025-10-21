# Mirror

Mirrors an object across a given origin point and axis. If the `x` and `y` parameters are not provided, it uses the object's own starting (x, y) coordinates as the origin for the mirror.

## Usage

The `Mirror` modifier is used with the `SET` keyword.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | `Number` | The x-coordinate of the origin point for the mirror. |
| `y` | `Number` | The y-coordinate of the origin point for the mirror. |
| `axis` | `string` | The axis to mirror across. Can be `'horizontal'` or `'vertical'`. |

## Example

```pencode
// Create a line and then mirror it across the point (0,0) on the vertical axis
Line(x: 10, y: 20, x2: 80, y2: 50) SET Mirror('x: 0, y: 0, axis: "vertical"')
```
