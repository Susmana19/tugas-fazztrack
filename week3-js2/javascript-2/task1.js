

// "Perbedaan var, let dan const sebagai berikut :
// 1.Var : bisa di-redeclare artinya isi dari variabel menggunakan var bisa dideklrasikan ulang dengan isi variabel yang berbeda. Kemudian var memiliki sifat hoisting artinya kita bisa mengeksesekusi program meskipun penulisannya terbalik, yakni assign variabel tanpa var dahulu, kemudian setelah itu dideklarasikan dengan var. hal ini tetap bisa berjalan atau tidak error.    
//Scope dari var adalah global, artinya variabel yang dideklarasikan dengan var, bisa diakses dimana saja


// 2.Let : tidak bisa di-redeclare artinya, penggunaan variale dengan let tidak bisa dideklarasikan ulang dengan isi variabel yang berbeda. Namun Isi variable bisa diubah tanpa dideklarisikan dengan penulisan let, langsung dituliskan nama variablenya dan isi variabelnye. untuk let juga tidak bisa di-hoisting. jika dilakukan hoisting maka akan error. 
//Scope dari let adalah bisa global atau bisa juga block-scoope dan local-scoope, artinya variabel yang dideklarasikan dengan let, bisa diakses dimana saja (global), jika sejak awal di-declare di global scoope. Namun, apabila di-declare di block-scoope atau local scoope, maka hanya bisa diakses di dalam scoopenya saja.


// 3. const: sesuai namanya yang artinya adalah constant, penggunakan variabel constant kita tidak bisa mengubah isi variabelnya, apalagi dideklarasikan ulang. Sehingga, penggunaan const harus dipastikan bahwa kita tidak akan mengubah isi variabelnya di waktu yang akan datang
//Scope dari const adalah block-scoope atau localscoope artinya variabel yang dideklarasikan dengan const, hanya bisa diakses di scoope-nya saja. namun, apabila sejak awal dideklarasikan di globacl scoope, maka bisa diakses di global.





























// var pesan1 = "Hallo Var";
// let massage1 = "Hallo Let";
// const msg1 = "Hallo Const";

// pesan1 = "Hallo Var Baru";
// massage1 = "Hallo Let Baru";
// // msg1 = "Hallo Const Baru"; //tidak bisa mengubah value dari variabel yg di-declare const

// // console.log(pesan1);
// // console.log(massage1);
// // console.log(msg1);



// function abc() {
//    var pesan1 = "Hallo Var Baru di Fungsi"
//    let massage1 = "hallo Let Baru di Fungsi"
//     console.log("di dalam fungsi: ", pesan1);
//     console.log("di dalam fungsi: ", massage1);
// }

// abc()
// console.log("================");
// console.log("di luar fungsi: ", pesan1);
// console.log("di luar fungsi: ", massage1);

// console.log("================");
// if(true){
//     var pesan1 = "hallo Var Baru di Percabangan"
//     let massage1 = "hallo Let Baru di Percabangan"
//     console.log(pesan1);
//     console.log(massage1);
// }
// console.log("================");
// console.log("di luar percabangan: ", pesan1);
// console.log("di luar percabangan: ", massage1);
