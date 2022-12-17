---
title: JavaScript Classes - with code examples
description: JavaScript class provide a much simpler and clearer syntax for creating objects and dealing with inheritance
date: Dec 10, 2022
author: 'Amin Charoliya'
authorImage: 'amin-thumb.jpg'
category: 'javascript'
bannerImage: 'js-class.png'
tags:
    - javascript
    - js-class
---

JavaScript class provide a much simpler and clearer syntax for creating objects and dealing with inheritance.

Classes are a syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

In this article, we'll look at how to use classes in JavaScript, including how to define a class, create objects from a class, and use inheritance.

## Defining a Class

To define a class in JavaScript, use the class keyword followed by the class name. Inside the class, you can define properties and methods.

For example, here's a class for creating a Person object:

```javascript[class="line-numbers"]
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

The `constructor()` method is a special method for creating and initializing an object created with a class. There can only be one special constructor method.

## Creating Objects from a Class

Once you've defined a class, you can use the new keyword to create an object from it.

For example, here we create a new Person object:

```javascript
const person = new Person('John', 30);
```

The new keyword creates a new object and calls the `constructor()` method on the object.

## Using Inheritance

JavaScript classes also support inheritance. To extend a class, use the extends keyword.

For example, here we create a Student class that extends the Person class:

```javascript[class="line-numbers"]
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm in grade ${this.grade}`);
    }
}
```

The `super()` method is used to call the parent class constructor method.

Let's look at an example of how the super() method can be used. In this example, we have a parent class called Animal and a subclass called Dog. The Dog class inherits from the Animal class and has a constructor that takes in a name argument.

```javascript[class="line-numbers"]
// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Subclass
class Dog extends Animal {
    constructor(name) {
        // Call the parent class constructor
        super(name);
    }
}

// Create a new instance of the Dog class
const myDog = new Dog('Fido');

// Log the name property
console.log(myDog.name); // Output: Fido
```

As you can see, the `super()` method is used to call the parent class constructor and pass in the name argument. This allows the Dog class to access and modify the parent class properties.

## Conclusion

JavaScript classes provide a much simpler and clearer syntax for creating objects and dealing with inheritance. They are a syntactical sugar over JavaScript's existing prototype-based inheritance.

With classes, you can define a class, create objects from a class, and use inheritance. The `constructor()` method is used to create and initialize an object created with a class, and the `super()` method is used to call the parent class constructor method.
