# Object-Oriented Programming in Javascript

## Learning Objectives

- Answer the question, what is Object-Oriented Programming (OOP)?
- Identify and define: a prototype, a class, an instance, and a constructor
- Use the `new` keyword to create objects with shared properties and methods
- Define the concept of inheritance as it pertains to classes
- Create a class that inherits from another using the `extends` and `super` keywords

## Overview
1. Review of Objects
2. Intro to OOP in JS
3. Classes in ES6
4. Inheritance

## Intro

### 1. Review of Objects in JS

The important thing to remember about objects is that they encapsulate related data and behavior into an organized structure. We saw this when we discussed **object literal notation**. Recall that we can define an object like this:

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

We're doing two really important things here:
  1. We're encapsulating all data and behavior for a car inside a single object (i.e. a single place)
  2. We're modeling some real world thing inside our code

The second point is the basis of Object-Oriented Programming and what makes it so powerful.

Why might we want to model real world things in our code?
__Example: lets say we're building an app for a car rental company (Rent-a-Car). If they buy a new car to rent out to customers, they'll want to manage that new car inside the app we're building for them. Do we want to create a new object like the one above for each car new car?__

### 2. Intro to OOP in JS

Before we get in to OOP in JS there are a few loose ends we need to tie up:

1. What is scope?
2. Do Objects have scope in JS?
3. What `type` is a function?

Lets check out `one.js` in the `exercises/` folder!

**Vocabulary:**
Class - an object that models real world things in our application
Instance - a object defined by our class
Constructor - the function that defines instances of our class

Lets check out `two.js` in the `exercises/` folder!

### 3. Classes in ES6
Understanding the old syntax is important for understanding the new syntax. With ES6, the language was updated to bring the syntax more inline with how other popular programming languages handle OOP. This includes the introduction of the `class` keyword. Nothing changed under the hood, only what we type to create a class did.

```js
class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
  }

  drive() {
    console.log('vroom vroom')
  }

  gps( location ) {
    console.log(`beep beep, driving to ${location}`)
  }

  paint( newColor ) {
    this.color = newColor
  }
}
```

### 4. Inheritance


