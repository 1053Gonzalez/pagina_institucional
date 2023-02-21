let botonCalcular = document.getElementById('btnCalcular');

function calculandoIMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");
  
  if(altura !== "" && peso !== ""){
    
    let imc = (peso / (altura * altura)).toFixed(1);
    let mensagem = "";
    
    if(imc < 18.5){
      mensagem = "bajo peso 😨 !"
    }else if(imc < 25){
      mensagem = "Tienes el peso ideal 🤗"
    }else if( imc < 30){
      mensagem = "Tienes un poco de sobrepeso 😐"
    }else if( imc < 35){
      mensagem = "¡Cuidado! grado de obesidad 1 😦"
    }else if( imc < 40){
      mensagem = "¡Cuidado! grado de obesidad 2 😧"
    }else {
      mensagem = "¡Cuidado! grado de obesidad 3 😨"
    }

    resultado.textContent = `Su IMC es ${imc}. ${mensagem}`;
    
  }else{
    resultado.textContent = "Por favor rellena todos los campos!!!"
  }
  
}

botonCalcular.addEventListener('click',calculandoIMC);
