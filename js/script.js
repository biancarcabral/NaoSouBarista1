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

let dados = [

    let tbody = document.getElementById ("tbody");

    ["1Zpresso JE", "Expresso", "50-65 Clicks"],
    ["1Zpresso JE", "Coados", "90-11 Clicks"],
    ["1Zpresso JE", "Prensa Francesa", "170-180 Clicks"],
    ["Timemore C2", "Expresso", "10-14 Clicks"],
    ["Timemore C2", "Coados", "18-24 Clicks"],
    ["Timemore C2", "Prensa Francesa", "25-27 Clicks"],
    ["1Zpresso Q2", "Expresso", "35 Clicks"],
    ["1Zpresso Q2", "Coados", "55 Clicks"],
    ["1Zpresso Q2", "Prensa Francesa", "100 Clicks"],
    ["Hero S01", "Expresso", "8-20 Clicks"],
    ["Hero S01", "Coados", "21-40 Clicks"],
    ["Hero S01", "Prensa Francesa", "41-50 Clicks"],
    ["Bravo IT", "Expresso", "1,07 Voltas"],
    ["Bravo IT", "Coados", "1,35 Voltas"],
    ["Bravo IT", "Prensa Francesa", "3 Voltas"],
    ["Comandante C40", "Expresso", "10 Clicks"],
    ["Comandante C40", "Coados", "20 Clicks"],
    ["Comandante C40", "Prensa Francesa", "30 Clicks"],
    ["1Zpresso K Plus", "Expresso", "3,5-4,5 Clicks"],
    ["1Zpresso K Plus", "Coados", "6-8 Clicks"],
    ["1Zpresso K Plus", "Prensa Francesa", "9 Clicks"],
    ["Kinu M47 Classic", "Expresso", "1,6 Voltas"],
    ["Kinu M47 Classic", "Coados", "2,5-3,5 Voltas"],
    ["Kinu M47 Classic", "Prensa Francesa", "5,5 Voltas"],
    ["1Zpresso Jx PRO", "Expresso", "1,24 Voltas"],
    ["1Zpresso Jx PRO", "Coados", "3 Voltas"],
    ["1Zpresso Jx PRO", "Prensa Francesa", "5 Voltas"],
    ["1Zpresso J MAX", "Expresso", "1,45 Voltas"],
    ["1Zpresso J MAX", "Coados", "2,5 Voltas"],
    ["1Zpresso J MAX", "Prensa Francesa", "3 Voltas"],
    ["Hero S07", "Expresso", "13 Clicks"],
    ["Hero S07", "Coados", "34 Clicks"],
    ["Hero S07", "Prensa Francesa", "40 Clicks"],
    ["Kingrinder K6", "Expresso", "50 Clicks"],
    ["Kingrinder K6", "Coados", "90 Clicks"],
    ["Kingrinder K6", "Prensa Francesa", "130 Clicks"],
    ["Hero S03", "Expresso", "19 Clicks"],
    ["Hero S03", "Coados", "35 Clicks"],
    ["Hero S03", "Prensa Francesa", "50 Clicks"],
    ["Timemore GO", "Expresso", "2-6 Clicks"],
    ["Timemore GO", "Coados", "7 Clicks"],
    ["Timemore GO", "Prensa Francesa", "11 Clicks"],
    ["Kingrider K2", "Expresso", "43 Clicks"],
    ["Kingrider K2", "Coados", "80 Clicks"],
    ["Kingrider K2", "Prensa Francesa", "120 Clicks"],
    ["1Zpresso K MAX", "Expresso", "30 Clicks"],
    ["1Zpresso K MAX", "Coados", "70 Clicks"],
    ["1Zpresso K MAX", "Prensa Francesa", "90 Clicks"],
    ["Kingrider K4", "Expresso", "78 Clicks"],
    ["Kingrider K4", "Coados", "155 Clicks"],
    ["Kingrider K4", "Prensa Francesa", "180 Clicks"],
    ["Timemore ChestnutX", "Expresso", "6 Clicks"],
    ["Timemore ChestnutX", "Coados", "15 Clicks"],
    ["Timemore ChestnutX", "Prensa Francesa", "20 Clicks"],
    ["Linglong Ace 40 Plus", "Expresso", "0,70 Voltas"],
    ["Linglong Ace 40 Plus", "Coados", "1,70 Voltas"],
    ["Linglong Ace 40 Plus", "Prensa Francesa", "2,10 Voltas"],
    ["iCafilas", "Expresso", "5 Clicks"],
    ["iCafilas", "Coados", "55 Clicks"],
    ["iCafilas", "Prensa Francesa", "85 Clicks"],
    ["Jaffee J1", "Expresso", "7 Clicks"],
    ["Jaffee J1", "Coados", "21 Clicks"],
    ["Jaffee J1", "Prensa Francesa", "30 Clicks"],
    ["Jaffee J1 PRO", "Expresso", "26 Clicks"],
    ["Jaffee J1 PRO", "Coados", "80 Clicks"],
    ["Jaffee J1 PRO", "Prensa Francesa", "110 Clicks"],
    ["Ariete", "Coados", "Regulagem 8"],
    ["Ariete", "Prensa Francesa", "Regulagem 10"],
    ["Mahlkoning x54", "Expresso", "Regulagem 5"],
    ["Mahlkoning x54", "Coados", "Regulagem 25"],
    ["AMahlkoning x54", "Prensa Francesa", "Regulagem 30"],
    ["1Zpresso ZP6 Special", "Expresso", "5 Clicks"],
    ["1Zpresso ZP6 Special", "Coados", "40 Clicks"],
    ["1Zpresso ZP6 Special", "Prensa Francesa", "60 Clicks"],
    ["1Zpresso K Ultra", "Expresso", "30 Clicks"],
    ["1Zpresso K Ultra", "Coados", "60 Clicks"],
    ["1Zpresso K Ultra", "Prensa Francesa", "80 Clicks"],
];

// Função para popular a tabela ->  Essa função itera sobre o array dados, criando uma nova linha (<tr>) para cada elemento do array. Em seguida, para cada item da linha (como "1Zpresso JE", "Expresso", "50-65 Clicks"), cria uma célula (<td>) e insere o conteúdo.
function populaTabela() {
    const tbody = document.getElementById("tbody"); // Seleciona o tbody da tabela document.addEventListener("DOMContentLoaded", populaTabela);: Garante que a função populaTabela seja chamada apenas depois que o HTML for totalmente carregado.
    tbody.innerHTML = ""; // Limpa o conteúdo anterior do tbody

    // Percorre o array de dados e cria uma linha para cada item
    dados.forEach((item) => {
        const row = document.createElement("tr"); // Cria uma nova linha

        // Adiciona cada elemento do item como uma célula (td) na linha
        item.forEach((dado) => {
            const cell = document.createElement("td");
            cell.textContent = dado;
            row.appendChild(cell);
        });

        tbody.appendChild(row); // Adiciona a linha ao tbody
    });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", populaTabela);

//Com esse código, cada linha de dados será adicionada à tabela <tbody>, preenchendo a tabela automaticamente.



/*let tbody = document.getElementById ("tbody");
for (var = i=0; i < dados.lengh; i++) {
    var tr = "<tr>" +
    "<td>" + dados[i][0] + "</td>" +
    "<td>" + dados[i][1] + "</td>" +
    "<td>" + dados[i][2] + "</td>" +
    "<td>" + dados[i][3] + "</td>" +
    "</td>";
    tbody.innerHTML +=tr;
    let tr= tbody.childNodes;
}

document.getElementById ("txtBusca").addEventListener ("keyup", function( {
    let busca= document.getElementById ("txtBusca").value.toLowerCase();

    for (var i = 0; i < tbody.childNodes.length; i++) { //acesso linhas
        var achou = false;
        var tr = tbody.childNodes[i];
        var td = tr.childNodes;

        for (var j = 0; j < td.lengh; j++) { //acessa colunas
            var value = td[j].childNodes[0].nodeValue.toLowerCase();
            console.log (value);


            if(value.indexOF(busca)> = 0){
                achou = tru
            }
        }
        if (achou) {
            tr.style.display = "table-row";
        } else {
            tr.style.display = "none";
        }
    }
});
*/