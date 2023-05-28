
function mostrarImagenes() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "block";
  }

  function aplicarCambios() {
    var elemento = document.getElementsByName('colorElegido')[0];
    console.log('color elegido: ' + elemento.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamElegido = tam.options[tam.selectedIndex].value;
    console.log('tamaño de la fuente: ' + tamElegido);

    var parrafo = document.getElementById('esteParrafo');
    parrafo.style.fontSize = tamElegido + "px";
    parrafo.style.color = elemento.value;

    document.documentElement.style.fontSize = tamElegido + "px";

    // Guardar preferencias en el almacenamiento local
    localStorage.setItem('colorElegido', elemento.value);
    localStorage.setItem('tamFuenteElegido', tamElegido);

    // Aplicar preferencias en todas las ventanas abiertas
    var ventanas = window.parent.frames;
    for (var i = 0; i < ventanas.length; i++) {
        var ventana = ventanas[i];
        ventana.document.getElementById('esteParrafo').style.fontSize = tamElegido + "px";
        ventana.document.getElementById('esteParrafo').style.color = elemento.value;
        ventana.document.documentElement.style.fontSize = tamElegido + "px";
    }
}

// Cargar preferencias almacenadas al cargar la página
window.onload = function() {
    var colorElegido = localStorage.getItem('colorElegido');
    var tamFuenteElegido = localStorage.getItem('tamFuenteElegido');

    if (colorElegido && tamFuenteElegido) {
        document.getElementsByName('colorElegido')[0].value = colorElegido;
        document.getElementsByName('tamFuente')[0].value = tamFuenteElegido;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var usernameElement = document.getElementById("username");
    var usernameInput = document.getElementById("username-input");
    var saveButton = document.getElementById("username-button");
  
    saveButton.addEventListener("click", function() {
      var username = usernameInput.value;
      usernameElement.innerText = username;
    });
  });