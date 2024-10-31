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

function pegarMedidas(){
    
}