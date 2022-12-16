//10 Built in function Javascript beserta contohnya

//1.shift (menghapus data pertama dari array)
let kota = ["Jakarta", "Bandung", "Malang", "Surabaya", "Makassar"];
// kota.shift();
// console.log(kota);

//2.pop (menghapus data terakhir dari array)
// kota.pop();
// console.log(kota);

//3.unshift (Menambahkan data baru di awal array)
let bunga = ["mawar", "melati", "kembang sepatu", "matahari", "raflesia"]
// bunga.unshift("teratai");
// console.log(bunga);

//4.push (menambahkan data baru di akhir array)
// bunga.push("asoka");
// console.log(bunga);

//5. slice (mengambil data array)
//param1 = dimulai dari indeks ke-berapa
//param2 = sampai ke indeks ke-berapa (-1)
let buah = ["Alpukat", "Jeruk", "Manggga", "Anggur", "Pisang"]
// buah = buah.slice(0,3); 
// console.log(buah);

//6.sort (mengurutkan data pada array)
let planet = ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter"];
// planet = planet.sort();
// console.log(planet);


//7.split (mengubah string menjadi array dengan memotong menjadi bagian lebih kecil dari string)
//parameternya diisi pemotongannya berdasarkan apa
let text = "kita sedang belajar javascript"
// splitText = text.split(" ")
// console.log(splitText);

//8.reverse (membalikkan urutan array)
// let reverseText = splitText.reverse()
// console.log(reverseText);

//9.join (menggabungkan data pada array menjadi string)
//parameternya diisi jaraknya berdasarkan apa
// let joinText = reverseText.join(" ")
// console.log(joinText);


//10.concate
//menggabungkan dua data pada array menjadi satu array

let kelurahan = ["Johar Baru", "Rawasari", "Menteng"]
let kecamatan = ["Cempaka Putih", "Menteng", "Senen"]

let jakartaPusat = kelurahan.concat(kecamatan)
// console.log(jakartaPusat);



















//splice 
// a. 3 parameter(Memanipulasi array : menyisipkan/menambahkan data baru dan menghapus data pada array)
// (param1: letak indeks ke-berapa data yang akan ditambahkan, 
// param2: jumlah data yang dihapus di-indeks setelahnya,
// param3: data/value yang akan ditambahkan ke dalam array)

// let buah = ["Alpukat", "Jeruk", "Manggga", "Anggur", "Pisang"]
// console.log(buah.splice(1,0, "Apel")); 
// console.log(buah);

//b. 2 parameter(menghapus data array)
//param1 : dimulai dari indeks ke-berapa data yang akan dihapus
//param2 : jumlah data yang dihapus di-indeks setelahnya
    
// console.log(buah.splice(0,1)); 
// console.log(buah);
