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
let consulta1 =  confirm("Click aceptar para ingresar texto o click cancelar para salir.");
let consulta2 = "";
let resultado = "";

while (consulta1) {
  consulta2 = prompt("Por favor, ingresa el texto.");
  console.log(consulta2)
  if (consulta2 == "" || consulta2 == null) {
    alert("No ingresaste datos.")
    return;
  }
  resultado = resultado + consulta2 + " - ";
  consulta1 =  confirm("click aceptar para ingresar otro texto o click cancelar para mostrar concatenacion");
}
if (consulta1 || resultado !== "") {
  alert('Usted ingresó los siguientes textos: "' + resultado + '"')
  } 
} 
function Ej4() {
let suma = 0;
let consulta1
do {
  consulta1 = prompt("Por favor, ingresa el numero.");
  if (parseFloat(consulta1) == consulta1) {
  consulta1 = parseFloat(consulta1);
  suma = suma + consulta1;
  }
  else {
    if (consulta1 != undefined) {
      console.log(consulta1)
    alert(consulta1 + " No es un numero, NO PUEDES INGRESAR LETRAS O SIMBOLOS");
    }
  }
} while (consulta1 != undefined);
alert('La suma es igual a: ' + '" ' + suma + ' "');
}
function Ej5() {
  let rest 
  let dni = 0;
  let letter = "";
  do {
    dni = prompt("Por favor, ingresa el numero.");
    if (parseFloat(dni) == dni ) {
      dni = parseFloat(dni); /*Comprobamos que sea numero y conversimos*/
      if (dni >= 0 && dni <= 99999999) {
        rest = dni % 23;
        switch (rest) {
          case 0:
            letter = "T";
            break;
            
          case 1:
            letter = "R";
            break;
            
          case 2:
            letter = "W";
            break;
          
          case 3:
            letter = "A";
            break;
            
          case 4:
            letter = "G";
            break;
        
          case 5:
            letter = "M";
            break;
          
          case 6:
            letter = "Y";
            break;
          
          case 7:
            letter = "F";
            break;

          case 8:
            letter = "P";
            break;
          
          case 9:
            letter = "D";
            break;
            
          case 10:
            letter = "X";
            break;
            
          case 11:
            letter = "B";
            break;

          case 12:
            letter = "N";
            break;
            
          case 13:
            letter = "J";
            break;
              
          case 14:
            letter = "Z";
            break;
              
          case 15:
            letter = "S";
            break;
                
          case 16:
            letter = "Q";
            break;
            
          case 17:
            letter = "V";
            break;
              
          case 18:
            letter = "H";
            break;
              
          case 19:
            letter = "L";
            break;
    
          case 20:
            letter = "C";
            break;
              
          case 21:
            letter = "K";
            break;
                
          case 22:
            letter = "E";
            break;
                
          default:
            alert("Numero ingresado incorrecto.")
            break;
        }
      }
      alert("Numero: " + dni + ", Letra: " + letter);
      return;
    } else {
      alert("No ingresaste ningun numero");
      
      
    }
  } while (dni);
} 
function Ej6() {
  let index; 
  let repetir;
  for (index = 1; index <= 30; index++) {
    console.log(index);
    for (let repetir = 0; repetir < index; repetir++) {
      document.write(index);
    }
    document.write("</br>")
  }
}