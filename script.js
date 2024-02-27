const CALCULAR = document.getElementById("calcular");
const VOL = document.getElementById('vol')
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const ERROR = document.getElementById("error");

CALCULAR.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value;
    if(DATO <= 0){
        ERROR.style.display = 'block';
        VOL.style.display = 'none'
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    } else {
        ERROR.style.display = 'none'; 
        if (DATO <= 30) {
            let flujo = calcFlujo(DATO);
            let mantenimiento = flujo / 24;
            VOL.innerHTML = flujo + ' cc'
            FLU.innerHTML = Math.round(mantenimiento) + ' cc/hr'; 
            MAN.innerHTML = 'm+m/2 ' + Math.round(mantenimiento * 1.5) + ' cc/hr'; 
            VOL.style.display = 'block'
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } else {
            let superCorporal = calcSuperficieCorporal(DATO);
            VOL.innerHTML = Math.round(superCorporal * 1500) + ' cc o ' + Math.round(superCorporal * 2000) + ' cc'; 
            VOL.style.display = 'block'
            FLU.style.display = 'none';
            MAN.style.display = 'none';
        }
    }
});

function calcFlujo(peso){
    let resto = parseInt(peso); 
    let flujo = 0;
    if (resto > 20 && resto <= 30) {
        resto = (peso - 20) * 20;
        flujo = 1500 + resto;
    } else if ( resto > 10){
        resto = (peso - 10) * 50;
        flujo = 1000 + resto;
    } else {
        flujo = resto * 100;
    }
    return flujo;
}

function calcSuperficieCorporal(peso){
    let resto = parseInt(peso);
    let superCorp = ((resto * 4) + 7) / (resto + 90);
    return superCorp;
}