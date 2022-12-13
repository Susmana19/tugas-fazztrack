
let kata1 = "Jakarta Aku"; //string
let kata2 = 95; //number
let kata3 = true; //boolean
let kata4 = ["jakarta", "sarapan"]; //array
let kata5 = {kota: "jakarta", hobi: "balapan"}; //object
let kata6 = [{kota: "jakarta",hobi: "balapan"}]; //array of object

// 1b. Coding Ubah huruf vokal a menjadi o
// dan validasi tipe data teks harus string (berikan ouput "Tipe data harus string", jika bukan tipe data string)

function changeLetter(word) {

    if (typeof(word) !== "string" ){
        return "Tipe Data harus string";
    } 
    else {
        let change =  word.replace(/a/g, "o").replace(/A/g, "O");
        return change;
    }

}

console.log(changeLetter(kata1));