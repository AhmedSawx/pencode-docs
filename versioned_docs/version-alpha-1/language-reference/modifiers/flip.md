# Flip

Flips an object 'horizontally' or 'vertically' around its own center.

## Usage

The `Flip` modifier is used with the `SET` keyword. It accepts a single direction as a parameter.

## Accepted Values

| Value | Description |
| :--- | :--- |
| `'horizontal'` | Flips the object across a vertical line through its center. |
| `'vertical'` | Flips the object across a horizontal line through its center. |

## Example

```pencode
// Create a line and then flip it horizontally
Line(x: 10, y: 20, x2: 80, y2: 50) SET Flip('horizontal')
```
