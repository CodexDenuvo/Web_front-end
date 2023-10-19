let jogad = [];
let nome1 = "";
let nome2 = "";
let listanome1 = [];
let listanome2 = [];
let clone = 0;
let t = 0;
function addjogad() {
    let a = document.getElementById("quantjogadores").value;
        if (a == 2 || a == 3 || a == 4 || a == 5 || a == 6 || a == 7 || a == 8 || a == 9 || a == 10 || a == 11 || a == 12 || a == 13 || a == 14 || a == 15 || a == 16 || a == 17 || a == 18 || a == 19 || a == 20) {
            for (let i = 0; i <a; i++) {
                let n = prompt("Digite o nome de um time:");
                let obj = {};
                obj.Nome = n;
                obj.Pontos = 0;
                jogad.push(obj);
                t += 1;
            }
        } else {
            alert("Digite um Numero entre 2 e 20 por favor.");
        }
}
let quantjogos = 0;
function criarjogos() {
    if (t == 2 || t == 3 || t == 4 || t == 5 || t == 6 || t == 7 || t == 8 || t == 9 || t == 10 || t == 11 || t == 12 || t == 13 || t == 14 || t == 15 || t == 16 || t == 17 || t == 18 || t == 19 || t == 20) {
        quantjogos += t*(t-1)/2;
        clone = quantjogos;
        let n1 = 0;
        let n2 = 1;
        let valor = "";
        document.getElementById("thediv").innerHTML = "";
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
            valor += " <div id='escolhas'> <input type='button'  value='Primeiro' onclick='primeiroganha()' class='choise' id='choise'> <input type='button'  value='Segundo' name='playb"  + (quantjogos-clone) + "' class='choise' id='choise' onclick='segundoganha()'> </div> </div>";
            document.getElementById("thediv").innerHTML += valor;
            n2++;
            clone--; 
        }
    } else {
        alert("Digite o número de jogadores antes de gerar os jogos.");
    }
}
let p = 0;
function primeiroganha() {  
    let a = 0;
    let b = 0;
    while (a == 0) {
        if (p < quantjogos) {
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome1[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
        } else {
            document.getElementById("thediv").innerHTML = "";
            mostraresult();
        }
        a++;
    }
}
function segundoganha() {
    let a = 0;
    let b = 0;
    while (a == 0) {
        if (p < quantjogos) {
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
            if (a == 0 && jogad[b].Nome == listanome2[p]) {
                jogad[b].Pontos = jogad[b].Pontos + 1;
                a++;
                p++;
                b++;
            } else  {
                b++;
            }
        }
        document.getElementById("thediv").innerHTML = "";
        mostraresult();
        a++;
    }
}
let u = 0;
let array;
function mostraresult() {  
    if (jogad.length > 0) {
        array = jogad;
        array.sort(function(a, b) {
            if (a.Pontos < b.Pontos) {
                return 1;
            } else  {
                return -1;
            }
        });
        if (u==0) {
            for (let i = 0; i < array.length; i++) {
                let posicao;
                let valor = ""; 
                if (i == 0) {
                    posicao = "Primeiro";
                } else if (i == 1) {
                    posicao = "Segundo";
                } else if (i == 2) {
                    posicao = "Terceiro";
                } else if (i == 3) {
                    posicao = "Quarto";
                } else if (i == 4) {
                    posicao = "Quinto";
                } else if (i == 5) {
                    posicao = "Sexto";
                } else if (i == 6) {
                    posicao = "Sétimo";
                } else if (i == 7) {
                    posicao = "Oitavo";
                } else if (i == 8) {
                    posicao = "Nono";
                } else if (i == 9) {
                    posicao = "Decimo";
                } else if (i == 10) {
                    posicao = "Decimo Primeiro";
                } else if (i == 11) {
                    posicao = "Decimo Segundo";
                } else if (i == 12) {
                    posicao = "Decimo Terceiro";
                } else if (i == 13) {
                    posicao = "Decimo Quarto";
                } else if (i == 14) {
                    posicao = "Decimo Quinto";
                } else if (i == 15) {
                    posicao = "Decimo Sexto";
                } else if (i == 16) {
                    posicao = "Decimo Sétimo";
                } else if (i == 17) {
                    posicao = "Decimo Oitavo";
                } else if (i == 18) {
                    posicao = "Decimo Nono";
                } else if (i == 19) {
                    posicao = "Vigésimo";
                }
                valor += "<div id='possiveltexto'> <span>";
                valor += posicao;
                valor +=": "
                valor += array[i].Nome;
                valor += " Pontução: "; 
                valor += array[i].Pontos; 
                valor += "</span> ";
                valor += "<br> </div>";
                document.getElementById("possiveltexto").innerHTML += valor;
            }
            document.getElementById("possiveltexto").innerHTML += "<input type='button' value='Salvar Resultados' onclick='criarlocalstorage()'>"
            u++;
        } else {
            document.getElementById("possiveltexto").innerHTML = "";
            u--;
        }
    }
}
function criarlocalstorage() {
    localStorage.setItem("possiveltexto",JSON.stringify(array));
    document.getElementById("divresul").innerHTML = '<input type="button" value="Recupera resultados" id="recoresults" onclick="recuperaresult()">';
    document.getElementById("thediv").innerHTML = "";
    document.getElementById("possiveltexto").innerHTML = "";
}
let a = localStorage.getItem("possiveltexto");
function recuperaresult() {
    let x = JSON.parse(a);
    document.getElementById("thediv").innerHTML = "";
    document.getElementById("possiveltexto").innerHTML = "";
    for  (let i = 0; i > jogad.length; i++) {
        let valor = "";
        let posicao;
        if (i == 0) {
            posicao = "Primeiro";
        } else if (i == 1) {
            posicao = "Segundo";
        } else if (i == 2) {
            posicao = "Terceiro";
        } else if (i == 3) {
            posicao = "Quarto";
        } else if (i == 4) {
            posicao = "Quinto";
        } else if (i == 5) {
            posicao = "Sexto";
        } else if (i == 6) {
            posicao = "Sétimo";
        } else if (i == 7) {
            posicao = "Oitavo";
        } else if (i == 8) {
            posicao = "Nono";
        } else if (i == 9) {
            posicao = "Decimo";
        } else if (i == 10) {
            posicao = "Decimo Primeiro";
        } else if (i == 11) {
            posicao = "Decimo Segundo";
        } else if (i == 12) {
            posicao = "Decimo Terceiro";
        } else if (i == 13) {
            posicao = "Decimo Quarto";
        } else if (i == 14) {
            posicao = "Decimo Quinto";
        } else if (i == 15) {
            posicao = "Decimo Sexto";
        } else if (i == 16) {
            posicao = "Decimo Sétimo";
        } else if (i == 17) {
            posicao = "Decimo Oitavo";
        } else if (i == 18) {
            posicao = "Decimo Nono";
        } else if (i == 19) {
            posicao = "Vigésimo";
        }
        valor += "<div id='possiveltexto'> <span>";
        valor += posicao;
        valor +=": "
        valor += x[i].Nome;
        valor += " Pontução: "; 
        valor += x[i].Pontos; 
        valor += "</span> ";
        valor += "<br> </div>";
        document.getElementById("possiveltexto").innerHTML += valor;
    }
}
