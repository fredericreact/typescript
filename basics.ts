let age: number;
age = 12;

let username: string | string[];
username = 'Max'

let isInstructor: boolean;
isInstructor = true;


let hobbies: string[];
hobbies = ['Sports', 'Cooking'];


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


let course = 'React course';

let cours: string | number ='Angular';
cours = 1234


function add(a: number, b: number) {
    return a + b;
}

function insertAtBeginning<T>(array: T[], value:T) {
    const newArray = [value, ... array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);
const stringArray = insertAtBeginning(['a','b','c'], 'd')