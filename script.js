const CALCULAR = document.getElementById("calcular");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const ERROR = document.getElementById("error");

CALCULAR.addEventListener("click", () => {
    const DATO = parseFloat(document.getElementById("peso").value);
    if(DATO <= 0){
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    } else {
        ERROR.style.display = 'none'; 
        if (DATO <= 30) {
            let flujo = calcFlujo(DATO);
            let mantenimiento = flujo / 24;
            FLU.innerHTML = parseInt(flujo) + ' cc/hr'; 
            MAN.innerHTML = 'm+m/2 ' + parseInt(mantenimiento * 1.5) + ' cc/hr'; 
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } else {
            let  superCorp1 = (((DATO * 4) + 7) / (DATO + 90) * 1500);
            let  superCorp2 = (((DATO * 4) + 7) / (DATO + 90) * 2000);
            FLU.innerHTML = parseInt(superCorp1) + ' cc/hr o '+ parseInt(superCorp2) + ' cc/hr'; 
            FLU.style.display = 'block';
            MAN.style.display = 'none';
        }
    }
});

function calcFlujo(peso){
    let resto = peso; 
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