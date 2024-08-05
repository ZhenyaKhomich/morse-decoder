const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let strFin = '';

    for(let i = 0; i< expr.length; i+=10) {
        let str10 = expr.slice(i, i + 10);
            if(str10 == '**********') {
                strFin += " ";
                continue;
        }
    let a='';
        for(let k = 0; k < str10.length; k+=2) {
            let str2 = str10.slice(k, k + 2);
        
            if(str2 == '10') {
                a+='.';
            } else if(str2 == '11') {
                a+='-';
            }
        } 
        strFin+=MORSE_TABLE[a];
    }
    return strFin;
}

module.exports = {
    decode
}