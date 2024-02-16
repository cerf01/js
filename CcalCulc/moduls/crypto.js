const passphrase = "LEMON";

export  const encryptPass= (text) =>
  {
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  };
 
export const  decryptPass  =(ciphertext) =>
  {  
      const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };


