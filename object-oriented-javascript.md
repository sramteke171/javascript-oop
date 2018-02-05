# Object Oriented JavaScript

<!--

~ 60 - 90 min (finish first lesson block)

- review objects/context and functions and scope
- Frame ES5 syntax
- walk through OOP with ES5 syntax
	- defining a class
	- creating instances
	- inheritance (and prototypes)

-->

### 1. Review of Objects in JS (10 minutes / 0:10)

The important thing to remember about objects is that they encapsulate related data and behavior into an organized structure. We saw this when we discussed **object literal notation**. Recall that we can define an object like this:

Lets check out `one.js` in the `demos/` folder!

```js
let car = {
  make: "Honda",
  model: "Civic",
  color: "red",
  drive: function(){
    console.log("vroom vroom")
  },
  gps: function(location){
    console.log(`Beep boop, driving to ${location}`)
  },
  paint: function( newColor ){
    console.log(`Your car has been painted ${newColor}`)
    this.color = newColor
  }
}
```

**Quick Quiz**

1. What is a key-value pair?
2. What is a property of an object?
3. What is a method?
4. Can we store anything in an object?

We're doing two really important things here:

  1. We're encapsulating all data and behavior for a car inside a single object (i.e. a single place)
  2. We're modeling some real world thing inside our code

The second point is the basis of Object-Oriented Programming and what makes it so powerful.

Why might we want to model real world things in our code?

__Example: lets say we're building an app for a car rental company (Rent-a-Car). If they buy a new car to rent out to customers, they'll want to manage that new car inside the app we're building for them. Do we want to create a new object like the one above for each car new car?__

### 2. Intro to OOP in JS (5 minutes / 0:15)

Before we get in to OOP in JS there are a few loose ends we need to tie up:

<details>
    <summary>1. What is context?</summary>

    A reference (through `this`) to the object that owns the currently executing code.
</details>
<details>
    <summary>2. What is scope?</summary>

    Where variables are accessible during function invocation.
</details>
<details>
    <summary>3. What `type` is a function?</summary>

    Well it's a function, but a function is a type of object!
</details>
<details>
    <summary>4. Do functions have context?</summary>

    They do!
</details>

### We Do: Defining a class (10 minutes / 0:25)
Lets check out `one.js` in the `demos/` folder!

<details>
  <summary>ES5 Class</summary>

  ```js
  function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.drive = () => console.log('vroom vroom');
    this.gps = location => console.log(`driving to ${location}`);
    this.paint = newColor => (this.color = newColor);
  }
  ```
</details>

#### Vocabulary:

**Class** - an object that models real world things in our application

**Instance** - a object defined by our class

**Constructor** - the function that defines instances of our class

#### You Do: Domain Modeling and building your first class! (10 minutes / 0:35)

Lets check out `two.js` in the `exercises/` folder!