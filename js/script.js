const metodoSelect = document.getElementById("metodo");
const moedorSelect = document.getElementById("moedor");
const resultado = document.getElementById("resultado");

function atualizarResultado() {
    const metodo = metodoSelect.options[metodoSelect.selectedIndex].text;
    const moedor = moedorSelect.options[moedorSelect.selectedIndex].text;
    resultado.textContent = `Método de preparo: ${metodo} | Moedor: ${moedor}`;
}

metodoSelect.addEventListener("change", atualizarResultado);
moedorSelect.addEventListener("change", atualizarResultado);

function resultadoBusca(){
    let metodoCafe = document.getElementById ('metodo').value;
    let moedorCafe = document.getElementById ('moedor').value;
    document.getElementById("resultadoBusca").style.display = "block";

    document.getElementById("resultadoBusca").innerText = "Aqui estão as medidas para o seu café feito na(o) " + metodoCafe + " utilizando o moedor " + moedorCafe + ":";

    if (metodoCafe=="Expresso" && moedorCafe=="1ZpressoJE") {
        console.log ("utilize entre 50-65 clicks");
    }
}