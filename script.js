function encrypt(){ //Зашифровать сообщение
  let nonEncryptedText = document.getElementById("encrypt").value;
  let temp,encryptedText = ""; //temp - переменная, которая хранит код символа,
                              //после изменения кода записывает в encryptedText
  for(let i = 0;i < nonEncryptedText.length; i++){
    temp = nonEncryptedText.codePointAt(i);//Присваиваю код символа
    temp += Number(document.getElementById("encryptKey").value);//Увеличить код символа на "ключ шифрования"
    encryptedText += String.fromCodePoint(temp);//записать получившийся символ
  }
  alert(encryptedText);
}

function decrypt(){ //Расшифровать работает по тому же принципу
  let nonDecryptedText = document.getElementById("decrypt").value;
  let temp,decryptedText = "";
  for(let i = 0;i < nonDecryptedText.length; i++){
    temp = nonDecryptedText.codePointAt(i);
    temp -= Number(document.getElementById("decryptKey").value);
    decryptedText += String.fromCodePoint(temp);
  }
  alert(decryptedText);
}
