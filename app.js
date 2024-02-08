var btnEncrypt = document.getElementById("encriptar");
var btnDecrypt = document.getElementById("desencriptar");
var originalText = document.getElementById("mensaje");
var modifiedText = document.getElementById("salida");

btnEncrypt.addEventListener("click", function (event) {
  event.preventDefault();
  var texto = document.getElementById("mensaje").value;
  texto = encriptador(texto);
  document.getElementById("salida").value = texto;
  document.getElementById("mensaje").value = "";
  document.getElementById("muñeco").style.display = "none";
});

btnDecrypt.addEventListener("click", function (event) {
  event.preventDefault();
  var texto = document.getElementById("mensaje").value;
  texto = desencriptar(texto);
  document.getElementById("salida").value = texto;
  document.getElementById("mensaje").value = "";
  document.getElementById("muñeco").style.display = "none";
});

const encriptador = (text) => {
  if (text.match(/[^a-z\s]/)) {
    return alert("Solo puedes encriptar letras minúsculas sin acentos");
  }
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let letra = text[i];
    if (letra == "e") {
      newText += "enter";
    } else if (letra == "i") {
      newText += "imes";
    } else if (letra == "a") {
      newText += "ai";
    } else if (letra == "o") {
      newText += "ober";
    } else if (letra == "u") {
      newText += "ufat";
    } else {
      newText += letra;
    }
  }
  return newText;
};

function desencriptar(text) {
  if (text.match(/[^a-z\s]/)) {
    return alert("Solo puedes encriptar letras minúsculas sin acentos");
  }
  let result = text
    .replace(/(enter)/gi, "e")
    .replace(/(imes)/gi, "i")
    .replace(/(ai)/gi, "a")
    .replace(/(ober)/gi, "o")
    .replace(/(ufat)/gi, "u");
  return result;
}

//console.log(desencriptar("gaitober"));

/** 
const desencriptar = (text) => {
  text = text.toLowerCase();
  let text2 = text;
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let letra = text[i];
    if (letra == "e" && letra.concat("nter") == "enter") {
      newText += "e";
      //i++;
    } else if (letra == "i" && letra.concat("mes") == "imes") {
      newText += "i";
      //i++;
    } else if (letra == "a" && letra.concat("i") == "ai") {
      newText += "a";
      i++;
    } else if (letra == "o" && letra.concat("ber") == "ober") {
      newText += "o";
      i + 3;
    } else if (letra == "u" && letra.concat("fat") == "ufat") {
      newText += "u";
      //i++;
    } else {
      newText += letra;
    }
  }
  return newText;
};

const desencriptar = (text) => {
  text = text.toLowerCase();
  let text2 = text;
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let letra = text[i];
    if (letra == "e" && text.substring(i, i + 5) == "enter") {
      newText += "e";
      i++;
    } else if (letra == "i" && text.substring(i, i + 4) == "imes") {
      //text2.replace("imes", "z");
      newText += "i";
      i++;
    } else if (letra == "a" && text.substring(i, i + 2) == "ai") {
      //text2.replace("ai", "a");
      newText += "a";
      i++;
    } else if (letra == "o" && text.substring(i, i + 4) == "ober") {
      //text2.replace("ober", "o");
      newText += "o";
      i++;
    } else if (letra == "u" && text.substring(i, i + 4) == "ufat") {
      newText += "u";
      i++;
    } else {
      newText += letra;
    }
  }
  return newText;
};

*/
