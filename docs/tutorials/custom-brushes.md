# Custom Brushes

One of the most powerful features of PenCode is the ability to create your own custom brushes. This allows you to go beyond the built-in brushes and define unique textures and shapes for your artwork. This guide provides a more detailed look at the Brush Editor.

## The Brush Editor

To create a custom brush, navigate to the **Brushes** tab in the workspace and click **Create New Brush**. After giving your brush a name, you will be taken to the Brush Editor.

In the Brush Editor, you can define the properties of your brush, including its shape, rotation, and pressure sensitivity.

### Brush Tip Code

The core of a custom brush is its **Tip Code**. This is a snippet of JavaScript code that defines the geometry of the brush tip. The code is executed within a p5.js environment, giving you access to the p5.js drawing API.

You have access to a special `p5.Graphics` object named `_m`. You draw your brush tip onto this graphics buffer.

**Example: A simple circular brush tip**

```javascript
// The _m object is a p5.Graphics buffer.
// Its width and height are determined by the brush's 'weight' property.
_m.ellipse(0, 0, _m.width, _m.height);
```

**Example: A square brush tip**

```javascript
// Use rect mode to draw from the center
_m.rectMode(_m.CENTER);
_m.rect(0, 0, _m.width, _m.height);
```

### Brush Properties

In addition to the tip code, you can also adjust various properties of the brush in the editor's UI:

- **Weight:** The size of the brush tip.
- **Opacity:** The transparency of each brush stamp.
- **Spacing:** The distance between each application of the brush tip. A lower value creates a smoother line.
- **Rotation:** Controls how the brush tip rotates as you draw. `natural` follows the direction of the mouse, while `random` provides chaotic rotation.
- **Vibration:** Adds a random offset to each brush stamp, creating a shaky effect.

### Pressure Sensitivity

The **Pressure** section allows you to control how the brush responds to input from a pressure-sensitive stylus.

- **Min/Max:** These values control the range of the brush's size or opacity based on pressure. For example, a min/max of `[0.5, 2]` for weight would make the brush line thinner with light pressure and thicker with heavy pressure.

## Using Your Custom Brush

Once you have created and saved your custom brush (the editor saves automatically), you can use it in your drawings just like any other brush, by referencing the name you gave it.

```pencode
// Assuming you created a brush named 'my-cool-brush'
Brush(type: 'my-cool-brush', color: 'purple', size: 20),

// Draw a line with your custom brush
Line(x: 0, y: 0, x2: 100, y2: 0)
```
