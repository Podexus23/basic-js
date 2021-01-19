const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse){
    this.recessivity = reverse;
  }
  encrypt(str, key) {
    if(typeof str != 'string' || typeof key != 'string'){
      throw Error('ITS AN ERROR')
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
  
    let keyCount = 0;
    let letters = '';
  
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        letters += String.fromCharCode(((str.charCodeAt(i) + key.charCodeAt(keyCount))%26)+65)
        keyCount++
      } else letters += str[i]
      if(keyCount == key.length) {keyCount = 0}
    }
    if(this.recessivity == false){ letters = letters.split('').reverse().join('')}
    return letters
    }
    
    decrypt(str, key) {
      if(typeof str != 'string' || typeof key != 'string'){
        throw Error('ITS AN ERROR')
      }
    
      str = str.toUpperCase();
      key = key.toUpperCase();
    
      let keyCount = 0;
      let letters = '';
    
      for(let i = 0; i < str.length; i++){
        debugger;
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
          letters += String.fromCharCode((((str.charCodeAt(i) - key.charCodeAt(keyCount) + 26))%26 )+65)
          keyCount++
        } else letters += str[i]
        if(keyCount == key.length) {keyCount = 0}
      }
      if(this.recessivity == false){letters = letters.split('').reverse().join('')}
      return letters
    }
}

module.exports = VigenereCipheringMachine;
