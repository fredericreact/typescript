# Typescript

Install typescript in the project

```javascript
npm install typescript
```

Compile typescript file into javascript file

```javascript
npx tsc with-typescript.ts
```

With-typescript.ts is the name of the file


## Primitive types

```javascript
let age: number;


age = 12;


let username: string | string[];


username = 'Max'


let isInstructor: boolean;


isInstructor = true;

```

## Complex types

```javascript
let hobbies: string[];


hobbies = ['Sports', 'Cooking'];


let person: {
    name: string;
    age: number;
};


person = {
    name: 'Max',
    age: 32
}


let people: {
    name: string;
    age: number;
}[];



```

## Type inferring

```javascript
let course = 'React course';

```

## Union Types

```javascript
let cours: string | number ='Angular';


cours = 1234

```

```javascript
type Person = {
    name: string;
    age: number;
}


let person: Person;
person = {
    name: 'Max',
    age: 32
}


let people: Person[];

```

## functions

```javascript
function add(a: number, b: number) {
    return a + b;
}

```

Here we use Generics with <T> which will dynamically guess the type of data based on the data provided, if all are numbers ,it will guess, type is number, if all are strings, it will guess all are strings.

```javascript
function insertAtBeginning<T>(array: T[], value:T) {
    const newArray = [value, ... array];
    return newArray;
}


const demoArray = [1,2,3];


const updatedArray = insertAtBeginning(demoArray,-1);
const stringArray = insertAtBeginning(['a','b','c'], 'd')

```
