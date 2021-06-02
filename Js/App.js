function Ej1() {
  let edad = prompt("Por favor, ingresa tu edad.");
if (isNaN(edad)) {
  alert('No ingresaste un numero, "NO PUEDES INGRESAR LETRAS O SIMBOLOS"')
} else if (edad >= 18) {
    alert("Usted tiene edad para conducir.");
  } else {
    alert("Usted NO tiene edad para conducir.");
  }
}
function Ej2() {
  let notes = prompt("Por favor, ingresa una nota del 0 al 10.");
  if (notes) {
    if (!isNaN(notes)) {
      if (notes <= 10) {
        if (notes >= 0 && notes <= 2) {
          alert("Muy deficiente")
        } else {
          if (notes >= 3 && notes <= 4) {
            alert("Insuficiente.")
          } else {
            if (notes >= 5 && notes <=6) {
              alert("Suficiente.")
            } else {
              if (notes == 7) {
                alert("Bien.")
              } else {
                if (notes >= 8 && notes <= 9) {
                  alert("Notable.")
                } else {
                  if (notes == 10) {
                    alert("Sobresaliente.")
                  } 
                }
              }
            }
          }
        }
      } else {
        alert('Numero erroneo, no puede superar el numero 10.')
      }
    } else {
      alert('No ingresaste un numero, "NO PUEDES INGRESAR LETRAS O SIMBOLOS"')
    }
  } else {
    alert("No ingresaste ningun valor.")
  }
  
}
function Ej3() {
let consulta1 =  confirm("Click aceptar para ingresar texto o click cancelar para mostrar concatenación.");
let consulta2 = "";
let resultado = "";

while (consulta1) {
  consulta2 = prompt("Por favor, ingresa el texto.");
  console.log(consulta2)
  if (consulta2 == "" || consulta2 == null) {
    alert("no ingresaste datos")
    return;
  }
  resultado = resultado + consulta2 + " - ";
  consulta1 =  confirm("click aceptar para ingresar otro texto o click cancelar para mostrar concatenacion");
}
if (consulta1 || resultado !== "") {
  alert('Usted ingresó los siguientes textos: "' + resultado + '"')
  } 
} 