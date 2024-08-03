// Asigna el texto HTML a un elemento específico
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Obtiene el valor del elemento especificado
function obtenerTextoElemento(elemento) {
    let elementoHTML = document.querySelector(elemento);
    return elementoHTML.value;
}

// Filtra el texto para permitir solo letras minúsculas y espacios
function filterInput(event) {
    const inputText = event.target.value;
    const filteredText = inputText.replace(/[^a-z\s]/g, ''); // Solo letras minúsculas y espacios
    event.target.value = filteredText;
}

// Encripta el texto del textarea
function encryptText() {
    let input = obtenerTextoElemento('#input-text');
    let encryptedText = input.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
    displayOutput(encryptedText);
    habilitarBotones(); // Habilita los botones de copiar y restablecer
}

// Desencripta el texto del textarea
function decryptText() {
    let input = obtenerTextoElemento('#input-text');
    let decryptedText = input.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    displayOutput(decryptedText);
    habilitarBotones(); // Habilita los botones de copiar y restablecer
}

// Copia el texto en el área de salida al portapapeles
function copyText() {
    let outputText = document.querySelector('#result-text').textContent;
    if (outputText.trim() !== '') {
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    } else {
        alert('No hay texto para copiar');
    }
}

// Muestra el texto en el área de salida
function displayOutput(text) {
    let initialContent = document.querySelector('#initial-content');
    let resultText = document.querySelector('#result-text');
    
    initialContent.style.display = 'none';
    resultText.style.display = 'block';
    resultText.textContent = text;
}

// Restablece el estado inicial de la interfaz
function resetState() {
    document.querySelector('#input-text').value = '';
    
    let initialContent = document.querySelector('#initial-content');
    let resultText = document.querySelector('#result-text');
    
    initialContent.style.display = 'block';
    resultText.style.display = 'none';
    resultText.textContent = '';
    
    deshabilitarBotones();
}

// Habilita los botones de copiar y restablecer
function habilitarBotones() {
    document.querySelector('.copy-button').removeAttribute('disabled');
    document.querySelector('.reset-button').removeAttribute('disabled');
}

// Deshabilita los botones de copiar y restablecer
function deshabilitarBotones() {
    document.querySelector('.copy-button').setAttribute('disabled', 'true');
    document.querySelector('.reset-button').setAttribute('disabled', 'true');
}

// Inicializa el estado cuando el documento se carga
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('input-text').addEventListener('input', filterInput);
    resetState();
});
