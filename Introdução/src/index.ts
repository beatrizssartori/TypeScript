//1- Começa com "npm i -g typescript no terminal"
//2- "tsc -v para visualizar a versão"
//3- "tsc --init para abrir o tsconfig.json"
//4- Em tsconfig.json, teremos que mudar o rootDir, o outDir e o target
//5- "tsc --w" para compilação automática

let y: number = 10;

console.log(y);

//tipos básicos
let firstName: string = 'Beatriz'
let age: number = 21
const idAdmin: boolean = true

console.log(typeof firstName);

// object 
const myNumbers: number[] = [1,2,3];
console.log(myNumbers.length);  
myNumbers.push(4);

let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

//object literals -> {prop: value} 
const user: {name: string, age: number} = {
    name: "Nicolas",
    age: 17,
}

console.log(user.name);

//union type 
let id: string | number = "10"

id = 200

//type alias 
type myIdType = number | string 
const userId: myIdType = 10
const productId: myIdType = "0001"

//enum 
enum Size {
    P = "pequeno",
    M = "médio",
    G = "grande",
}

const camisa = {
    name: "camisa gola V", 
    size: Size.G,
}

console.log(camisa);

//literal types
let teste: "autenticado" | null

//funcoes
function sum(a: number, b: number) {
    return a+b 
}

console.log(sum(12,12));

function sayHello(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHello("Beatriz"));

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void {
    if(greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
        console.log(`Olá ${name}`)
}

greeting("Tigor");
greeting("Pedro", "Sir");

//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2:10
}

console.log(multiplyNumbers(someNumbers));

//generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log('ITEM: ${item}')
    })
}

const a1 = [1,2,3];
const a2 = ["a","b","c"]

showArraysItems(a1);
showArraysItems(a2);

//classes 
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("informação restrita!");
    }
}
 
const bia = new User("Bia", "admin", true);
console.log(bia);

bia.showUserName();
bia.showUserRole(false);

//interfaces em classes 
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const duster = new Car("Renault", 4);
duster.showBrand();

//herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine= engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand;