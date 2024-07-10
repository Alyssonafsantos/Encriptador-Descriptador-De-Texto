const texto = document.getElementById('input__principal');
const resultado = document.getElementById('resultado__processo');
const colarTexto = document.getElementById('colar')
const vazio = "";

// FUNÇÕES
function criptografarTexto(t){
    if(t.trim() != ""){
        t = t.replace(/e/g, "enter");
        t = t.replace(/i/g, "imes");
        t = t.replace(/a/g, "ai");
        t = t.replace(/o/g, "ober");
        t = t.replace(/u/g, "ufat");
        return t;
    }else{
            alert("Digite algum texto para criptografar");
            return vazio;
        };
};

function descriptografarTexto(t){
    if(t.trim() != ""){
        t = t.replace(/enter/g, "e");
        t = t.replace(/imes/g, "i");
        t = t.replace(/ai/g, "a");
        t = t.replace(/ober/g, "o");
        t = t.replace(/ufat/g, "u");
        return t;
    };
};

function removerAcentuacao(tCA)
{
    return tCA.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function criptografar(){
    resultado.value = criptografarTexto(removerAcentuacao(texto.value.toLowerCase()));
    if(resultado.value !== vazio){
        document.getElementById('informacao').style.display = 'none';
        colarTexto.style.display = "none";
        document.getElementById('resultado').style.display = 'flex';
        resultado.setAttribute('disabled', true);
    };
};


function descriptografar(){
    const textoADescriptografar = texto;    
    if(textoADescriptografar.value !== vazio){
        resultado.value = descriptografarTexto(textoADescriptografar.value);
        colarTexto.style.display = 'none';
    }else{
        alert('Digite algum texto para descriotografar');
        return vazio;
    }
};

function copiar(){
    texto.value = "";
    navigator.clipboard.writeText(resultado.value);
    colarTexto.style.display = "block";
    resultado.value = "";

};

async function colar(){
    let inputAColar = texto;
    const textoAColar = await navigator.clipboard.readText();
    inputAColar.value = textoAColar;
};