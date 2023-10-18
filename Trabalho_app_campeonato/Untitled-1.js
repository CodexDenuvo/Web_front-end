let q = Number(prompt("Digite o numero de jogadores que irão participar: (entre 2 e 20)"));
if (q > 20 || q < 2) {
    let a = 1;
    while (a == 1) {
        q = Number(prompt("Numero de jogadores invalido, tente novamente:"));
        if (q >= 2 && q <= 20) {
            a += 1;
        }
    }
}
let valor1 = "";
for (let  i = 0; i < q; i++) {
    valor1 = "";
    valor1 += "<div id ='nomes' class='flex-container'> <label for='n" + (i+1) + "'>Digite o nome de um jogador:</label>";
    valor1 += " <br>";
    valor1 += "<input type='text' value='' id='n" +  (i+1) + "'> ";
    valor1 += " <br>";
    valor1 += "<input type='button' value='enviar' id='send' onclick='addjogad()'>";
    if (i <= 2) {
        document.getElementById("adiv1").innerHTML += valor1;
    }
    if (i > 2 && i <= 5) {
        document.getElementById("adiv2").innerHTML += valor1;
    }
    if (i > 5 && i <= 8) {
        document.getElementById("adiv3").innerHTML += valor1;
    }
    if (i > 8 && i <= 11) {
        document.getElementById("adiv4").innerHTML += valor1;
    }
    if (i > 11 && i <= 14) {
        document.getElementById("adiv5").innerHTML += valor1;
    }
    if (i > 14 && i <= 17) {
        document.getElementById("adiv6").innerHTML += valor1;
    }
    if (i > 17) {
        document.getElementById("adiv7").innerHTML += valor1;
    }
}
let jogad = [];
let t = jogad.length;
let nome1 = "";
let nome2 = "";
let listanome1 = [];
let listanome2 = [];
let clone = 0;
function addjogad() {
    if (t < q-1) {
        let nome1 = "n";
        let nome2 = t+1;
        nome1= nome1 + nome2;
        let nombre = document.getElementById(nome1).value;
        let obj = {};
        obj.Nome = nombre;
        obj.Pontos = 0;
        jogad.push(obj);
        t = jogad.length;
    } else {
        let nome1 = "n";
        let nome2 = t+1;
        nome1= nome1 + nome2;
        let nombre = document.getElementById(nome1).value;
        let obj = {};
        obj.Nome = nombre;
        obj.Pontos = 0;
        jogad.push(obj);
        t = jogad.length;

        let quantjogos = t*(t-1)/2;
        clone = quantjogos;
        let n1 = 0;
        let n2 = 1;
        let valor = "";
        document.getElementById("Adiv").innerHTML = '<div id="thediv"> <div id="pdiv1" class="carne"> </div> <div id="pdiv2" class="carne"> </div> <div id="pdiv3" class="carne"> </div> <div id="pdiv4" class="carne"> </div> <div id="pdiv5" class="carne"> </div> <div id="pdiv6" class="carne"> </div> <div id="pdiv7" class="carne"> </div> <div id="pdiv8" class="carne"> </div>  <div id="pdiv9" class="carne"> </div> <div id="pdiv10" class="carne"> </div> <div id="pdiv11" class="carne"> </div> <div id="pdiv12" class="carne"> </div> <div id="pdiv13" class="carne"> </div> <div id="pdiv14" class="carne"> </div> <div id="pdiv15" class="carne"> </div>  <div id="pdiv16" class="carne"> </div> <div id="pdiv17" class="carne"></div> <div id="pdiv18" class="carne"> </div> <div id="pdiv19" class="carne"> </div> <div id="pdiv20" class="carne"> </div> <div id="pdiv21" class="carne"> </div> <div id="pdiv22" class="carne"> </div> <div id="pdiv23" class="carne"> </div> <div id="pdiv24" class="carne"> </div> <div id="pdiv25" class="carne"> </div> <div id="pdiv26" class="carne"> </div> <div id="pdiv27" class="carne"> </div> <div id="pdiv28" class="carne"> </div> <div id="pdiv29" class="carne"> </div> <div id="pdiv30" class="carne"> </div> <div id="pdiv31" class="carne"> </div> <div id="pdiv32" class="carne"> </div> <div id="pdiv33" class="carne"> </div> <div id="pdiv34" class="carne"> </div> <div id="pdiv35" class="carne"> </div> <div id="pdiv36" class="carne"> </div> <div id="pdiv37" class="carne"> </div> <div id="pdiv38" class="carne"> </div> </div>';
        while (clone > 0) {
            if (quantjogos-clone < t-1) {
                n1 = 0;
            }
            if (quantjogos - (t-1) == clone) {
                n1 = 1;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2) == clone) {
                n1 = 2;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3) == clone && t>2) {
                n1 = 3;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4) == clone && t>3) {
                n1 = 4;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5) == clone && t>4) {
                n1 = 5;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6) == clone && t>5) {
                n1 = 6;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7) == clone && t>6) {
                n1 = 7;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8) == clone && t>7) {
                n1 = 8;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9) == clone && t>8) {
                n1 = 9;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10) == clone && t>9) {
                n1 = 10;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11) == clone && t>10) {
                n1 = 11;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12) == clone && t>11) {
                n1 = 12;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13) == clone && t>12) {
                n1 = 13;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14) == clone && t>13) {
                n1 = 14;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14 + t-15) == clone && t>14) {
                n1 = 15;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14 + t-15 + t-16) == clone && t>15) {
                n1 = 16;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14 + t-15 + t-16 + t-17) == clone && t>16) {
                n1 = 17;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14 + t-15 + t-16 + t-17 + t-18) == clone && t>17) {
                n1 = 18;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14 + t-15 + t-16 + t-17 + t-18 + t-19) == clone && t>18) {
                n1 = 19;
                n2 = n1 + 1;
            }
            if (quantjogos - (t-1 + t-2 + t-3 + t-4 + t-5 + t-6 + t-7 + t-8 + t-9 + t-10 + t-11 + t-12 + t-13 + t-14 + t-15 + t-16 + t-17 + t-18 + t-19 + t-20) == clone && t>19) {
                n1 = 20;
                n2 = n1 + 1;
            }
            valor = "";
            nome1 = jogad[n1].Nome;
            nome2 = jogad[n2].Nome;
            listanome1.push(jogad[n1].Nome);
            listanome2.push(jogad[n2].Nome);
            valor += "<div id='partida'> <div id='spans'> <span id='p1'>" + nome1 + "</span>" + "<span id='versus'>VS</span> " + "<span id='p2'>" + nome2 + "</span> </div>";
            valor += " <br> ";
            valor += "<span id='linguica'>Quem vencerá?</span>";
            valor += " <br> ";
            valor += " <input type='button'  value='Primeiro' onclick='primeiroganha()' class='choise' id='choise'> <input type='button'  value='Segundo' name='playb"  + (quantjogos-clone) + "' class='choise' id='choise' onclick='segundoganha'>";
            if  (quantjogos-clone < 5) {
                document.getElementById("pdiv1").innerHTML += valor;
            }
            if  (quantjogos-clone >= 5 && quantjogos-clone < 10) {
                document.getElementById("pdiv2").innerHTML += valor;
            }
            if  (quantjogos-clone >= 10 && quantjogos-clone < 15) {
                document.getElementById("pdiv3").innerHTML += valor;
            }
            if  (quantjogos-clone >= 15 && quantjogos-clone < 20) {
                document.getElementById("pdiv4").innerHTML += valor;
            }
            if  (quantjogos-clone >= 25 && quantjogos-clone < 30) {
                document.getElementById("pdiv5").innerHTML += valor;
            }
            if  (quantjogos-clone >= 30 && quantjogos-clone < 35) {
                document.getElementById("pdiv6").innerHTML += valor;
            }
            if  (quantjogos-clone >= 35 && quantjogos-clone < 40) {
                document.getElementById("pdiv7").innerHTML += valor;
            }
            if  (quantjogos-clone >= 40 && quantjogos-clone < 45) {
                document.getElementById("pdiv8").innerHTML += valor;
            }
            if  (quantjogos-clone >= 45 && quantjogos-clone < 50) {
                document.getElementById("pdiv9").innerHTML += valor;
            }
            if  (quantjogos-clone >= 50 && quantjogos-clone < 55) {
                document.getElementById("pdiv10").innerHTML += valor;
            }
            if  (quantjogos-clone >= 55 && quantjogos-clone < 60) {
                document.getElementById("pdiv11").innerHTML += valor;
            }
            if  (quantjogos-clone >= 60 && quantjogos-clone < 65) {
                document.getElementById("pdiv12").innerHTML += valor;
            }
            if  (quantjogos-clone >= 65 && quantjogos-clone < 70) {
                document.getElementById("pdiv13").innerHTML += valor;
            }
            if  (quantjogos-clone >= 70 && quantjogos-clone < 75) {
                document.getElementById("pdiv14").innerHTML += valor;
            }
            if  (quantjogos-clone >= 75 && quantjogos-clone < 80) {
                document.getElementById("pdiv15").innerHTML += valor;
            }
            if  (quantjogos-clone >= 80 && quantjogos-clone < 85) {
                document.getElementById("pdiv16").innerHTML += valor;
            }
            if  (quantjogos-clone >= 85 && quantjogos-clone < 90) {
                document.getElementById("pdiv17").innerHTML += valor;
            }
            if  (quantjogos-clone >= 90 && quantjogos-clone < 95) {
                document.getElementById("pdiv18").innerHTML += valor;
            }
            if  (quantjogos-clone >= 95 && quantjogos-clone < 100) {
                document.getElementById("pdiv19").innerHTML += valor;
            }
            if  (quantjogos-clone >= 100 && quantjogos-clone < 105) {
                document.getElementById("pdiv20").innerHTML += valor;
            }
            if  (quantjogos-clone >= 105 && quantjogos-clone < 110) {
                document.getElementById("pdiv21").innerHTML += valor;
            }
            if  (quantjogos-clone >= 110 && quantjogos-clone < 115) {
                document.getElementById("pdiv22").innerHTML += valor;
            }
            if  (quantjogos-clone >= 115 && quantjogos-clone < 120) {
                document.getElementById("pdiv23").innerHTML += valor;
            }
            if  (quantjogos-clone >= 120 && quantjogos-clone < 125) {
                document.getElementById("pdiv24").innerHTML += valor;
            }
            if  (quantjogos-clone >= 125 && quantjogos-clone < 130) {
                document.getElementById("pdiv25").innerHTML += valor;
            }
            if  (quantjogos-clone >= 130 && quantjogos-clone < 135) {
                document.getElementById("pdiv26").innerHTML += valor;
            }
            if  (quantjogos-clone >= 135 && quantjogos-clone < 140) {
                document.getElementById("pdiv27").innerHTML += valor;
            }
            if  (quantjogos-clone >= 140 && quantjogos-clone < 145) {
                document.getElementById("pdiv28").innerHTML += valor;
            }
            if  (quantjogos-clone >= 145 && quantjogos-clone < 150) {
                document.getElementById("pdiv29").innerHTML += valor;
            }
            if  (quantjogos-clone >= 150 && quantjogos-clone < 155) {
                document.getElementById("pdiv30").innerHTML += valor;
            }
            if  (quantjogos-clone >= 155 && quantjogos-clone < 160) {
                document.getElementById("pdiv31").innerHTML += valor;
            }
            if  (quantjogos-clone >= 160 && quantjogos-clone < 165) {
                document.getElementById("pdiv32").innerHTML += valor;
            }
            if  (quantjogos-clone >= 165 && quantjogos-clone < 170) {
                document.getElementById("pdiv33").innerHTML += valor;
            }
            if  (quantjogos-clone >= 170 && quantjogos-clone < 175) {
                document.getElementById("pdiv34").innerHTML += valor;
            }
            if  (quantjogos-clone >= 175 && quantjogos-clone < 180) {
                document.getElementById("pdiv35").innerHTML += valor;
            }
            if  (quantjogos-clone >= 180 && quantjogos-clone < 185) {
                document.getElementById("pdiv36").innerHTML += valor;
            }
            if  (quantjogos-clone >= 185) {
                document.getElementById("pdiv37").innerHTML += valor;
            }
            n2++;
            clone--; 
            }
    }
}
let p = 0;
let array = [];
function primeiroganha() {  
    let i = array.length;
    while (i > 0) {
        if  (array[i].Name == listanome1[p]) {
        array[i].Pontos = array[i].Pontos + 1;
        i++
        } else {
            let obj = {};
            obj.Name = listanome1[p];
            obj.Pontos = 0;
            obj.Pontos = obj.pontos + 1;
            array.push(obj);
            i++
        }
    }
    array.sort(function(a, b) {
        if(a.Pontos < b.Pontos) {
            return -1;
        } else {
            return true;
        }
    });
}
function segundoganha() {
    let i = array.length;
    while (i > 0) {
        if  (array[i].Name == listanome2[p]) {
        array[i].Pontos = array[i].Pontos + 1;
        } else {
            let obj = {};
            obj.Name = listanome2[p];
            obj.Pontos = 0;
            obj.Pontos = obj.pontos + 1;
            array.push(obj);
        }
        i--
    }
    array.sort(function(a, b) {
        if(a.Pontos < b.Pontos) {
            return -1;
        } else {
            return true;
        }
    });
}