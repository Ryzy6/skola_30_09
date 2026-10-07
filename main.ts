//Začátek\\

//proměné
let age : number = 23; 
let isWorkingAge : boolean = true;
let name : string = "Pepa";

//Konstanty
const height : number = 180;
const isSleeping : boolean = false;
const surname : string = "Novák";

//Změna hodnoty
age = age + 1;
age += 1;
age ++;

isWorkingAge = false;

let fullname : string = name + " " + surname;

//Konzole :)
console.log(fullname);

let kraj : string = "Liberecký Kraj";
let mesto : string = "Česká Lípa";
let krajPlusMesto :string = kraj + " - " + mesto;

console.log(krajPlusMesto);

if(age >= 18){
    isWorkingAge = true
};
else{
    isWorkingAge = false
};


if(age === 23){
    console.log("uživateli je 23")
};
if(isWorkingAge){
    console.log("Může Pracovat")
};


else(isWorkingAge){
    console.log("Nemůže Pracovat")
};



// musí to být true nebo false 
