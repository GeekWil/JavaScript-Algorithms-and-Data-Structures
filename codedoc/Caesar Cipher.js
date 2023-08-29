function rot13(str) {
  let decoded = '';
  
 for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[A-Z]/.test(char)) {
       let decodedChar = ((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0);
      decoded += String.fromCharCode(decodedChar);
    } else if (/[a-z]/.test(char)) {
      const decodedChar = ((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13) % 26) + 'a'.charCodeAt(0);
      decoded += String.fromCharCode(decodedChar);
    } else {
      decoded += char;
    }
  }

  return decoded;
}

rot13("SERR PBQR PNZC");
