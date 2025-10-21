---
sidebar_position: 2
---

# Language Preview

This page provides an overview of the PenCode language syntax. Understanding these core concepts will help you create complex generative art.

## Basic Structure

A PenCode script is a series of statements separated by commas. Each statement defines a vector object, names it, establishes a parent-child relationship, or applies a modifier.

The language is designed to be readable and expressive, allowing you to describe a scene of objects and their relationships.

### Object Creation

The fundamental building block is the object creation statement. This is how you create a `Cube`, `Line`, or any other vector object.

**Syntax:**
```pencode
ObjectName(parameter1: value1, parameter2: value2)
```

**Example:**
```pencode
// Creates a Cube at position x=10, y=20 with the color red.
Rectangle(x: 10, y: 20, width: 50, height: 50, color: 'red')
```

### Parameters: Named vs. Unnamed (Ordered)

You can pass parameters to objects in two ways:

1.  **Named Parameters:** You explicitly write the name of the parameter followed by a colon and the value. This is the **highly recommended** approach as it makes your code clear and less prone to errors.

    ```pencode
    // Using named parameters is clear and safe.
    Line(x: 10, y: 20, x2: 100, y2: 100)
    ```

2.  **Unnamed (Ordered) Parameters:** You can provide values without their names. In this case, the order in which you provide the values is crucial and must match the order defined by the object.

    ```pencode
    // Using unnamed parameters - order matters!
    Line(10, 20, 100, 100)
    ```

:::caution Watch Out! Mixing Parameter Styles

While the language allows you to mix named and unnamed parameters, it is **strongly discouraged** because it makes the code difficult to read and can lead to unexpected behavior or errors.

#### The Parsing Rule

The parser processes parameters in the order they appear. When it encounters an unnamed (positional) parameter, it assigns it to the **next available parameter slot** in the object's predefined parameter order.

This can get very confusing.

**Example of confusing behavior:**

Consider the `Line` object, where the parameter order is `x`, `y`, `x2`, `y2`.

```pencode
// This code is valid, but very hard to understand.
Line(10, y: 20, 100, 100)
```

**How it is parsed:**
1.  The first value `10` is positional. The first available parameter is `x`. So, `x` is set to `10`.
2.  The next parameter `y: 20` is named. `y` is set to `20`.
3.  The next value `100` is positional. The next available parameter is `x2` (since `x` and `y` are taken). So, `x2` is set to `100`.
4.  The final value `100` is positional. The next available parameter is `y2`. So, `y2` is set to `100`.

**Result:** The line is drawn with `x=10`, `y=20`, `x2=100`, `y2=100`. While this works, the person reading the code has to mentally track which positional slots have been filled.

#### When it Causes an Error

An error occurs if you try to assign a value to the same parameter twice.

```pencode
// This will cause an error!
Rectangle(30, 40, 50, 50, x: 50)
```

**Why it fails:**
1.  The first unnamed parameter `30` is assigned to `x`.
2.  The second unnamed parameter `40` is assigned to `y`.
3.  The parser then sees the named parameter `x: 50`. Since `x` has already been assigned a value, the interpreter throws an error.

To avoid all this confusion, **always stick to one style (either all named or all unnamed) per object statement.**

:::

## Parameter Types

The interpreter accepts three main types of values for parameters:

### Numbers
Numbers can be integers or floating-point values. They are used for coordinates, sizes, and other numerical properties.

```pencode
// Examples of using numbers
Rectangle(x: 50, y: 75.5, width: 50, height: 50)
Line(x: 0, y: 0, x2: 100, y2: 100)
```

### Strings
Strings are sequences of characters enclosed in **double quotes (`"`)**. They are typically used for names or specific text-based properties.

```pencode
// Example of using a string
Brush(type: "charcoal", color: "black")
```

### Any (Code Snippets)
The `Any` type allows you to pass a snippet of code directly to a parameter. This is a powerful feature for advanced customization. The code snippet must be enclosed in **single quotes (`'`)**.

This is often used for colors, but can also be used for more complex logic, like in the `Custom` object.

```pencode
// Examples of using the Any type
Rectangle(color: 'red')
Custom(draw: 'p.ellipse(10, 20, 30, 30)')
```

Inside the single quotes, you can write code that will be executed by the p5.js rendering engine. For `color`, you can use any valid p5.js color string. For objects like `Custom`, you can write any valid p5.js drawing commands.


## Naming Objects

You can assign a name to an object using the `AS` keyword. This allows you to reference it later, for example, as a parent for other objects. Object names must be unique.

**Syntax:**
```pencode
ObjectName(...) AS objectName
```

**Example:**
```pencode
Rectangle(x: 0, y: 0) AS myRectangle
```

## Child Objects

You can create objects that are positioned relative to a parent object using the `CHILD TO` keywords. The child object's coordinates will be relative to the parent's coordinates.

**Syntax:**
```pencode
ObjectName(...) CHILD TO parentName
```

**Example:**
```pencode
Rectangle(x: 50, y: 50) AS parentRectangle,

// This Rectangle's position (10, 10) is relative to parentRectangle (final position: 60, 60).
Rectangle(x: 10, y: 10) CHILD TO parentRectangle
```

## Applying Modifiers

Modifiers change the properties of an object. They are applied using the `SET` keyword. You can chain multiple modifiers.

**Syntax:**
```pencode
ObjectName(...) SET ModifierName('value')
```

Some of the most common modifiers are `Color` and `Layer`. For a complete list of all available modifiers, please see the [Modifier Reference](../language-reference/modifiers/color).

**Example:**
```pencode
// Creates a cube and then sets its color to blue.
Rectangle(x: 0, y: 0) SET Color('blue')
```

## Cloning Objects

You can create a copy of a named object using the `!` prefix. This is useful for creating multiple instances of a configured object without re-typing all its parameters.

**Syntax:**
```pencode
!objectName(parameter1: value1, ...)
```

**Note:** When cloning, you can override any of the original object's parameters.

**Example:**
```pencode
// Create a template object.
Rectangle(color: 'blue') AS blueRectangle,

// Clone the template and give it a new position.
!blueRectangle(x: 50, y: 50)
```
