# Color

Sets the color of an object. It accepts a color name, HEX, RGB, or HSL value.

## Usage

The `Color` modifier is used with the `SET` keyword to change the color of a vector object.

## Accepted Values

| Type          | Example                        |
| :------------ | :----------------------------- |
| Color Name    | `'red'`, `'blue'`, `'green'`        |
| HEX           | `'#ff0000'`, `'#00ff00'`            |
| RGB           | `'255,0,0'`, `'0,255,0'`            |
| Grayscale     | `'128'`                          |

## Example

```pencode
Cube(x: 50, y: 50) SET Color('#ff0000')
```