const rzutKostkamiPrzycisk = document.getElementById("rzutKostkamiPrzycisk");
const gracz1KrolikiHTML = document.getElementById('gracz1KrolikiHTML');
const gracz1OwceHTML = document.getElementById("gracz1OwceHTML");
const gracz1SwinieHTML = document.getElementById("gracz1SwinieHTML");
const gracz1KrowyHTML = document.getElementById("gracz1KrowyHTML");
const gracz1KonieHTML = document.getElementById("gracz1KonieHTML");
const gracz1MalyPiesHTML = document.getElementById("gracz1MalyPiesHTML");
const gracz1DuzyPiesHTML = document.getElementById("gracz1DuzyPiesHTML");
const tablicaWymian = document.getElementById('wymiana').getElementsByClassName('wymiana');

for (let i = 0; i < tablicaWymian.length; i++) {
  tablicaWymian[i].addEventListener;/*plepleple*/
}
class farmaGracza {
  kroliczki: number = 0; // 6
  owcieczki: number = 0; // 4
  swinki: number = 0; // 3
  krowki: number = 0; // 2
  koniki: number = 0; // 1
  piesMaly: boolean = true;
  piesDuzy: boolean = false;

  sraka() {
    console.log("sraka");
  }
};

const kostka1 = ["krolik", "owca", "swinka", "krowka", "konik", "lis", "piesMaly"];
const kostka2 = ["krolik", "owca", "swinka", "krowka", "konik", "wilk", "piesDuzy"];

let farmaGracza1:farmaGracza = new farmaGracza();

function rzut(kostka: any[]) {
  let coWypadlo:number = Math.floor(Math.random() * 7);
  return kostka[coWypadlo];
}

rzutKostkamiPrzycisk.addEventListener ('click', function () {
  let wynik1:string = rzut(kostka1);
  let wynik2:string = rzut(kostka2);
  zczytajKostke(wynik1);
  zczytajKostke(wynik2);
})

function ogarnijStada(farma:farmaGracza) {
  let stado = farmaGracza1.kroliczki;
  if (!stado){
    stado++;
  } 
  else if (stado === 1){
    stado = 2;
  }
  else 
    stado += Math.floor(stado/2);
  farmaGracza1.kroliczki = stado;  
}

function atak (tryb:string){
  if (tryb === "lis"){
    if (!farmaGracza1.piesMaly)
        // farmaGracza1.kroliczki = 0;
        farmaGracza1.sraka();
    else
      farmaGracza1.piesMaly = false;
    return;
    }
  if (!farmaGracza1.piesDuzy){
    // farmaGracza1.kroliczki = 0;
    farmaGracza1.owcieczki = 0;
    farmaGracza1.swinki = 0;
    farmaGracza1.krowki = 0;
  }
  else
    farmaGracza1.piesDuzy = false;
}

function zczytajKostke (wynik:string) {
  console.log(wynik);
  switch (wynik) {
    case "krolik":
      ogarnijStada(farmaGracza1);
      farmaGracza1.sraka();
      gracz1KrolikiHTML.innerHTML =`KRÓLIKIsgdgfdgfd: ${farmaGracza1.kroliczki}`;
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
      atak("lis")
      break;
    case "wilk":
      atak("wilk")
      break;  
    case "piesMaly":
      farmaGracza1.piesMaly = true;
      break;
    case "piesDuzy":
      farmaGracza1.piesDuzy = true;    
  }
}