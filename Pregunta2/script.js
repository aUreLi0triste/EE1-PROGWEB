function calcularTemperatura(){
    const temp = document.getElementById("temp").value;
    const resultado = (parseInt(temp)-32)*(5/9);
    document.getElementById("resultado").innerHTML = resultado;
    return alert("La temperatura es: "+resultado + "C°");

}