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
}
