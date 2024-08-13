// script.js

// Función para encriptar el texto
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Mostrar el texto encriptado/desencriptado y ocultar la imagen
function showOutput(text) {
    const outputText = document.getElementById('outputText');
    const outputImage = document.getElementById('outputImage');

    outputText.textContent = text;
    outputText.style.display = 'block';
    outputImage.style.display = 'none';
}

// Evento para el botón Encriptar
document.getElementById('encryptBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    showOutput(encryptedText);
});

// Evento para el botón Desencriptar
document.getElementById('decryptBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    showOutput(decryptedText);
});

// Evento para el botón Copiar
document.getElementById('copyBtn').addEventListener('click', function () {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});
