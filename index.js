// function enviarFormulario() {
//     console.log("¡Formulario enviado con éxito!");
// }

// enviarFormulario(); // Call the function to print the message


// let usario = {
//     name: "name_1",
//     email: 'email_1',
//     message: 'mensaje_1'
//     }
    
//     let datos_user = (nombre, email, mensaje) => {
//     if (nombre != "" && email != "" && mensaje != ""){
//     return true
    
//     } else {
//     return false

//     }

//     }
    
//     let enviar = ()=>{
//     if (contenido(datos.nombre,datos.email,datos.mensaje)){
//     console.log("¡Formulario enviado con éxito!")
//     }else {
//     console.log("Por favor completa todos los campos.")
//     }
//     }
    
//     enviar();


// let contenido = (nombre, email, mensaje, password) => {
//     if (nombre !== "" && email !== "" && mensaje !== "" && password !== "") {
//         return true;
//     } else {
//         return false;
//     }
// }

// let enviar = (datos) => {
//     if (contenido(datos.nombre, datos.email, datos.mensaje, datos.password)) {
//         console.log("¡Formulario enviado con éxito!");
//     } else {
//         console.log("Por favor completa todos los campos.");
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent the form from submitting
//         const nombre = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const mensaje = document.getElementById("message").value;
//         const password = document.getElementById("password").value;
//         let datos = {
//             nombre: nombre,
//             email: email,
//             mensaje: mensaje,
//             password: password
//         };
//         enviar(datos);
//     });
// });



// Wrap your code in a function that will execute when the document is loaded
// function setupForm() {
//     const form = document.querySelector("form");
//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent the form from submitting
//         const nombre = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const mensaje = document.getElementById("message").value;
//         const password = document.getElementById("password").value;
//         let datos = {
//             nombre: nombre,
//             email: email,
//             mensaje: mensaje,
//             password: password
//         };
//         enviar(datos);
//     });
// }

// // Add an event listener for the DOMContentLoaded event
// document.addEventListener("DOMContentLoaded", setupForm);


function submitForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    // Verifica si los `inputs` no están vacíos
    if (name.trim() === '' || password.trim() === '') {
        alert("Please fill out all fields.");
        window.location.href = "./ingesa_tus_datos.html";
        return;
    }
    
    // Redirecciona a otra página
    window.location.href = "./form_con_exito.html"; 

    
}

function goBack() {
    // Redirecciona a otra página
    window.location.href = "./index.html"; 
}
function BackHome() {
    // Redirecciona a otra página
    window.location.href = "./index.html"; 
}

console.log("¡Formulario enviado con éxito!")




