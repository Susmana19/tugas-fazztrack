let teks = "Malam";

// 1a. Coding Deteksi Palindrome

//Alternatif pertama :
function checkPalindrom(word) {

  //ubah teks menjadi string, huruf kecil dan me-replace tanda baca dan spasi
  word = String(word).toLowerCase().replace(/[.,/#!$%^&*';:{}=\\-_`~()\s]/g, "")

  //Membalik urutan huruf
  reverse = word.split('').reverse().join('');

  //cek jumlah huruf
  let sumLetter = word.length;

  let result = "";

  //validasi jumlah huruf
  if (sumLetter <= 2) {
    return result = "Teks harus lebih dari 2 huruf";
  }
  else {
        if (word == reverse) {
          result = "Palindrom";
        }
        else {
          result = "Bukan Palindrom";
        }
        return result
      }
}

console.log(checkPalindrom(teks)); 


//Alternatif kedua
function isPalindrom(word) {
  
  ////ubah teks menjadi string, huruf kecil dan me-replace tanda baca dan spasi
  word = String(word).toLowerCase().replace(/[.,/#!$%^&*;:{}=\\-_`~()\s]/g, "")

  //cek jumlah huruf
  let sumLetter = word.length

  let result = "";

  //validasi jumlah huruf
  if (sumLetter <= 2) {
    return result = "Teks harus lebih dari 2 huruf";
  }
  else {
    for (let i = 0; i < word.length; i++) {
      textInput = word[i];
      textReverse = word[sumLetter - i - 1];
      if (textInput != textReverse) {
      return result = "It's not a Palindrome";
      } 
    }
    result = "It is a Palindrome";
  }
  return result;
}

console.log(isPalindrom(teks));