function mostrarHorasEnIntervalos() {

    let contraseña = prompt("Introduce una contraseña para saber si es segura o no.");

    let letrasMayus="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let letrasMinus="abcdefghijklmnopqrstuvwxyz"
    let numeros="0123456789"
    let simbolos="-_=*+$@#"
    let contadorM=0;
    let contadorMinus=0;
    let contadorNum=0;
    let contadorSimbolos=0;
    let contadorglobal=0;

    if (contraseña.length<8){
        alert("Mínimo 8 caracteres.")

    }else {

        for (let i = 0; i<contraseña.length; i++){
        let char = contraseña[i];
        if (letrasMayus.includes(char)){
            contadorM++;
        } else if (letrasMinus.includes(char)){
            contadorMinus++;
        } else if (numeros.includes(char)){
            contadorNum++;
        } else if (simbolos.includes(char)){
            contadorSimbolos++;
        }
    }

    if(contadorM>0){
        contadorglobal++;
    } if (contadorMinus>0){
        contadorglobal++;
    } if (contadorNum>0){
        contadorglobal++;
    } if (contadorSimbolos>0){
        contadorglobal++;
    }

    document.write("Contador de mayúsculas: " + contadorM + "<br>" +
        "Contador de minúsculas: " + contadorMinus + "<br>" +
        "Contador de números: " + contadorNum + "<br>"+
    "Contador de simbolos: "+contadorSimbolos);
}

if (contadorglobal == 4) {
    alert("La contraseña es segura.");
} if (contadorglobal >= 2) {
    alert("Contraseña poco segura.");
} else {
    alert("Contraseña débil.");
}
}


mostrarHorasEnIntervalos();