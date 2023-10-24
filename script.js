import {juego1} from "./juego1.js"
import {juego2} from "./juego2.js"

function menu() {
    console.log(`
        seleccion la opcion:
        1 - para juego 1
        2 - para juego 2
    `);


    const opcion = prompt("Ingrese el juego que desee jugar")
    // let resultado = {};
    if(opcion === "1"){
        let resultado = juego1();
        console.log(resultado.tirada1);
        console.log(resultado.tirada2);
        console.log(resultado.tirada3);
        console.log(resultado);
    }
    else if (opcion === "2")
        juego2();
    else
        console.log("Ingrese un valor correcto");
}


menu();