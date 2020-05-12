function encrypt(){
  let nonEncryptedText = document.getElementById("encrypt").value;
  let temp,encryptedText = "";
  for(let i = 0;i < nonEncryptedText.length; i++){
    temp = nonEncryptedText.codePointAt(i);
    temp += Number(document.getElementById("encryptKey").value);
    encryptedText += String.fromCodePoint(temp);
  }
  alert(encryptedText);
}

function decrypt(){
  let nonDecryptedText = document.getElementById("decrypt").value;
  let temp,decryptedText = "";
  for(let i = 0;i < nonDecryptedText.length; i++){
    temp = nonDecryptedText.codePointAt(i);
    temp -= Number(document.getElementById("decryptKey").value);
    decryptedText += String.fromCodePoint(temp);
  }
  alert(decryptedText);
}
