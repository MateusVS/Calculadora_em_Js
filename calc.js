function calcula(valor) {
    var x = document.calc.tela.value;

    document.calc.tela.value = x + valor;

}

function resul() {

    var conta = document.getElementById('tela').value;
    if (conta === '') {
        alert("Impossivel calcular, os valores não foram informados");
    } else {
        var resultado = (eval(conta));
        document.getElementById('tela').value = resultado;

        document.getElementsByClassName('botao')
    }

}

function raiz() {
    var i = parseInt(document.calc.tela.value);
    var tratamento = (isNaN(i));
    if (tratamento === true) {
        alert("Impossivel calcular, os valores não foram informados");
    } else {
        var y = Math.sqrt(i);
        document.calc.tela.value = y;
    }
}

function quadrado() {
    var x = parseInt(document.calc.tela.value);

    var teste = (isNaN(x));
    if (teste === true) {
        alert("Impossivel calcular, os valores não foram informados");
    } else {
        var resul = Math.pow(x, 2);
        document.calc.tela.value = resul;
    }
}

function cubo() {
    var z = parseInt(document.calc.tela.value);

    var teste = (isNaN(z));
    if (teste === true) {
        alert("Impossivel calcular, os valores não foram informados");
    } else {
        var final = Math.pow(z, 3);
        document.calc.tela.value = final;
    }
}

function log() {
    var a = parseInt(document.calc.tela.value);
    var teste = (isNaN(a));
    if (teste === true) {
        alert("Impossivel calcular, os valores não foram informados");
    } else {
        b = Math.log(a);
        document.calc.tela.value = b;
    }

}