function bhaskara(a: number, b: number, c:number) {

    console.clear();
    var quadradodeb = b * b;
    var delta = quadradodeb - 4*a*c;

    if(delta < 0) {
        console.log("Não é possível calcular o valor de Delta pois ele é menor q 0");
    }
    if(delta == 0) {

        console.log("O Delta eh 0, X1 e X2 serao iguais");
    }

    var valornegb = b * (-1);
    var raizdelta = Math.sqrt(delta);
    var divisor = 2 * a;
    var x1 = (valornegb + raizdelta) / divisor;
    var x2 = (valornegb - raizdelta) / divisor;

    console.log("Delta: " + delta);
    console.log("X1: " + x1);
    console.log("X2: " + x2);
}

bhaskara(1,0,-144);