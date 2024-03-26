function calcularMedia(){
    var valorUm = parseInt(document.getElementById("valor1").value);
    var valorDois = parseInt(document.getElementById("valor2").value);
    var valorTres = parseInt(document.getElementById("valor3").value);

    var media = (valorUm + valorDois + valorTres) / 3

    document.getElementById("resultado").innerHTML = "Resultado: " + media;

    console.log(valorUm + valorDois + valorTres)
}