window.onload = function() {
    const encodedText = sessionStorage.getItem('encodedText');
    const shift = Number(sessionStorage.getItem('shift'));
    if (encodedText !== null) {
        let decodedText = '';
        const encoded = document.getElementById('encoded');
        encoded.innerText = encodedText;
        const symbols = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦШЩЧЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя,.!?-= ';
        const symbolsQuantity = symbols.length;
        const textLength = encodedText.length;
        for (let i = 0; i < textLength; i++) {
            if (encodedText[i] === "\n") {
                decodedText += "\n"
            }
            let curSymbolIndex = symbols.indexOf(encodedText[i]);
            let curSymbol = encodedText[i];
            if (curSymbolIndex !== -1) {
                const newIndex = (curSymbolIndex - shift < 0 ) ? symbolsQuantity + (curSymbolIndex - shift) :  curSymbolIndex - shift;
                let newSymbol = symbols[newIndex];
                decodedText += newSymbol;
            }
        }
        sessionStorage.setItem('decodedText', decodedText);
        console.log(decodedText);
    }
};