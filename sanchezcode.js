let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");


//CONTADORES
let letrasTemp = "";
let numerosTemp = "";
let bandera = false;
let letrasok = false;

//onclick
btnA1.onclick = function () {
  logicaA1();
};
btnB2.onclick = function () {
  logicaB2();
};

btnC3.onclick = function () {
  logicaC3();
};

btnD4.onclick = function () {
  logicaD4();
};

btnE5.onclick = function () {
    logicaE5();
  };

btnF6.onclick = function () {
    logicaF6();
  };

btnG7.onclick = function () {
    logicaG7();
  };

btnH8.onclick = function () {
    logicaH8();
  };

btnI9.onclick = function () {
    logicaI9();
  };

btnJ0.onclick = function () {
    logicaJ0();
  };


//logica
const logicaA1 = () => {
    if (letrasok == true) {

        console.log("numeros");

        for (let i = 0; i < numerosTemp.length; i++) {
            if (numerosTemp.charAt(i) === "1") {
              alert("Numero repetido");
              bandera = true;
            }
          }
        
          if (bandera == true) {
            bandera = false;
          } else {
        
              numeros.innerHTML = numerosTemp + "1";
              numerosTemp = numerosTemp + "1";
            
          }
        
    } else {

        for (let i = 0; i < letrasTemp.length; i++) {
            if (letrasTemp.charAt(i) === "A") {
              alert("Letra repetida");
              bandera = true;
            }
          }
        
          if (bandera == true) {
            bandera = false;
          } else {
        
              letras.innerHTML = letrasTemp + "A";
              letrasTemp = letrasTemp + "A";
            
          }
        
    }
    
      
};

const logicaB2 = () => {
    
    if (letrasok == true) {

        console.log("numeros");
        for (let i = 0; i < numerosTemp.length; i++) {
            if (numerosTemp.charAt(i) === "2") {
              alert("Numero repetido");
              bandera = true;
            }
          }

          if (bandera == true) {
            bandera = false;
          } else {
            if (numerosTemp !== "1") {
              alert("Numeros están en desorden");
            } else {
              numeros.innerHTML = numerosTemp + "2";
              numerosTemp = numerosTemp + "2";
            }
          }

        
        
    } else {
    
        for (let i = 0; i < letrasTemp.length; i++) {
            if (letrasTemp.charAt(i) === "B") {
              alert("Letra repetida");
              bandera = true;
            }
          }

          if (bandera == true) {
            bandera = false;
          } else {
            if (letrasTemp !== "A") {
              alert("Las letras están en desorden");
            } else {
              letras.innerHTML = letrasTemp + "B";
              letrasTemp = letrasTemp + "B";
            }
          }

    }

    
};

const logicaC3 = () => {
   
    if (letrasok == true) {

        console.log("numeros");
        for (let i = 0; i < numerosTemp.length; i++) {
            if (numerosTemp.charAt(i) === "3") {
              alert("Numero repetido");
              bandera = true;
            }
          }

          if (bandera == true) {
            bandera = false;
          } else {
            if (numerosTemp !== "12") {
              alert("Numeros están en desorden");
            } else {
              numeros.innerHTML = numerosTemp + "3";
              numerosTemp = numerosTemp + "3";
            }
          }
        
    } else {

        for (let i = 0; i < letrasTemp.length; i++) {
            if (letrasTemp.charAt(i) === "C") {
              alert("Letra repetida");
              bandera = true;
            }
          }
        
          if (bandera == true) {
            bandera = false;
          } else {
            if (letrasTemp !== "AB") {
              alert("Las letras están en desorden");
            } else {
              letras.innerHTML = letrasTemp + "C";
              letrasTemp = letrasTemp + "C";
            }
          }


    }
    
  

};

const logicaD4 = () => {
  //verificar letra repetida
  
  if (letrasok == true) {

    console.log("numeros");
    for (let i = 0; i < numerosTemp.length; i++) {
        if (numerosTemp.charAt(i) === "4") {
          alert("Numero repetido");
          bandera = true;
        }
      }

      if (bandera == true) {
        bandera = false;
      } else {
        if (numerosTemp !== "123") {
          alert("Numeros están en desorden");
        } else {
          numeros.innerHTML = numerosTemp + "4";
          numerosTemp = numerosTemp + "4";
        }
      }
    
} else {

    for (let i = 0; i < letrasTemp.length; i++) {
        if (letrasTemp.charAt(i) === "D") {
          alert("Letra repetida");
          bandera = true;
        }
      }
    
      if (bandera == true) {
        bandera = false;
      } else {
        if (letrasTemp !== "ABC") {
          alert("Las letras están en desorden");
        } else {
          letras.innerHTML = letrasTemp + "D";
          letrasTemp = letrasTemp + "D";
        }
      }
}

  
};


const logicaE5 = () => {
    //verificar letra repetida
    
    if (letrasok == true) {
  
      console.log("numeros");
      for (let i = 0; i < numerosTemp.length; i++) {
          if (numerosTemp.charAt(i) === "5") {
            alert("Numero repetido");
            bandera = true;
          }
        }
  
        if (bandera == true) {
          bandera = false;
        } else {
          if (numerosTemp !== "1234") {
            alert("Numeros están en desorden");
          } else {
            numeros.innerHTML = numerosTemp + "5";
            numerosTemp = numerosTemp + "5";
          }
        }
      
  } else {
  
      for (let i = 0; i < letrasTemp.length; i++) {
          if (letrasTemp.charAt(i) === "E") {
            alert("Letra repetida");
            bandera = true;
          }
        }
      
        if (bandera == true) {
          bandera = false;
        } else {
          if (letrasTemp !== "ABCD") {
            alert("Las letras están en desorden");
          } else {
            letras.innerHTML = letrasTemp + "E";
            letrasTemp = letrasTemp + "E";
          }
        }
  }
  
    
  };

  const logicaF6 = () => {
    //verificar letra repetida
    
    if (letrasok == true) {
  
      console.log("numeros");
      for (let i = 0; i < numerosTemp.length; i++) {
          if (numerosTemp.charAt(i) === "6") {
            alert("Numero repetido");
            bandera = true;
          }
        }
  
        if (bandera == true) {
          bandera = false;
        } else {
          if (numerosTemp !== "12345") {
            alert("Numeros están en desorden");
          } else {
            numeros.innerHTML = numerosTemp + "6";
            numerosTemp = numerosTemp + "6";
          }
        }
      
  } else {
  
      for (let i = 0; i < letrasTemp.length; i++) {
          if (letrasTemp.charAt(i) === "F") {
            alert("Letra repetida");
            bandera = true;
          }
        }
      
        if (bandera == true) {
          bandera = false;
        } else {
          if (letrasTemp !== "ABCDE") {
            alert("Las letras están en desorden");
          } else {
            letras.innerHTML = letrasTemp + "F";
            letrasTemp = letrasTemp + "F";
          }
        }
  }
  
    
  };


  const logicaG7 = () => {
    //verificar letra repetida
    
    if (letrasok == true) {
  
      console.log("numeros");
      for (let i = 0; i < numerosTemp.length; i++) {
          if (numerosTemp.charAt(i) === "7") {
            alert("Numero repetido");
            bandera = true;
          }
        }
  
        if (bandera == true) {
          bandera = false;
        } else {
          if (numerosTemp !== "123456") {
            alert("Numeros están en desorden");
          } else {
            numeros.innerHTML = numerosTemp + "7";
            numerosTemp = numerosTemp + "7";
          }
        }
      
  } else {
  
      for (let i = 0; i < letrasTemp.length; i++) {
          if (letrasTemp.charAt(i) === "G") {
            alert("Letra repetida");
            bandera = true;
          }
        }
      
        if (bandera == true) {
          bandera = false;
        } else {
          if (letrasTemp !== "ABCDEF") {
            alert("Las letras están en desorden");
          } else {
            letras.innerHTML = letrasTemp + "G";
            letrasTemp = letrasTemp + "G";
          }
        }
  }
  
  };

  const logicaH8 = () => {
    //verificar letra repetida
    
    if (letrasok == true) {
  
      console.log("numeros");
      for (let i = 0; i < numerosTemp.length; i++) {
          if (numerosTemp.charAt(i) === "8") {
            alert("Letra repetida");
            bandera = true;
          }
        }
  
        if (bandera == true) {
          bandera = false;
        } else {
          if (numerosTemp !== "1234567") {
            alert("Numeros están en desorden");
          } else {
            numeros.innerHTML = numerosTemp + "8";
            numerosTemp = numerosTemp + "8";
          }
        }
      
  } else {
  
      for (let i = 0; i < letrasTemp.length; i++) {
          if (letrasTemp.charAt(i) === "H") {
            alert("Letra repetida");
            bandera = true;
          }
        }
      
        if (bandera == true) {
          bandera = false;
        } else {
          if (letrasTemp !== "ABCDEFG") {
            alert("Las letras están en desorden");
          } else {
            letras.innerHTML = letrasTemp + "H";
            letrasTemp = letrasTemp + "H";
          }
        }
  }
  
  };

  const logicaI9 = () => {
    //verificar letra repetida
    
    if (letrasok == true) {
  
      console.log("numeros");
      for (let i = 0; i < numerosTemp.length; i++) {
          if (numerosTemp.charAt(i) === "9") {
            alert("Numero repetido");
            bandera = true;
          }
        }
  
        if (bandera == true) {
          bandera = false;
        } else {
          if (numerosTemp !== "12345678") {
            alert("Numeros están en desorden");
          } else {
            numeros.innerHTML = numerosTemp + "9";
            numerosTemp = numerosTemp + "9";
          }
        }
      
  } else {
  
      for (let i = 0; i < letrasTemp.length; i++) {
          if (letrasTemp.charAt(i) === "I") {
            alert("Letra repetida");
            bandera = true;
          }
        }
      
        if (bandera == true) {
          bandera = false;
        } else {
          if (letrasTemp !== "ABCDEFGH") {
            alert("Las letras están en desorden");
          } else {
            letras.innerHTML = letrasTemp + "I";
            letrasTemp = letrasTemp + "I";
          }
        }
  }
  
  };

  const logicaJ0 = () => {
    //verificar letra repetida
    
    if (letrasok == true) {
  
      console.log("numeros");
      for (let i = 0; i < numerosTemp.length; i++) {
          if (numerosTemp.charAt(i) === "0") {
            alert("Numero repetido");
            bandera = true;
          }
        }
  
        if (bandera == true) {
          bandera = false;
        } else {
          if (numerosTemp !== "123456789") {
            alert("Numeros están en desorden");
          } else {
            numeros.innerHTML = numerosTemp + "0";
            numerosTemp = numerosTemp + "0";
          }
        }
      
  } else {
  
      for (let i = 0; i < letrasTemp.length; i++) {
          if (letrasTemp.charAt(i) === "J") {
            alert("Letra repetida");
            bandera = true;
          }
        }
      
        if (bandera == true) {
          bandera = false;
        } else {
          if (letrasTemp !== "ABCDEFGHI") {
            alert("Las letras están en desorden");
          } else {
            letras.innerHTML = letrasTemp + "J";
            letrasTemp = letrasTemp + "J";
            letrasok = true;
          }
        }
  }
  
  };