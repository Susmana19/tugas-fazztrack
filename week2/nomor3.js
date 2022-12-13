//Cari nilai rata-rata UN dan validasi semua nilai harus diisi

const matematika = 90;
const bahasaIndonesia = 90;
const bahasaInggris = 90;
const ipa = 89;

function average(subject1, subject2, subject3, subject4) {

    let examSubject = [subject1, subject2, subject3, subject4];

    let avg = (subject1+ subject2 + subject3 + subject4) / examSubject.length;

    if (subject1 == undefined || subject2 == undefined || subject3 == undefined || subject4 == undefined) {
        return "Semua nilai harus diisi"
    }
    else {
    
        let result = "";

        if (avg >= 90) {
            result = `Nilai rata-rata: ${avg}, Grade A`;
        }
        else if(avg >= 80) {
            result = `Nilai rata-rata: ${avg}, Grade B`;
        }
        else if(avg >= 70) {
            result = `Nilai rata-rata: ${avg}, Grade C`;
        }
        else if(avg >= 60) {
            result = `Nilai rata-rata: ${avg}, Grade D`;
        }
        else {
            result = `Nilai rata-rata: ${avg}, Grade E`;
        }
        return result;
    }

};

console.log(average(matematika, bahasaIndonesia, bahasaInggris, ipa));