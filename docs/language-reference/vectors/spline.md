# Spline

Draws a curved line through a series of two or more points.

## Parameters

| Name        | Type   | Description                               |
| :---------- | :----- | :---------------------------------------- |
| `color`     | `string` | The color of the spline. Defaults to `black`. |
| `weight`    | `Number` | The thickness of the spline. Defaults to `1`. |
| `curvature` | `Number` | The amount of curve in the spline. Defaults to `0.5`. |

## Variadic Parameters (Points)

A `Spline` requires at least two points to be defined. You can add as many points as you like.

| Name | Type   | Description                             |
| :--- | :----- | :-------------------------------------- |
| `x`  | `Number` | The x-coordinate of a point on the spline. |
| `y`  | `Number` | The y-coordinate of a point on the spline. |
| `p`  | `Number` | The pressure at this point (optional).  |

## Example

```pencode
Spline(x1: 10, y1: 90, x2: 50, y2: 10, x3: 90, y3: 90, color: 'blue', weight: 2)
```