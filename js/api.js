

const inputCep = document.querySelector("#cep"); 
const inputRua = document.querySelector("#rua"); 
const inputComplemento = document.querySelector("#complemento"); 
const inputBairro = document.querySelector("#bairro"); 
const inputUF = document.querySelector("#UF"); 

const BASE_URL = "https://brasilapi.com.br/api"; 

inputCep.onkeyup = async (evento) => { 
    //verificando se o cep cumpriu os 8 digitos 
    if (inputCep.value.length < 8) { 
        return;
     } 
    //fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado 
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
         method: "GET", 
        }); 
        
        // extraindo o json da resposta
        const conteudoRespposta =  await resposta.json();
        
        inputRua.value = conteudoRespposta.street;
        inputBairro.value = conteudoRespposta.neighborhood;
        inputUF.value = conteudoRespposta.state;
        inputComplemento.value = conteudoRespposta.city;


        console.log(conteudoRespposta); 
        alert("Cep completo: " + inputCep.value); }; 