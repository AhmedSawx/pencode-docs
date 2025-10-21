# Basic Shapes

This tutorial explores how to create and manipulate basic shapes in PenCode. We will focus on the `Rectangle` and `Line` vector objects, which are fundamental to creating any drawing.

## The Rectangle

The `Rectangle` object is the simplest way to draw a square or rectangle on the canvas. It serves as a great starting point for understanding how objects are placed and styled.

### Basic Rectangle

As we saw in the "Your First Drawing" tutorial, you can create a rectangle with a specific position and color.

```pencode
// A red square at the center of the canvas
Rectangle(x: -25, y: -25, width: 50, height: 50, color: 'red')
```

### Multiple Rectangles

To draw multiple objects, you simply separate their definitions with a comma. This allows you to build up a scene object by object.

```pencode
// A blue square offset to the top-left
Rectangle(x: -75, y: -75, width: 50, height: 50, color: 'blue'),

// A green square offset to the bottom-right
Rectangle(x: 25, y: 25, width: 50, height: 50, color: 'green')
```

This code will draw two squares at different positions on the canvas.

## The Line

The `Line` object is used to draw a straight line between two points. It is essential for creating connections, outlines, and more complex geometric patterns.

### Basic Line

A line is defined by a starting point (`x`, `y`) and an ending point (`x2`, `y2`).

```pencode
// A black line from the top-left quadrant to the bottom-right quadrant
Line(x: -100, y: -100, x2: 100, y2: 100)
```

### Creating Patterns with Lines

By combining multiple lines, you can create interesting patterns.

```pencode
// A simple starburst pattern
Line(x: 0, y: -100, x2: 0, y2: 100),
Line(x: -100, y: 0, x2: 100, y2: 0),
Line(x: -70, y: -70, x2: 70, y2: 70),
Line(x: -70, y: 70, x2: 70, y2: -70)
```

## Combining Shapes

The real power of PenCode comes from combining different objects to create a larger picture. You can list as many objects as you need.

```pencode
// A simple house made of a cube and lines for the roof
Rectangle(x: -25, y: 25, width: 50, height: 50, color: '#cccccc'),

// The roof is made of two lines
Line(x: -50, y: 0, x2: 0, y2: -50) SET Color('red'),
Line(x: 0, y: -50, x2: 50, y2: 0) SET Color('red')
```

Notice how we used the `SET Color('red')` modifier to make the roof lines red.

## Next Steps

Now that you know how to create basic shapes, try experimenting with different parameters and combining them in new ways. In the next tutorials, we will explore how to use brushes and create more advanced drawings.
