const imgCookie = document.getElementById("imgCookie");
let uiCookie = document.getElementById("uiCookie");
let uiDollar = document.getElementById("uiDollar");
let uiGrandma = document.getElementById("uiGrandma");



let nbCookie = 0;
let nbDollar = 0;
let nbGrandma = 0;

imgCookie.onclick = function () {
    nbCookie++;
    nbDollar++;
    uiCookie.innerHTML = nbCookie;
    uiDollar.innerHTML = nbDollar;
    if (uiDollar => 50) {
        btnBuy.onclick = function h() {
            nbGrandma++;
            uiGrandma.innerHTML = nbGrandma;
            uiDollar.innerHTML = nbDollar - 50;
            nbDollar = uiDollar.innerHTML


        }
    }
}

