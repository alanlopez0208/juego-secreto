function hola(){
    console.log("¡Hola, mundo!");
}


function holaNombre(nombre){
    console.log(`!Hola, ${nombre}!`);
}


function doble(num){
    return num * 2;
}

function prom(num1, num2,num3){
    return (num1 + num2 + num3) / 3;
}


function mayor(num1, num2){
   return num1 > num2 ? num1 : num2;
}


function multiplo(num){
    return num*num;
}


//Probando
hola();

holaNombre("Alan");

console.log(doble(5));

console.log(prom(10,10,9));

console.log(mayor(5,10));

console.log(multiplo(5));