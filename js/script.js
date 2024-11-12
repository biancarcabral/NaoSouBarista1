const metodoSelect = document.getElementById('metodo');
const moedorSelect = document.getElementById('moedor');
const resultado = document.getElementById('resultadoBusca');

function atualizarResultado() {
    const metodo = metodoSelect.options[metodoSelect.selectedIndex].text;
    const moedor = moedorSelect.options[moedorSelect.selectedIndex].text;
    resultado.textContent = `Método de preparo: ${metodo} | Moedor: ${moedor}`;
}

metodoSelect.addEventListener("change", atualizarResultado);

function resultadoBusca(){
    let metodoCafe = document.getElementById ('metodo').value;
    let moedorCafe = document.getElementById ('moedor').value;
    let resultadoDiv = document.getElementById('resultadoBusca');
    let chamadaVideo = document.getElementById ('chamadaVideo');
    let videoMoedores = document.getElementById('videoMoedores');

    // Mostra a div
    resultadoDiv.style.display = "block";

    resultadoDiv.innerText = "Aqui estão as medidas para o seu café feito na(o) " + metodoCafe + " utilizando o moedor " + moedorCafe + ":  ";



    if (metodoCafe == "Expresso" && moedorCafe == "1ZpressoJE") {
        resultadoDiv.innerHTML += "\nUtilize entre 50-65 clicks";
        chamadaVideo.innerText = " Quer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fBM3TvHGQb4?si=_HA_2YKHxypDcBcO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;

    }

    if (metodoCafe=="Coados" && moedorCafe=="1ZpressoJE") {
        resultadoDiv.innerText += "\nUtilize  entre 90-11 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fBM3TvHGQb4?si=_HA_2YKHxypDcBcO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;

    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1ZpressoJE") {
        resultadoDiv.innerText += "\nUtilize  entre 170-180 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fBM3TvHGQb4?si=_HA_2YKHxypDcBcO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;

    }
    
    if (metodoCafe=="Expresso" && moedorCafe=="Timemore C2") {
        resultadoDiv.innerText += "\nUtilize  entre 10-14 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/i_qfv9Ilef8?si=J11Kv3Eilqje_v5j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Timemore C2") {
        resultadoDiv.innerText += "\nUtilize  entre 18-24 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/i_qfv9Ilef8?si=J11Kv3Eilqje_v5j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Timemore C2") {
        resultadoDiv.innerText += "\nUtilize  entre 25-27 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/i_qfv9Ilef8?si=J11Kv3Eilqje_v5j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso Q2") {
        resultadoDiv.innerText += "\nUtilize 35 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/OtU7C7Q0Dk0?si=hsixTx9d8tw4M7c2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso Q2") {
       resultadoDiv.innerText += "\nUtilize 55 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OtU7C7Q0Dk0?si=hsixTx9d8tw4M7c2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso Q2") {
        resultadoDiv.innerText += "\nUtilize 100 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/OtU7C7Q0Dk0?si=hsixTx9d8tw4M7c2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Hero S01") {
        resultadoDiv.innerText += "\nUtilize entre 8-20 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/DB9GazW_CR0?si=zckv-0ZqWzaGSEpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Hero S01") {
       resultadoDiv.innerText += "\nUtilize entre 21-40 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DB9GazW_CR0?si=zckv-0ZqWzaGSEpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Hero S01") {
        resultadoDiv.innerText += "\nUtilize entre 41-50 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/DB9GazW_CR0?si=zckv-0ZqWzaGSEpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Bravo IT") {
        resultadoDiv.innerText += "\nUtilize 1,07 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/X5Ft4r5yg5Q?si=QidDSkHthdQ9ByB1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Bravo IT") {
       resultadoDiv.innerText += "\nUtilize 1,35 Voltas";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/X5Ft4r5yg5Q?si=QidDSkHthdQ9ByB1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Bravo IT") {
        resultadoDiv.innerText += "\nUtilize 3 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/X5Ft4r5yg5Q?si=QidDSkHthdQ9ByB1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Comandante C40") {
        resultadoDiv.innerText += "\nUtilize 10 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/3BZFRCj8pSE?si=r5Oulsdqgg5p5Uzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Comandante C40") {
       resultadoDiv.innerText += "\nUtilize 20 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3BZFRCj8pSE?si=r5Oulsdqgg5p5Uzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Comandante C40") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/3BZFRCj8pSE?si=r5Oulsdqgg5p5Uzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso K PLUS") {
        resultadoDiv.innerText += "\nUtilize entre 3,5-4,5 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/Fi8q-PbIN1U?si=AaKRTo7-wgNuNExg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso K PLUS") {
       resultadoDiv.innerText += "\nUtilize entre 6-8 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Fi8q-PbIN1U?si=AaKRTo7-wgNuNExg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso K PLUS") {
        resultadoDiv.innerText += "\nUtilize 9 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/Fi8q-PbIN1U?si=AaKRTo7-wgNuNExg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kinu M47 Classic") {
        resultadoDiv.innerText += "\nUtilize 1,6 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/oSmK8-c88rc?si=dJeVLW6fN_BWiL3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kinu M47 Classic") {
       resultadoDiv.innerText += "\nUtilize entre 2,5-3,5 Voltas";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oSmK8-c88rc?si=dJeVLW6fN_BWiL3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kinu M47 Classic") {
        resultadoDiv.innerText += "\nUtilize 5,5 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/oSmK8-c88rc?si=dJeVLW6fN_BWiL3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso JX PRO") {
        resultadoDiv.innerText += "\nUtilize 1,24 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/tAqg5He0cSk?si=blBa-TWpRTOrdS_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso JX PRO") {
       resultadoDiv.innerText += "\nUtilize 3 Voltas";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tAqg5He0cSk?si=blBa-TWpRTOrdS_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso JX PRO") {
        resultadoDiv.innerText += "\nUtilize 5 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/tAqg5He0cSk?si=blBa-TWpRTOrdS_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso J MAX") {
        resultadoDiv.innerText += "\nUtilize 1,45 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/4Z7Gf1RETt0?si=pEzUtFPUaujRK6Mb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso J MAX") {
       resultadoDiv.innerText += "\nUtilize 2,5 Voltas";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4Z7Gf1RETt0?si=pEzUtFPUaujRK6Mb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso J MAX") {
        resultadoDiv.innerText += "\nUtilize 3 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/4Z7Gf1RETt0?si=pEzUtFPUaujRK6Mb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Hero S07") {
        resultadoDiv.innerText += "\nUtilize 13 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/SwHg5eyfQJI?si=BrkBqQ-7IxQQZauO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Hero S07") {
       resultadoDiv.innerText += "\nUtilize 34 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SwHg5eyfQJI?si=BrkBqQ-7IxQQZauO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Hero S07") {
        resultadoDiv.innerText += "\nUtilize 40 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/SwHg5eyfQJI?si=BrkBqQ-7IxQQZauO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kingrinder K6") {
        resultadoDiv.innerText += "\nUtilize 50 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/ScOGBO34jfk?si=ILtX3_DP6LblUv_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kingrinder K6") {
       resultadoDiv.innerText += "\nUtilize 90 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ScOGBO34jfk?si=ILtX3_DP6LblUv_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kingrinder K6") {
        resultadoDiv.innerText += "\nUtilize 130 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/ScOGBO34jfk?si=ILtX3_DP6LblUv_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Hero S03") {
        resultadoDiv.innerText += "\nUtilize 19 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/bXEZUfxdOi0?si=bb8oTxHi-sExZsJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Hero S03") {
       resultadoDiv.innerText += "\nUtilize 35 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bXEZUfxdOi0?si=bb8oTxHi-sExZsJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Hero S03") {
        resultadoDiv.innerText += "\nUtilize 50 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/bXEZUfxdOi0?si=bb8oTxHi-sExZsJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Timemore GO") {
        resultadoDiv.innerText += "\nUtilize entre 2-6 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/mTCAAgifpSQ?si=wZbxXHwNtB8ZTnY2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Timemore GO") {
       resultadoDiv.innerText += "\nUtilize 7 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mTCAAgifpSQ?si=wZbxXHwNtB8ZTnY2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Timemore GO") {
        resultadoDiv.innerText += "\nUtilize 11 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/mTCAAgifpSQ?si=wZbxXHwNtB8ZTnY2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Kingrinder K2") {
        resultadoDiv.innerText += "\nUtilize 43 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/byKeizx19yQ?si=P1zSdzrBw29PaaJv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kingrinder K2") {
       resultadoDiv.innerText += "\nUtilize 80 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/byKeizx19yQ?si=P1zSdzrBw29PaaJv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kingrinder K2") {
        resultadoDiv.innerText += "\nUtilize 120 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/byKeizx19yQ?si=P1zSdzrBw29PaaJv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso K MAX") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/t_XcbuHXmrc?si=yea_yH8mcrjcjiRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso K MAX") {
       resultadoDiv.innerText += "\nUtilize 70 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t_XcbuHXmrc?si=yea_yH8mcrjcjiRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso K MAX") {
        resultadoDiv.innerText += "\nUtilize 90 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/t_XcbuHXmrc?si=yea_yH8mcrjcjiRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }


    if (metodoCafe=="Expresso" && moedorCafe=="Kingrinder K4") {
        resultadoDiv.innerText += "\nUtilize 78 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/geNicri6TLU?si=trVGQKvIu-iwNnCy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Kingrinder K4") {
       resultadoDiv.innerText += "\nUtilize 155 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/geNicri6TLU?si=trVGQKvIu-iwNnCy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Kingrinder K4") {
        resultadoDiv.innerText += "\nUtilize 180 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/geNicri6TLU?si=trVGQKvIu-iwNnCy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Timemore Chestnut X") {
        resultadoDiv.innerText += "\nUtilize 6 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/eSMSf_g1qvM?si=mCFs5H1LHPygQY7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Timemore Chestnut X") {
       resultadoDiv.innerText += "\nUtilize 15 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eSMSf_g1qvM?si=mCFs5H1LHPygQY7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Timemore Chestnut X") {
        resultadoDiv.innerText += "\nUtilize 20 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/eSMSf_g1qvM?si=mCFs5H1LHPygQY7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Linglong Ace 40 PLUS") {
        resultadoDiv.innerText += "\nUtilize 0,70 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/eP4N-PH0G7o?si=1Rd52p-dlXAcEB8r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Linglong Ace 40 PLUS") {
       resultadoDiv.innerText += "\nUtilize 1,70 Voltas";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eP4N-PH0G7o?si=1Rd52p-dlXAcEB8r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Linglong Ace 40 PLUS") {
        resultadoDiv.innerText += "\nUtilize 2,10 Voltas";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/eP4N-PH0G7o?si=1Rd52p-dlXAcEB8r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="iCafilas") {
        resultadoDiv.innerText += "\nUtilize 5 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/u8bQPSwz22s?si=nNWPoOKG6xC1JMKl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="iCafilas") {
       resultadoDiv.innerText += "\nUtilize 55 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/u8bQPSwz22s?si=nNWPoOKG6xC1JMKl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="iCafilas") {
        resultadoDiv.innerText += "\nUtilize 85 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/u8bQPSwz22s?si=nNWPoOKG6xC1JMKl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Jaffee J1") {
        resultadoDiv.innerText += "\nUtilize 7 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/zag0NeFbKio?si=wocfPXba5wGudf6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Jaffee J1") {
       resultadoDiv.innerText += "\nUtilize 21 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zag0NeFbKio?si=wocfPXba5wGudf6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Jaffee J1") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/zag0NeFbKio?si=wocfPXba5wGudf6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Jaffee J1 PRO") {
        resultadoDiv.innerText += "\nUtilize 26 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/zag0NeFbKio?si=wocfPXba5wGudf6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Jaffee J1 PRO") {
       resultadoDiv.innerText += "\nUtilize 80 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zag0NeFbKio?si=wocfPXba5wGudf6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Jaffee J1 PRO") {
        resultadoDiv.innerText += "\nUtilize 110 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/zag0NeFbKio?si=wocfPXba5wGudf6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Moedor Ariete") {
        resultadoDiv.innerText += "\n-";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/_kiosu4z1YU?si=kKJ3MWTTXfC9LXDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Moedor Ariete") {
       resultadoDiv.innerText += "\nUtilize Regulagem 8";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_kiosu4z1YU?si=kKJ3MWTTXfC9LXDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Moedor Ariete") {
        resultadoDiv.innerText += "\nUtilize Regulagem 10";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/_kiosu4z1YU?si=kKJ3MWTTXfC9LXDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="Mahlkonig X54") {
        resultadoDiv.innerText += "\nUtilize Regulagem 5";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/NVmVUAMnWLw?si=lLeJD7SEVKBWjlYH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="Mahlkonig X54") {
       resultadoDiv.innerText += "\nUtilize Regulagem 25";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NVmVUAMnWLw?si=lLeJD7SEVKBWjlYH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="Mahlkonig X54") {
        resultadoDiv.innerText += "\nUtilize Regulagem 30";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/NVmVUAMnWLw?si=lLeJD7SEVKBWjlYH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso ZP6 SPECIAL") {
        resultadoDiv.innerText += "\nUtilize 5 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/uoP-0k49GUk?si=aJ_b76Iu7QVAIBKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso ZP6 SPECIAL") {
       resultadoDiv.innerText += "\nUtilize 40 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uoP-0k49GUk?si=aJ_b76Iu7QVAIBKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso ZP6 SPECIAL") {
        resultadoDiv.innerText += "\nUtilize 60 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/uoP-0k49GUk?si=aJ_b76Iu7QVAIBKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Expresso" && moedorCafe=="1Zpresso K ULTRA") {
        resultadoDiv.innerText += "\nUtilize 30 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/5tTlO-AGQec?si=-TbSz2zwx_0Bub22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    if (metodoCafe=="Coados" && moedorCafe=="1Zpresso K ULTRA") {
       resultadoDiv.innerText += "\nUtilize 60 Clicks";
       chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
       videoMoedores.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5tTlO-AGQec?si=-TbSz2zwx_0Bub22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       `;
    }

    if (metodoCafe=="Prensa Francesa" && moedorCafe=="1Zpresso K ULTRA") {
        resultadoDiv.innerText += "\nUtilize 80 Clicks";
        chamadaVideo.innerText = "\nQuer saber mais sobre este moedor? Assista ao meu review:";
        videoMoedores.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/5tTlO-AGQec?si=-TbSz2zwx_0Bub22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

} 

