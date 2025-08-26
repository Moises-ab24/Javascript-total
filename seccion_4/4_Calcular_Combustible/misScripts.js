function calcularLitros(){
    var elementoKM = document.getElementById("textokm");
    var textoKM = elementoKM.value;
    var cantKm = Number(textoKM);

    var cantLitros = Math.ceil(cantKm / 8.8);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantLitros + " litros de combustible";
}
