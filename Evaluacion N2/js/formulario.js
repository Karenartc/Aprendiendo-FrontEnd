function validarFormulario() {
    if (
        validarNombre() &&
        validarApellido() &&
        validarDireccion() &&
        validarRut() &&
        validarTelefono() &&
        validarMotivo()
    ) {
        window.location.href = "comentario.html";
    }
    return false;
}

function validarNombre() {
    let campoNombre = document.getElementById("nombre");
    let mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
    let valorNombre = campoNombre.value.trim();
    let regex = /^[a-zA-Z\s]+$/;

    if (valorNombre === "") {
        mensajeErrorNombre.textContent = "Por favor, ingrese su nombre.";
        campoNombre.focus();
        return false;
    } else if (!regex.test(valorNombre)) {
        mensajeErrorNombre.textContent = "Ingrese solo palabras.";
        campoNombre.focus();
        return false;
    } else {
        mensajeErrorNombre.textContent = "";
        return true;
    }
}

function validarApellido() {
    let campoApellido = document.getElementById("apellido");
    let mensajeErrorApellido = document.getElementById("mensajeErrorApellido");
    let valorApellido = campoApellido.value.trim();
    let regex = /^[a-zA-Z\s]+$/;

    if (valorApellido === "") {
        mensajeErrorApellido.textContent = "Por favor, ingrese su apellido.";
        campoApellido.focus();
        return false;
    } else if (!regex.test(valorApellido)) {
        mensajeErrorApellido.textContent = "Ingrese solo palabras.";
        campoApellido.focus();
        return false;
    } else {
        mensajeErrorApellido.textContent = "";
        return true;
    }
}

function validarDireccion(){
    let campoDireccion = document.getElementById("direccion");
    let mensajeErrorDireccion = document.getElementById("mensajeErrorDireccion");
    let valorDireccion = campoDireccion.value.trim();
    let regex = /^[a-zA-Z0-9\s\-\.\,]+$/;

    if (valorDireccion === "") {
        mensajeErrorDireccion.textContent = "Por favor, ingrese su dirección.";
        campoDireccion.focus();
        return false;
    } else if (!regex.test(valorDireccion)) {
        mensajeErrorDireccion.textContent = "Ingrese una dirección válida.";
        campoApellido.focus();
        return false;
    } else {
        mensajeErrorDireccion.textContent = "";
        return true;
    }
}

function validarRut() {
    let campoRut = document.getElementById("rut");
    let mensajeErrorRut = document.getElementById("mensajeErrorRut");
    let valorRut = campoRut.value.trim();

    // Expresión regular para validar el formato del RUT chileno
    let regexRut = /^\d{7,8}-[\dKk]$/;

    if (valorRut === "") {
        mensajeErrorRut.textContent = "Por favor, ingrese su RUT.";
        campoRut.focus();
        return false;
    } else if (!regexRut.test(valorRut)) {
        mensajeErrorRut.textContent = "Ingrese su rut sin puntos y con guión.";
        campoRut.focus();
        return false;
    } else {
        mensajeErrorRut.textContent = "";
        return true;
    }
}

function validarTelefono() {
    let campoTelefono = document.getElementById("telefono");
    let mensajeErrorTelefono = document.getElementById("mensajeErrorTelefono");
    let valorTelefono = campoTelefono.value.trim();

    // Expresión regular para validar el formato del número de teléfono chileno
    let regexTelefono = /^\+569\d{8}$/;

    if (valorTelefono === "") {
        mensajeErrorTelefono.textContent = "Por favor, ingrese su número de teléfono.";
        campoTelefono.focus();
        return false;
    } else if (!regexTelefono.test(valorTelefono)) {
        mensajeErrorTelefono.textContent = "Ingrese su número de teléfono comenzando con +569 seguido de su número.";
        campoTelefono.focus();
        return false;
    } else {
        mensajeErrorTelefono.textContent = "";
        return true;
    }
}

function validarMotivo() {
    let campoMotivo = document.getElementById("motivo");
    let mensajeErrorMotivo = document.getElementById("mensajeErrorMotivo");
    let valorMotivo = campoMotivo.value.trim();
    let regex = /^[a-zA-Z0-9\s\-\.\,]+$/;

    if (valorMotivo === "") {
        mensajeErrorMotivo.textContent = "Por favor, ingrese su Motivo de visita.";
        campoMotivo.focus();
        return false;
    } else if (!regex.test(valorMotivo)) {
        mensajeErrorMotivo.textContent = "Ingrese un motivo válido.";
        campoMotivo.focus();
        return false;
    } else {
        mensajeErrorMotivo.textContent = "";
        return true;
    }
}

// Borrar el mensaje de error cuando se escriba en el input
document.getElementById("nombre").addEventListener("input", function () {
    document.getElementById("mensajeErrorNombre").textContent = "";
});

document.getElementById("apellido").addEventListener("input", function () {
    document.getElementById("mensajeErrorApellido").textContent = "";
});

document.getElementById("direccion").addEventListener("input", function () {
    document.getElementById("mensajeErrorDireccion").textContent = "";
});

document.getElementById("rut").addEventListener("input", function () {
    document.getElementById("mensajeErrorRut").textContent = "";
});

document.getElementById("telefono").addEventListener("input", function () {
    document.getElementById("mensajeErrorTelefono").textContent = "";
});

document.getElementById("motivo").addEventListener("input", function () {
    document.getElementById("mensajeErrorMotivo").textContent = "";
});

// Borra todos los mensajes de error al cargar la página.
function validaciones() {
    document.getElementById("mensajeErrorNombre").textContent = "";
    document.getElementById("mensajeErrorApellido").textContent = "";
    document.getElementById("mensajeErrorDireccion").textContent = "";
    document.getElementById("mensajeErrorRut").textContent = "";
    document.getElementById("mensajeErrorTelefono").textContent = "";
    document.getElementById("mensajeErrorMotivo").textContent = "";
}
