const form = document.forms.encode;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const symbols = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦШЩЧЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя,.!?-= ';
    const formData = new FormData(form);
    const shift = Number(formData.get('shift'));
    const textToEncode = document.getElementById('text').innerText;
    let encodedText = '';
    const symbolsQuantity = symbols.length;
    const textLenght = textToEncode.length;
    for (let i = 0; i < textLenght; i++) {
        if (textToEncode[i] === "\n") {
            encodedText += "\n"
        }
        let curSymbolIndex = symbols.indexOf(textToEncode[i]);
        if (curSymbolIndex !== -1) {
            const newIndex = (curSymbolIndex + shift > symbolsQuantity - 1) ? curSymbolIndex + shift - symbolsQuantity :  curSymbolIndex + shift;
            let newSymbol = symbols[newIndex];
            encodedText += newSymbol;
        }
    }
    sessionStorage.setItem('encodedText', encodedText);
    sessionStorage.setItem('shift', shift);
});

window.onload = function() {
    let decodedText = sessionStorage.getItem('decodedText');
    if (decoded !== null) {
        const decoded = document.getElementById('decoded');
        decoded.innerText = decodedText;
    }
    
    
};