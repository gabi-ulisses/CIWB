const data ={
    "cep": "14802-000",
    "logradouro": "Avenida Padre Francisco Sales Colturato",
    "complemento": "lado par",
    "unidade": "",
    "bairro": "Centro",
    "localidade": "Araraquara",
    "uf": "SP",
    "estado": "São Paulo",
    "regiao": "Sudeste",
    "ibge": "3503208",
    "gia": "1818",
    "ddd": "16",
    "siafi": "6163"
};

function preencher(){
    document.getElementById("logradouro").value = data.logradouro;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
    document.getElementById("estado").value = data.estado;
}

preencher();
