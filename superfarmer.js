var rzutKostkamiPrzycisk = document.getElementById("rzutKostkamiPrzycisk");
var gracz1KrolikiHTML = document.getElementById('gracz1KrolikiHTML');
var gracz1OwceHTML = document.getElementById("gracz1OwceHTML");
var gracz1SwinieHTML = document.getElementById("gracz1SwinieHTML");
var gracz1KrowyHTML = document.getElementById("gracz1KrowyHTML");
var gracz1KonieHTML = document.getElementById("gracz1KonieHTML");
var gracz1MalyPiesHTML = document.getElementById("gracz1MalyPiesHTML");
var gracz1DuzyPiesHTML = document.getElementById("gracz1DuzyPiesHTML");
var farmaGracza = /** @class */ (function () {
    function farmaGracza() {
        this.kroliczki = 0; // 6
        this.owcieczki = 0; // 4
        this.swinki = 0; // 3
        this.krowki = 0; // 2
        this.koniki = 0; // 1
        this.piesMaly = true;
        this.piesDuzy = false;
    }
    farmaGracza.prototype.sraka = function () {
        console.log("sraka");
    };
    return farmaGracza;
}());
;
var kostka1 = ["krolik", "owca", "swinka", "krowka", "konik", "lis", "piesMaly"];
var kostka2 = ["krolik", "owca", "swinka", "krowka", "konik", "wilk", "piesDuzy"];
var farmaGracza1 = new farmaGracza();
function rzut(kostka) {
    var coWypadlo = Math.floor(Math.random() * 7);
    return kostka[coWypadlo];
}
rzutKostkamiPrzycisk.addEventListener('click', function () {
    var wynik1 = rzut(kostka1);
    var wynik2 = rzut(kostka2);
    zczytajKostke(wynik1);
    zczytajKostke(wynik2);
});
function ogarnijStada(farma) {
    var stado = farmaGracza1.kroliczki;
    if (!stado) {
        stado++;
    }
    else if (stado === 1) {
        stado = 2;
    }
    else
        stado += Math.floor(stado / 2);
    farmaGracza1.kroliczki = stado;
}
function atak(tryb) {
    if (tryb === "lis") {
        if (!farmaGracza1.piesMaly)
            // farmaGracza1.kroliczki = 0;
            farmaGracza1.sraka();
        else
            farmaGracza1.piesMaly = false;
        return;
    }
    if (!farmaGracza1.piesDuzy) {
        // farmaGracza1.kroliczki = 0;
        farmaGracza1.owcieczki = 0;
        farmaGracza1.swinki = 0;
        farmaGracza1.krowki = 0;
    }
    else
        farmaGracza1.piesDuzy = false;
}
function zczytajKostke(wynik) {
    console.log(wynik);
    switch (wynik) {
        case "krolik":
            ogarnijStada(farmaGracza1);
            farmaGracza1.sraka();
            gracz1KrolikiHTML.innerHTML = "KR\u00D3LIKIsgdgfdgfd: ".concat(farmaGracza1.kroliczki);
            break;
        case "owca":
            // ogarnijStada(farmaGracza1.owcieczki);
            // gracz1KrolikiHTML.innerHTML = "KRÓLIKI: " + `${farmaGracza1.kroliczki}`;
            break;
        case "swinka":
            // ogarnijStada(farmaGracza1.swinki);
            // gracz1KrolikiHTML.innerHTML = "KRÓLIKI: " + `${farmaGracza1.kroliczki}`;
            break;
        case "krowka":
            // ogarnijStada(farmaGracza1.krowki);
            break;
        case "konik":
            // ogarnijStada(farmaGracza1.swinki);
            break;
        case "lis":
            atak("lis");
            break;
        case "wilk":
            atak("wilk");
            break;
        case "piesMaly":
            farmaGracza1.piesMaly = true;
            break;
        case "piesDuzy":
            farmaGracza1.piesDuzy = true;
    }
}
