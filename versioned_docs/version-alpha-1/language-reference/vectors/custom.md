# Custom

Allows you to write raw p5.js code to create custom shapes and behaviors that are not available through the standard vector objects.

## Parameters

| Name   | Type | Description                                      |
| :----- | :--- | :----------------------------------------------- |
| `draw` | `any`  | A string containing the raw p5.js code to execute. |

## Usage

The `Custom` object is for advanced users who are familiar with p5.js. The code you provide in the `draw` parameter is executed directly. You have access to the p5.js instance through the `p` variable.

:::caution Important
You must prefix all p5.js functions with `p.` (e.g., `p.fill(255)`, `p.rect(10, 10, 50, 50)`).
:::

## Example

This example uses the `Custom` object to draw a triangle, a shape not provided as a standard vector object.

```pencode
Custom(draw: 'p.triangle(30, 75, 58, 20, 86, 75)')
```