---
sidebar_position: 1
---

# Your First Drawing

:::note Before You Start
This tutorial assumes you have PenCode installed and running. If you haven't installed it yet, please follow the [Installation Guide](./installation) first.
:::

Welcome to PenCode! This tutorial provides a detailed, step-by-step guide to creating your first simple drawing. We will draw a red square on the canvas.

## Step 1: Open a Project

First, you need a workspace to create your art. From the Home screen, click the "New Project" button. A dialog will appear, prompting you for a project name and canvas size.

For this tutorial, you can name your project "My First Drawing" and leave the canvas size as the default. Click "Create Project" to enter the workspace.

![New Project Dialog](/img/new-project-dialog.png)

## Step 2: Write the Code

The workspace is divided into two main panels. The left panel is the text editor where you will write your PenCode script, and the right panel is the canvas where your drawing will appear.

![Workspace Layout](/img/workspace-layout.png)

In the text editor, type the following code:

```pencode
Rectangle(x: -25, y: -25, width: 50, height: 50, color: 'red')
```

Let's break down this single line of code:

- `Rectangle`: This is a **vector object**. It tells PenCode that you want to draw a rectangle.
- `(...)`: The parentheses contain the **parameters** for the object.
- `x: -25, y: -25`: These are **named parameters** that define the position of the rectangle's top-left corner. In PenCode, the coordinate system's origin `(0, 0)` is at the center of the canvas, so an `x` of -25 and `y` of -25 centers a 50x50 rectangle.
- `width: 50, height: 50`: These parameters define the size of the rectangle.
- `color: 'red'`: This is another named parameter that sets the stroke color of the rectangle to red.

## Step 3: Create the Drawing

Once you have written the code, you need to tell PenCode to draw it. In the top right of the canvas panel, you will find a "Create" button. Click it.

You should now see a red square rendered in the center of your canvas. Congratulations, you have successfully created your first piece of generative art with PenCode!

<!--![First Drawing - Red Square](/img/first-drawing-red-square.png)-->

## Step 4: Experiment and Iterate

Creative coding is all about experimentation. Now that you have a basic shape, try modifying its parameters to see what happens.

- **Change the position:** Modify the `x` and `y` values. Try `x: 100` or `y: -50`.
- **Change the color:** Try a different color name like `'blue'`, or a HEX code like `'#00ff00'` for green.

After each change, click the "Create" button again to update the canvas and see your changes reflected.

This iterative process of writing code, creating, and observing is central to the workflow in PenCode.
