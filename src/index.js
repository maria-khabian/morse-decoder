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
    // write your solution here
  const exprArr = []
  const obj = {
    '10': '.',
    '11': '-',
    '00': '',
    '**': ' '
  }
  for(let i=0; i < expr.length; i += 10) {
    exprArr.push(expr.slice(i, (i+10)))
  }
  const arrRes = []
  const arr = exprArr.map((word) =>  {
    const microArr = []
    for(let i=0; i < word.length; i+=2) {
      microArr.push(word.slice(i, i+2))
    }    
    arrRes.push(microArr)
  } )
  const arrMorze = arrRes.map((elem) => elem.map((elemik, i) => elemik=obj[elemik])).map((word) => word.join(''))
  const result = arrMorze.map(word => word !== '     '? word = MORSE_TABLE[word] : word = ' ').join('')
  return result
}

module.exports = {
    decode
}