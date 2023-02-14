import { Person } from "./poo";

let juan = new Person(1.85 , 75)
console.log(juan.calcularImc());
juan.yearOfBirth = 1990
console.log(juan.calEdad(2023));
juan.hobbies = ["nadar","ajedrez","dormir"]
juan.colorPelo= "rubio"
juan.edad = 33
juan.peso=80
juan.printAll()
juan.leerHobbie()


