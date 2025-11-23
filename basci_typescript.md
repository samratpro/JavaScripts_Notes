# TypeScript Fundamentals - Complete Guide

## 01. Variables & Basic Types

### Type Annotations

```typescript
// Explicit type annotation
let x: number;
let y: number = 20;
let name: string = "Samrat";

// Array types
const nameList: string[] = ['Sam', 'Samrat'];
const infoList: any[] = ["Samrat", 26, true];

// Tuple - fixed length array with specific types
const fixedInfo: [string, number] = ["Sam", 27];

// Objects
let studentInfo: any = {
  name: "Samrat",
  id: 3
};

let teacherInfo: { name: string; id: number } = {
  name: "Samrat",
  id: 3,
};
```

### Type Inference

```typescript
// TypeScript automatically infers types
let age = 25; // inferred as number
let email = "test@example.com"; // inferred as string
let isActive = true; // inferred as boolean
```

---

## 02. Type Alias

Type aliases create a named reference for a type. Useful for reusable types.

```typescript
type Student = {
  name: string;
  dept: string;
  subject: string[];
  cgpa: number;
};

const student1: Student = {
  name: 'samrat',
  dept: 'CSE',
  subject: ['OOP', 'Java'],
  cgpa: 3.75
};

function displayStudent(info: Student, title: string = "NA"): void {
  console.log(`\nStudent name: ${info.name}`);
  console.log(`Department: ${info.dept}`);
  console.log(`Subjects: ${info.subject}`);
  console.log(`CGPA: ${info.cgpa}`);
  console.log(`Title: ${title ? title : "NO"}`);
}

displayStudent(student1, "Top Performer");
```

---

## 03. Union Types

Union types allow a variable to be one of multiple types.

```typescript
type Status = "active" | "inactive" | "pending";
type ID = string | number;

let userId: ID = 123; // valid
userId = "ABC123"; // also valid

let currentStatus: Status = "active"; // valid
// currentStatus = "deleted"; // ❌ Error

function processID(id: ID): void {
  if (typeof id === "string") {
    console.log(`String ID: ${id.toUpperCase()}`);
  } else {
    console.log(`Number ID: ${id * 2}`);
  }
}

processID(42);
processID("user-123");
```

### Union Type Narrowing

```typescript
type Value = string | number | boolean;

function printValue(value: Value): void {
  if (typeof value === "string") {
    console.log(`String: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    console.log(`Number: ${value.toFixed(2)}`);
  } else if (typeof value === "boolean") {
    console.log(`Boolean: ${value ? "True" : "False"}`);
  }
}

printValue("hello");
printValue(42);
printValue(true);
```

---

## 04. Intersection Types

Intersection types combine multiple types into one. The result must satisfy all types.

```typescript
type Employee = {
  name: string;
  employeeId: number;
};

type Manager = {
  department: string;
  reports: number;
};

// Intersection - combines both types
type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  name: "Samrat",
  employeeId: 101,
  department: "CSE",
  reports: 5
};

// Type guard with intersection
function isManagerEmployee(obj: any): obj is ManagerEmployee {
  return (
    typeof obj.name === "string" &&
    typeof obj.employeeId === "number" &&
    typeof obj.department === "string" &&
    typeof obj.reports === "number"
  );
}

if (isManagerEmployee(manager)) {
  console.log(`${manager.name} manages ${manager.reports} people`);
}
```

---

## 05. Literal Types

Literal types specify exact values.

```typescript
// Literal string type
type Role = "admin" | "user" | "guest";

// Literal number type
type HttpStatus = 200 | 201 | 400 | 404 | 500;

// Literal boolean
type IsActive = true;

function checkRole(role: Role): string {
  switch (role) {
    case "admin":
      return "Administrator access";
    case "user":
      return "User access";
    case "guest":
      return "Limited access";
  }
}

const status: HttpStatus = 200; // valid
// const status2: HttpStatus = 201; // valid
// const status3: HttpStatus = 201; // ❌ Error
```

---

## 06. Type Checking & Type Guards

### typeof Guard

```typescript
type Value = string | number | null;

function processValue(value: Value): void {
  if (typeof value === "string") {
    console.log(`String length: ${value.length}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  } else if (value === null) {
    console.log("Value is null");
  }
}
```

### instanceof Guard

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());
```

### Custom Type Guard

```typescript
type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

function move(animal: Fish | Bird): void {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

---

## 07. Interface

Interfaces define the structure of objects. Similar to type aliases but with some differences.

```typescript
interface User {
  name: string;
  email: string;
  age?: number; // Optional property
  readonly id: number; // Read-only property
}

const user: User = {
  name: "Samrat",
  email: "samrat@example.com",
  id: 1
};

// user.id = 2; // ❌ Error - readonly

interface Admin extends User {
  role: "admin" | "moderator";
  permissions: string[];
}

const admin: Admin = {
  name: "Samrat",
  email: "admin@example.com",
  id: 1,
  role: "admin",
  permissions: ["read", "write", "delete"]
};
```

### Interface vs Type Alias

```typescript
// Type Alias - can use union, intersection, primitives
type Status = "active" | "inactive";
type ID = string | number;

// Interface - only for object shapes, supports declaration merging
interface Product {
  name: string;
  price: number;
}

// Declaration merging (only with interface)
interface Product {
  description: string;
}

// Now Product has name, price, and description
const product: Product = {
  name: "Laptop",
  price: 50000,
  description: "High-performance laptop"
};
```

### Interface Inheritance

```typescript
interface Vehicle {
  brand: string;
  model: string;
  start(): void;
}

interface Car extends Vehicle {
  doors: number;
  trunk: boolean;
}

interface Motorcycle extends Vehicle {
  hasDriver: boolean;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  doors: 4,
  trunk: true,
  start() {
    console.log("Car started");
  }
};
```

---

## 08. Object-Oriented Programming (OOP)

### Classes

```typescript
class Person {
  // Properties with access modifiers
  public name: string;
  private age: number;
  protected email: string;

  // Constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Methods
  public greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }

  private getAge(): number {
    return this.age;
  }

  protected getEmail(): string {
    return this.email;
  }
}

const person = new Person("Samrat", 25, "samrat@example.com");
person.greet();
// person.age; // ❌ Error - private
```

### Access Modifiers

```typescript
class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected accountHolder: string;

  constructor(accountNumber: string, balance: number, accountHolder: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountHolder = accountHolder;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  private calculateInterest(): number {
    return this.balance * 0.05;
  }
}

const account = new BankAccount("123456", 5000, "Samrat");
console.log(account.getBalance()); // 5000
account.deposit(1000); // Deposited: 1000
// account.balance; // ❌ Error - private
```

### Inheritance

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Override parent method
  speak(): void {
    console.log(`${this.name} barks`);
  }

  getInfo(): void {
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Buddy barks
dog.getInfo(); // Name: Buddy, Breed: Golden Retriever
```

### Polymorphism

```typescript
interface Animal {
  speak(): void;
  move(): void;
}

class Cat implements Animal {
  speak(): void {
    console.log("Meow");
  }

  move(): void {
    console.log("Cat walks");
  }
}

class Bird implements Animal {
  speak(): void {
    console.log("Tweet");
  }

  move(): void {
    console.log("Bird flies");
  }
}

function makeAnimalAct(animal: Animal): void {
  animal.speak();
  animal.move();
}

makeAnimalAct(new Cat());
makeAnimalAct(new Bird());
```

### Abstract Classes

```typescript
abstract class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract calculateArea(): number;

  describe(): void {
    console.log(`This is a ${this.color} shape`);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle("red", 5);
console.log(circle.calculateArea()); // 78.54
circle.describe(); // This is a red shape

const rect = new Rectangle("blue", 4, 6);
console.log(rect.calculateArea()); // 24
```

### Getters and Setters

```typescript
class Student {
  private _name: string;
  private _cgpa: number;

  constructor(name: string, cgpa: number) {
    this._name = name;
    this._cgpa = cgpa;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    }
  }

  get cgpa(): number {
    return this._cgpa;
  }

  set cgpa(value: number) {
    if (value >= 0 && value <= 4.0) {
      this._cgpa = value;
    }
  }
}

const student = new Student("Samrat", 3.75);
console.log(student.name); // Samrat
student.cgpa = 3.9; // Valid
// student.cgpa = 5.0; // Invalid - silently rejected
```

---

## 09. Function Overloading

```typescript
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;
function processValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return !value;
  }
}

console.log(processValue("hello")); // HELLO
console.log(processValue(5)); // 10
console.log(processValue(true)); // false
```

---

## 10. Advanced Types

### Conditional Types

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<123>; // false
```

### Mapped Types

```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// Same as: { readonly name: string; readonly age: number; }
```

### Utility Types

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Partial - all properties optional
type PartialProduct = Partial<Product>;

// Required - all properties required
type RequiredProduct = Required<Product>;

// Pick - select specific properties
type ProductPreview = Pick<Product, "id" | "name">;

// Omit - exclude specific properties
type ProductUpdate = Omit<Product, "id">;

// Record - create object with specific keys
type Status = "pending" | "completed" | "failed";
type StatusCounts = Record<Status, number>;
// { pending: number; completed: number; failed: number; }
```

---

## 11. Practical Example: Calculator with Type Safety

```typescript
// Define types
type Operation = "+" | "-" | "*" | "/" | "^";
type Operand = number;

// Basic operations
const add = (a: number, b: number): number => a + b;
const sub = (a: number, b: number): number => a - b;
const mul = (a: number, b: number): number => a * b;
const div = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};
const pow = (a: number, b: number = 2): number => Math.pow(a, b);

// Calculator class
class Calculator {
  private history: Array<{ operation: Operation; a: number; b: number; result: number }> = [];

  calculate(operation: Operation, a: Operand, b: Operand): number {
    let result: number;

    switch (operation) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = sub(a, b);
        break;
      case "*":
        result = mul(a, b);
        break;
      case "/":
        result = div(a, b);
        break;
      case "^":
        result = pow(a, b);
        break;
      default:
        const _exhaustive: never = operation;
        return _exhaustive;
    }

    this.history.push({ operation, a, b, result });
    return result;
  }

  getHistory() {
    return this.history;
  }
}

// Usage
const calc = new Calculator();
console.log(calc.calculate("+", 10, 20)); // 30
console.log(calc.calculate("*", 5, 4)); // 20
console.log(calc.calculate("^", 2, 8)); // 256
console.log(calc.getHistory());
```

---

## Summary

| Concept | Purpose |
|---------|---------|
| **Variables & Types** | Define data with type safety |
| **Type Alias** | Name and reuse complex types |
| **Union Types** | Allow multiple possible types |
| **Intersection Types** | Combine multiple types |
| **Literal Types** | Specify exact values |
| **Type Guards** | Runtime type checking |
| **Interface** | Define object contracts |
| **Classes** | OOP with encapsulation |
| **Inheritance** | Code reuse and hierarchy |
| **Polymorphism** | Multiple implementations |
| **Abstract Classes** | Define blueprints |
| **Advanced Types** | Conditional, mapped, utility types |

---

**Last Updated:** 2025
**Language:** TypeScript
