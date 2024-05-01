import "./style.css";

// mostrar angulo

function generarAngulo(){
    return Math.floor(Math.random() * 360);
    
}

document.getElementById('angulo').innerHTML = generarAngulo();


// logica del juego

function verificarGanador(){
    var newDiv = document.createElement('div');
    const anguloAdivinarInput = document.getElementById('anguloadivinar').value;
    const anguloAdivinar = anguloAdivinarInput !== '' ? parseInt(anguloAdivinarInput) : 0;
    const angulo = parseInt(document.getElementById('angulo').innerText);
    console.log(angulo);
    var valor = "";

    if (angulo < anguloAdivinar){
        valor = "menor";
    }else{
        valor = "mayor";
    }


    if (anguloAdivinar == angulo ){
        newDiv.innerHTML = 
        `<div class="d-flex justify-content-center">
        <p class="m-2 mt-0">${anguloAdivinar}°</p>
        <div>
          <p class="m-2 mt-0">${valor}</p>
        </div>
        <div>
          <p class="m-2 mt-0">Ganaste</p>
        </div>
      </div>`
      document.getElementById('anguloadivinar').disabled = true;
      document.getElementById('enviar').disabled = true;

    }else{
        newDiv.innerHTML = `
        <div class="d-flex justify-content-center">
          <p class="m-2 mt-0">${anguloAdivinar}°</p>
          <div>
            <p class="m-2 mt-0">${valor}</p>
          </div>
          <div>
            <p class="m-2 mt-0">${proximidad(angulo, anguloAdivinar)}</p>
          </div>
        </div>
        `;
    }

    document.getElementById('principal').appendChild(newDiv);


    let intentos = parseInt(document.getElementById('intentos').innerText)


    if (intentos === 1){
        document.getElementById('intentos').innerHTML = 0;
        document.getElementById('anguloadivinar').disabled = true;
        document.getElementById('enviar').disabled = true;
    }else {
        document.getElementById('intentos').innerHTML = intentos -1;
    }

    

}

function proximidad(angulo, anguloAdivinar){
    const diferencia = Math.abs(angulo - anguloAdivinar);

    if (diferencia <= 5) {
        return "Muy caliente";
      } else if (diferencia <= 10) {
        return "Caliente";
      } else if (diferencia <= 15) {
        return "Tibio";
      } else {
        return "Frío como pecho de bolso";
      }

}

document.getElementById('enviar').addEventListener('click', verificarGanador);