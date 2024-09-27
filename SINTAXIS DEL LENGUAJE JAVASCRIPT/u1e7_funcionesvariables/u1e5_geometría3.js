function perimetroTriangulo(){

    let lados = arguments;

    if (lados.length === 1){

        let resultado = lados[0]*3;
        document.write("El triángulo es equilátero, por lo tanto el perímetro es: "+ resultado+"<br>");

    } else if (lados.length === 2) {

        let resultado = lados[0] + (lados[1]*2);
        document.write("El triángulo es isósceles, por lo tanto, el perímetro es: "+ resultado+"<br>");

    } else if (lados.length === 3) {

        let resultado = lados[0] + lados[1] + lados[2];
        document.write("El triángulo es escaleno, por lo tanto, el perímetro es: "+resultado+"<br>");

    } else {

        document.write("Número de lados no válido.")
    }
}

function perimetroParalelogramo(){
    
    let lados = arguments;

    if (lados.length===1){
        let resultado = lados[0]*4;
        document.write("El perímetro del cuadrado es: "+resultado+"<br>");
    } else if (lados.length===2){
        let resultado = (lados[0]*2) + (lados[1]*2);
        document.write("El perímetro del rectángulo es: "+resultado+"<br>");
    }

}
