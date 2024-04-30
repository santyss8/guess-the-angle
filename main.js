import "./style.css";

function generarAngulo() {
    return Math.floor(Math.random() * 360);
  }
  
  // Función para verificar la cercanía del ángulo adivinado al ángulo objetivo
  function proximidad(guess, targetAngle) {
    const difference = Math.abs(guess - targetAngle);
  
    if (difference <= 5) {
      return "Muy caliente";
    } else if (difference <= 10) {
      return "caliente";
    } else if (difference <= 15) {
      return "frio";
    } else {
      return "Frio como pecho de bolso";
    }
  }

  function verificarGanador(){
    const anguloadivinar = parseInt(document.getElementById('anguloadivinar').value);
    const angulo = parseInt(document.getElementById('angulo').innerText);
    let intentosRestantes = parseInt(document.getElementById('intentos').innerText);

    let resultado = '';

    if (anguloadivinar === angulo){
        resultado = 'Adivinaste'
    }else{
        const proximidad = proximidad(angulo - anguloadivinar);
        resultado += proximidad;
    }

    if (anguloadivinar < angulo){
        resultado += 'El angulo es menor'
        
    }else {
        resultado += 'El angulo es mayor'
    }

    intentosRestantes--;

    if (intentosRestantes === 0) {
        resultado += ' Se acabaron tus intentos. El ángulo correcto era ' + angulo + '.';
        document.getElementById('anguloadivinar').disabled = true;
      } else {
        resultado += ' Attempts left: ' + intentosRestantes + '.';
      }

      addHistorial(resultado);



  }
  






