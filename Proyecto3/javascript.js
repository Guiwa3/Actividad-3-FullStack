
document.getElementById("btn").addEventListener("click", function () {

    var respuesta = (document.getElementById("respuesta").value).toUpperCase();
    const rCorrecta = "MONOCORDIO";

    for (var intentos = 4; intentos >= 0 && (respuesta != rCorrecta); intentos-- ){

        if (intentos === 3) {
            alert("Ouch! Intentalo otra vez! Te quedan " + intentos + " intentos!");
        }
        if (intentos == 2) {
            alert("Ups...esta respuesta no era...UNA PISTA!: Aunque su nombre suene como un animal, su sonido no es ni parecido a él!..Te quedan " + intentos + " intentos");
        }
        if (intentos === 1) {
            alert("Está, bien, te voy a decir: no es ni clavicordio, ni monopatín (já, salió un versito!) Esta es la ultima pista!...Te quedan " + intentos + " intentos");
        }
        else  if (respuesta === rCorrecta) {
            alert("¡Felicidades! ¡Acertaste! ¡Ya estás participando del sorteo!");
            break;
        }
        else {
            alert("Que pena! Se te acabaron los intentos! Pero tranqui, será la próxima vez!");
        }

    }    

   
    
})

