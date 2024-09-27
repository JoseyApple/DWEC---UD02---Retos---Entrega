function mostrarHorasEnIntervalos(inicio, fin, intervalo) {
    for (let hora = inicio; hora <= fin; hora++) {
        for (let minutos = 0; minutos < 60; minutos += intervalo) {
            // Si estamos en la hora final, solo mostramos cuando los minutos son cero
            if (hora === fin && minutos > 0) {
                break;
            }
            // Formatear la salida para que siempre aparezcan los minutos con dos dígitos
            document.write(`${hora}:${minutos === 0 ? '00' : minutos}`+"<br>");
        }
    }
}

mostrarHorasEnIntervalos(15, 17, 15);
