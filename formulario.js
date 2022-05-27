function enviar(e){
    if(validar()){

    }
    return false;

}

function validar(){
    let f_nombre = document.getElementById(f_nombre);
    if(f_nombre.value==""){
        console.log("Nombre no puede ser vacio ");
    }
    let f_edad = document.querySelector(f_edad);
    console.log(f_nombre.value);
    console.log(f_edad.value);
    return true;

}