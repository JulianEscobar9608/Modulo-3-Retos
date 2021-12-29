
let moneda = [
            {
                "nombre": 'Elige tu Moneda',
                "valor" : 0
            },
            {
                "nombre": 'Dolar',
                "valor" : {
                    "Peso_Colombiano": 4012.57,
                    "Euro" : 0.88,
                    "Libra_Esterlina": 0.74,
                    "Peso_Mexicano": 20.59
                }
            },
            {
                "nombre": 'Peso_Mexicano',
                "valor" : {
                    "Peso_Colombiano": 195.05,
                    "Euro" : 0.043,
                    "Libra_Esterlina": 0.036,
                    "Dolar": 0.049
                }
            },
            {
                "nombre": 'Peso_Colombiano',
                "valor" : {
                    "Peso_Mexicano": 0.0052,
                    "Euro" : 0.00022,
                    "Libra_Esterlina": 0.00019,
                    "Dolar": 0.00025
                }
            },
            {
                "nombre": 'Euro',
                "valor" : {
                    "Peso_Mexicano": 23.32,
                    "Peso_Colombiano" : 4546.87,
                    "Libra_Esterlina": 0.84,
                    "Dolar": 1.13
                }
            },
            {
                "nombre": 'Libra_Esterlina',
                "valor" : {
                    "Peso_Mexicano": 27.73,
                    "Peso_Colombiano" : 5403.06,
                    "Euro": 1.19,
                    "Dolar": 1.35
                }
            }];

let b = document.querySelector('#b');
let b2 = document.querySelector('#reiniciar');
let cont = document.querySelector('.resultado');

b2.addEventListener('click',function(e){});

b.addEventListener('click',function(e){

        e.preventDefault();
        let cantidad = Number(document.getElementById('cantidad').value);
        let resultadofinal;
        let texto = document.querySelector('#convert');
        if(texto){
            padre = texto.parentNode;
		    padre.removeChild(texto);
        }
        let moneda1 = document.getElementById('tipoMoneda').value;
        let moneda2 = document.getElementById('tipoMonedaConvertir').value;

        if(moneda1=='defecto'||moneda2=='defecto'){

                manipularDom('label','error',"Seleccione una moneda válida para la conversión");

        }else if(moneda1==moneda2){

                manipularDom('label','error',"Seleccione tipos de moneda diferente para la conversión");
            
              }else{
                    let cantidad2;
                    moneda.forEach(element => {
                        if(element.nombre==moneda1){
                            for(tasa in element.valor){
                                if(tasa==moneda2){
                                    cantidad2 = element.valor[moneda2];
                                    break;
                                }
                            }
                        }
                    });
                    resultadofinal = (cantidad*cantidad2).toFixed(5);
                    manipularDom('label','success',`${cantidad} ${moneda1} equivalen a ${resultadofinal} ${moneda2}`);

                }

}); 

function manipularDom(etiqueta,clase,texto){

    let frame = document.createDocumentFragment();
    let text = document.createElement(etiqueta);
    text.setAttribute('class',clase);
    text.setAttribute('id','convert');
    text.textContent = texto;
    frame.appendChild(text);
    cont.appendChild(frame);

}
