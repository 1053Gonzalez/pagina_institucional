

/*Se agrega script para docentes*/
function mostrarDescripcion(id) {
	document.getElementById('descripcion').style.display = 'block';
	document.querySelector('.blur').style.display = 'block';

	// TODO: Agregar información del profesor seleccionado en la descripción completa
}

function ocultarDescripcion() {
	document.getElementById('descripcion').style.display = 'none';
	document.querySelector('.blur').style.display = 'none';
}
/*Finaliza script para docentes*/

/**inicia script para control de campos de notas requeridas*/

function validateForm() {
	var carnet = document.getElementById("carnet").value;
	var docEstudiante = document.getElementById("doc-estudiante").value;
	var docAcudiente = document.getElementById("doc-acudiente").value;
  
	if (carnet == "" || docEstudiante == "" || docAcudiente == "") {
	  alert("Por favor diligenciar todos los campos correctamente.");
	} else {
	  alert("Las notas académicas no han sido cargadas, por favor intente mas tarde.");
	}
  }
/*finaliza script para notas*/