const metodoSelect = document.getElementById("selectMetodo");
const moedorSelect = document.getElementById("selectMoedor");
const resultado = document.getElementById("resultado");

function atualizarResultado() {
    const metodo = metodoSelect.options[metodoSelect.selectedIndex].text;
    const moedor = moedorSelect.options[moedorSelect.selectedIndex].text;
    resultado.textContent = `Método de preparo: ${metodo} | Moedor: ${moedor}`;
}

metodoSelect.addEventListener("change", atualizarResultado);

function resultadoBusca(){
    let metodoCafe = document.getElementById ('metodo').value;
    let moedorCafe = document.getElementById ('moedor').value;
    let resultadoDiv = document.getElementById("resultadoBusca");

    // Mostra a div
    resultadoDiv.style.display = "block";

    resultadoDiv.innerText = "Aqui estão as medidas para o seu café feito na(o) " + metodoCafe + " utilizando o moedor " + moedorCafe + ":";

    if (metodoCafe == "Expresso" && moedorCafe == "1ZpressoJE") {
        resultadoDiv.innerText += "\nUtilize entre 50-65 clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1ZpressoJE") {
        resultadoDiv.innerText += "\nUtilize  entre 90-11 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1ZpressoJE") {
        resultadoDiv.innerText += "\nUtilize  entre 170-180 Clicks";
    }
    
    if (metodoCafe=="Expresso" && moedorCafe=="Timemore C2") {
        resultadoDiv.innerText += "\nUtilize  entre 10-14 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Timemore C2") {
        resultadoDiv.innerText += "\nUtilize  entre 18-24 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Timemore C2") {
        resultadoDiv.innerText += "\nUtilize  entre 25-27 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso Q2") {
        resultadoDiv.innerText += "\nUtilize 35 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso Q2") {
       resultadoDiv.innerText += "\nUtilize 55 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso Q2") {
        resultadoDiv.innerText += "\nUtilize 100 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Hero S01") {
        resultadoDiv.innerText += "\nUtilize entre 8-20 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Hero S01") {
       resultadoDiv.innerText += "\nUtilize entre 21-40 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Hero S01") {
        resultadoDiv.innerText += "\nUtilize entre 41-50 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Bravo IT") {
        resultadoDiv.innerText += "\nUtilize 1,07 Voltas";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Bravo IT") {
       resultadoDiv.innerText += "\nUtilize 1,35 Voltas";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Bravo IT") {
        resultadoDiv.innerText += "\nUtilize 3 Voltas";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Comandante C40") {
        resultadoDiv.innerText += "\nUtilize 10 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Comandante C40") {
       resultadoDiv.innerText += "\nUtilize 20 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Comandante C40") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso K Plus") {
        resultadoDiv.innerText += "\nUtilize entre 3,5-4,5 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso K Plus") {
       resultadoDiv.innerText += "\nUtilize entre 6-8 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso K Plus") {
        resultadoDiv.innerText += "\nUtilize 9 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kinu M47 Classic") {
        resultadoDiv.innerText += "\nUtilize 1,6 Voltas";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kinu M47 Classic") {
       resultadoDiv.innerText += "\nUtilize entre 2,5-3,5 Voltas";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kinu M47 Classic") {
        resultadoDiv.innerText += "\nUtilize 5,5 Voltas";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso Jx PRO") {
        resultadoDiv.innerText += "\nUtilize 1,24 Voltas";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso Jx PRO") {
       resultadoDiv.innerText += "\nUtilize 3 Voltas";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso Jx PRO") {
        resultadoDiv.innerText += "\nUtilize 5 Voltas";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso J MAX") {
        resultadoDiv.innerText += "\nUtilize 1,45 Voltas";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso J MAX") {
       resultadoDiv.innerText += "\nUtilize 2,5 Voltas";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso J MAX") {
        resultadoDiv.innerText += "\nUtilize 3 Voltas";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Hero S07") {
        resultadoDiv.innerText += "\nUtilize 13 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Hero S07") {
       resultadoDiv.innerText += "\nUtilize 34 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Hero S07") {
        resultadoDiv.innerText += "\nUtilize 40 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kingrinder K6") {
        resultadoDiv.innerText += "\nUtilize 50 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kingrinder K6") {
       resultadoDiv.innerText += "\nUtilize 90 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kingrinder K6") {
        resultadoDiv.innerText += "\nUtilize 130 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Hero S03") {
        resultadoDiv.innerText += "\nUtilize 19 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Hero S03") {
       resultadoDiv.innerText += "\nUtilize 35 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Hero S03") {
        resultadoDiv.innerText += "\nUtilize 50 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Timemore GO") {
        resultadoDiv.innerText += "\nUtilize entre 2-6 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Timemore GO") {
       resultadoDiv.innerText += "\nUtilize 7 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Timemore GO") {
        resultadoDiv.innerText += "\nUtilize 11 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kingrider K2") {
        resultadoDiv.innerText += "\nUtilize 43 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kingrider K2") {
       resultadoDiv.innerText += "\nUtilize 80 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kingrider K2") {
        resultadoDiv.innerText += "\nUtilize 120 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso K MAX") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso K MAX") {
       resultadoDiv.innerText += "\nUtilize 70 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso K MAX") {
        resultadoDiv.innerText += "\nUtilize 90 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kingrider K4") {
        resultadoDiv.innerText += "\nUtilize 78 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kingrider K4") {
       resultadoDiv.innerText += "\nUtilize 155 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kingrider K4") {
        resultadoDiv.innerText += "\nUtilize 180 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Timemore ChestnutX") {
        resultadoDiv.innerText += "\nUtilize 6 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Timemore ChestnutX") {
       resultadoDiv.innerText += "\nUtilize 15 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Timemore ChestnutX") {
        resultadoDiv.innerText += "\nUtilize 20 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Linglong Ace 40 Plus") {
        resultadoDiv.innerText += "\nUtilize 0,70 Voltas";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Linglong Ace 40 Plus") {
       resultadoDiv.innerText += "\nUtilize 1,70 Voltas";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Linglong Ace 40 Plus") {
        resultadoDiv.innerText += "\nUtilize 2,10 Voltas";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="iCafilas") {
        resultadoDiv.innerText += "\nUtilize 5 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="iCafilas") {
       resultadoDiv.innerText += "\nUtilize 55 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="iCafilas") {
        resultadoDiv.innerText += "\nUtilize 85 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Jaffee J1") {
        resultadoDiv.innerText += "\nUtilize 7 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Jaffee J1") {
       resultadoDiv.innerText += "\nUtilize 21 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Jaffee J1") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Jaffee J1 PRO") {
        resultadoDiv.innerText += "\nUtilize 26 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Jaffee J1 PRO") {
       resultadoDiv.innerText += "\nUtilize 80 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Jaffee J1 PRO") {
        resultadoDiv.innerText += "\nUtilize 110 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Ariete") {
        resultadoDiv.innerText += "\nNão Indicado";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Ariete") {
       resultadoDiv.innerText += "\nUtilize Regulagem 8";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Ariete") {
        resultadoDiv.innerText += "\nUtilize Regulagem 10";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Mahlkoning x54") {
        resultadoDiv.innerText += "\nUtilize Regulagem 5";
    }

    if (metodoCafe=="Coados" && moedorCafe=="Mahlkoning x54") {
       resultadoDiv.innerText += "\nUtilize Regulagem 25";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Mahlkoning x54") {
        resultadoDiv.innerText += "\nUtilize Regulagem 30";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso ZP6 Special") {
        resultadoDiv.innerText += "\nUtilize 5 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso ZP6 Special") {
       resultadoDiv.innerText += "\nUtilize 40 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso ZP6 Special") {
        resultadoDiv.innerText += "\nUtilize 60 Clicks";
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso K Ultra") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso K Ultra") {
       resultadoDiv.innerText += "\nUtilize 60 Clicks";
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso K Ultra") {
        resultadoDiv.innerText += "\nUtilize 80 Clicks";
    }

} 

