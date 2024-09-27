function mostrarHorasEnIntervalos() {

    let acceso=false;
    let inicio, fin, intervalo;

    do {

    inicio = parseInt(prompt("Introduce la hora inicio."));
    if (inicio<0 || inicio>23){
        alert("Fallo al introducir la hora");
        continue;
    }
    fin = parseInt(prompt("Introduce la hora fin."));
    if (fin<0 || fin >23 || fin < inicio){
        alert("Fallo al introducir la hora fin.");
        continue;
    }

    intervalo = parseInt(prompt("Introduce el intervalo en minutos."));
    if (intervalo<=0 || intervalo > 60){
        alert("Fallo al introducir el intervalo.")
        continue;
    }

    acceso=true;
    
        
    } while (!acceso);
    
      for (let hora = inicio; hora <= fin; hora++) {
        for (let minutos = 0; minutos < 60; minutos += intervalo) {
            // Si estamos en la hora final, solo mostramos cuando los minutos son cero
            if (hora === fin && minutos > 0) {
                break;
            }
            // Formatear la salida para que siempre aparezcan los minutos con dos dígitos
            document.write(`${hora}:${minutos < 10 ? '0' : ''}${minutos}<br>`);
        }
    }  
}   

mostrarHorasEnIntervalos();


