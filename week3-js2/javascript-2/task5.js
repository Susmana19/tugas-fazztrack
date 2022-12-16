

let data = {
    id: 1,
    name: "leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

//A. Ubahlah data tersebut menggunakan spread operator menjadi:
// - name: nama anda
// - email: email anda
// - hobby: hobi anda

data = {
    ...data,
    name: "Mokhamad Susmana",
    email: "susmanam@gmail.com",
    hobby: "Reading a Book"
}

console.log(data);

//B. Ambil data street dan suite menggunakan destructuring
const {street, suite, city, zipcode} = data.address;

console.log(
`street : ${street}
suite  : ${suite}`);











// let obj1 = {
//     nama1: "sejarah",
//     nama2: "ipa"
// }

// let obj2 = {
//     nama3: "olga",
//     nama4: "ips"
// }

// let {nama1, nama2} = newObject;
// console.log(newObject);