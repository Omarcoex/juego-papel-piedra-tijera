//Pedir intentos al usuario
let intentos=prompt("¿Cuantos intentos va realizar?")
contadorUser=0
contadorMachine=0
contadorEmpate=0
for (let i = 0; i < intentos; i++) {
    var user = prompt("Para empezar a jugar escribe: \n1 Piedra \n2 Papel  \n3 Tijera");
    var machine = Math.floor(Math.random() * 3) + 1;

    if (user == machine){
        alert("EMPATASTE");
        contadorEmpate++
    }
    else if (machine == 1 && user == 2){
        alert("¡GANASTE! \nEl computador eligió Piedra");
        contadorUser++
            
    }
    else if (machine == 1 && user == 3){
        alert("PERDISTE  \nEl computador eligió Piedra");
        contadorMachine++
    }
    else if (machine == 2 && user == 1){
        alert("PERDISTE. \nEl computador eligió Papel");
        contadorMachine++
    } 
    else if (machine == 2 && user == 3){
        alert("¡GANASTE!  \nEl computador eligió Papel");
        contadorUser++
    }
    else if (machine == 3 && user == 2){
        alert("PERDISTE  \nEl computador eligió Tijeras");
        contadorMachine++
    }
    else if (machine == 3 && user == 1){
        alert("¡GANASTE! \nEl computador eligió Tijeras");
        contadorUser++
    }
}
alert(`El usuario gano ${contadorUser} y el computador ganó ${contadorMachine}`)
alert(`Hubo empate ${contadorEmpate}`)