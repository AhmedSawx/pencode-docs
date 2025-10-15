# Using Brushes

PenCode's brush system, powered by the `p5.brush` library, allows you to create drawings with a more organic and textured feel. This tutorial covers how to use the built-in brushes to add style to your creations.

## The `Brush` Object

To use a brush, you need to create a `Brush` object. This object acts as a global setting, telling PenCode which brush to use for all subsequent drawing commands until a new `Brush` object is defined.

### Selecting a Brush

You select a brush by passing its name to the `type` parameter. For example, to use the standard `pen` brush, you would write:

```pencode
Brush(type: 'pen')
```

This statement doesn't draw anything itself; it sets the active brush for other objects, like `Line` and `Cube`.

### Brush Properties

Beyond the type, you can customize the `color` and `size` of the brush.

```pencode
// Set the brush to a blue pen with a size of 5
Brush(type: 'pen', color: 'blue', size: 5)
```

- `color`: Defines the color of the brush strokes.
- `size`: Controls the thickness of the brush strokes.

## Example: Drawing with a Brush

Let's see how the `Brush` object affects other shapes. The `Brush` statement should come before the shapes you want it to apply to.

```pencode
// Set the active brush
Brush(type: 'pen', color: 'green', size: 10),

// This line will be drawn with the green pen
Line(x: -100, y: 0, x2: 100, y2: 0),

// This cube will also be drawn with the green pen
Cube(x: 0, y: 0)
```

## Changing Brushes

If you want to use a different brush for another part of your drawing, simply add another `Brush` statement.

```pencode
// Draw a thick green line
Brush(type: 'pen', color: 'green', size: 10),
Line(x: -100, y: -50, x2: 100, y2: -50),

// Switch to a thin red spray paint for the next shape
Brush(type: 'spray', color: 'red', size: 2),
Cube(x: 0, y: 50)
```

## Available Brushes

PenCode comes with a variety of built-in brushes, such as `pen`, `spray`, `marker`, and more. You can see a complete list of available brushes by navigating to the **Brushes** tab in the workspace.
