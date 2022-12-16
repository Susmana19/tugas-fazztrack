

//Function inti
const searchName = (input, sumData, callback) => {

const name = [
    "Abigail", "Alexandra", "Alison", 
    "Amanda", "Angela", "Bella", 
    "Carol", "Caroline", "Carolyn", 
    "Deirdre", "Diana", "Elizabeth", 
    "Ella", "Faith", "Olivia", "Penelope"];

    //variabel data berisi array yang datanya sudah urut dan sudah terfilter data array yang bernilai true pada function checkname
    let data = name.sort().filter(checkName);
    // console.log(data);

    //function check name yang memiliki output true/false, hasil cek setiap data di array dengan input
    function checkName(item) {

        // console.log(`item : ${item}` );
        let check = item.toLowerCase().includes(input.toLowerCase());
        // console.log(check);
        return check
        
    }
    //variabel logic yang berisi array yang sudah terfilter
    const logic = callback(data)
    // console.log(logic);

    //// variabel berisi array yang sudah ter-slice
    let result = logic.slice(0, sumData)

    return result;
};

//function callback
const callback = (data) => {

    return data
}

console.log(searchName("an", 3, callback));
// console.log(searchName("ca", 2, callback));
// console.log(searchName("ra", 5, callback));
// console.log(searchName("xyz", 5, callback));



