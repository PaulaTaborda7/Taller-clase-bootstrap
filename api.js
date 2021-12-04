function consumirAPI() {
    let vigencia = [];
    let valorPeso = [];
    fetch('https://www.datos.gov.co/resource/mcec-87by.json')
        .then(respuesta => respuesta.json())
        .then(function(datosObtenidos){
            datosObtenidos.forEach(elemento => {
                if(elemento.valor != undefined && elemento.vigenciadesde != undefined){
                    vigencia.push(elemento.vigenciadesde);
                    valorPeso.push(elemento.valor);
                }
            });
            for (let i = 0; i < valorPeso.length; i++) {
               console.log("Peso: ", valorPeso[i], " Vigencia: ", vigencia[i]);
            }
            var trace1 = {
                x: vigencia,
                y: valorPeso,
                fill: 'tonexty',
                type: 'scatter'
              };
              
              var data = [trace1];

              var layout = {
                title: 'Tasa de cambio representativa del mercado histórico - Dólar vs Peso'
              };

              var config = {responsive: true};

              Plotly.newPlot('graficar', data, layout, config);
        });
}

consumirAPI();