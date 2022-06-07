function enviar() {
    //e.preventDefault();
    alert("se envia el formulario")

    return false;

}

function validar() {
    let f_nombre = document.getElementById("f_nombre");
    let f_edad = document.querySelector("#f_edad");
    let f_correo = document.fmr.f_correo;
    let f_matematica = document.fmr.f_matematica;
    let f_lengua = document.fmr.f_lengua;
    let f_sociales = document.fmr.f_sociales;

    if (f_nombre.value.trim() == '') {
        console.log("no puede ser vacio");

    }
    let mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!mail.test(f_correo.value)) {
        console.log("debe ser un email valido");

    }
    //verifico nombre
    if(f_edad.value.trim()==''){
        console.log("no puede ser vacio");
    }else if(isNaN(f_edad.value)){
        console.log("edad debe ser un numero");
    }

    //console.log(f_nombre.value);
    //console.log(f_edad.value);
    //console.log(f_correo.value);
    //console.log(f_matematica.value);
    //console.log(f_lengua.value);
    //console.log(f_sociales.value);
    return true;




}