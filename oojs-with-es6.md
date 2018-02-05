# Object Oriented JavaScript with EcmaScript 6

### 3. Classes in ES6 (10 minutes / 0:25)
Understanding the old syntax is important for understanding the new syntax. With ES6, the language was updated to bring the syntax more inline with how other popular programming languages handle OOP. This includes the introduction of the `class` keyword. Nothing changed under the hood, just what we type to create a class.

Lets checkout `three.js` in the `exercises/` folder!

<details>
  <summary>Solution</summary>

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

</details>

This is the syntax that you'll see most frequently now!

#### You Do: [Make an ATM Class](https://git.generalassemb.ly/ga-wdi-exercises/es6-classes-practice) (20 minutes / 1:05)

> 15 minutes exercise. 5 minutes review.

### 4. Inheritance (15 minutes / 1:30)

Often we'll need to take our class and expand on it for particular types of implementations of it. Think about types of Cars, for instance. For this case, we create sub-classes through a process called Inheritance.

In ES6, we extend an existing class with the `extend` keyword. This will let us create a subclass:

```js
class Car {
  constructor(make, color) {
    this.make = make
    this.color = color
  }
}

class Toyota extends Card {
  drive() {
    console.log('vroom vroom')
  }
}
```

If we have properties that we want to add to our subclass, we still need to take in the properties for our parent class, and pass them up to our parent class with `super`.

```js
class Car {
  constructor(model, color) {
    this.model = model
    this.color = color
  }
}

class Toyota extends Card {
  constructor(model, color) {
    super(model, color)
    this.make = 'Toyota'
  }
  drive() {
    console.log('vroom vroom')
  }
}
```

## You Do: [Inheritance](https://git.generalassemb.ly/ga-wdi-exercises/es6-classes-inheritance-practice) (20 minutes / 1:50)

> 15 minutes exercise. 5 minutes review.

-------
