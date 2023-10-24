const tiradasDados = []

export function juego1() {
    console.log("Jugando juego 1");

    const tirada1 = tirarDados();
    const tirada2 = tirarDados();
    const tirada3 = tirarDados();

    return {
        tirada1: tirada1,
        tirada2: tirada2,
        tirada3: tirada3
    }
}


function tirarDados() {
    return Math.floor(Math.random() * 6) + 1;
}