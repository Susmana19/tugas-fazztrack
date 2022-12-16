// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

    if (nilaiAwal > nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal"
    }

    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    }

    //method filter utk mengambil data array yang bernilai true pada function checkRange
    let result = dataArray.sort((x, y) => x - y).filter(checkRange) //penulisan sama sama spt function(x, y) {return x - y}

    //function memiliki output true/false, hasil cek setiap data di array dengan inputan param1 dan param2
    function checkRange(item) {
        let check = item >= nilaiAwal && item <= nilaiAkhir
        return check
    }

    if (result.length === 0) {
        return "Nilai tidak ditemukan"
    }

    return result;

}

console.log(SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])); 
console.log(SeleksiNilai(4, 17 , [2, 25, 4])); 
console.log(SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]));

