const biodata = {
    name: "Mokhamad Susmana", //string
    age: 27, //number
    hobbies: ["Reading a book Self Improvement", "Exploring of Web Development Technology", "Learning About Economics"], //array
    IsMarried: false, //boolean
    schoolList: [
        {
        name: "SDN 07 Rawasari 07 Pagi", 
        yearIn: 2002,
        yearOut: 2008,
        major: null
        },
        {
        name: "SMPN 2 Jakarta", 
        yearIn: 2008,
        yearOut: 2011,
        major: null
        },
        {
        name: "SMKN 14 Jakarta", 
        yearIn: 2011,
        yearOut: 2014,
        major: "Akuntansi"
        },
        {
        name: "STID Al-Hadid Surabaya", 
        yearIn: 2015,
        yearOut: 2019,
        major: "Pengembangan Masyarakat Islam"
        },       
    ], //Array of Object
    skills: [
        {
        skillName: "HTML",
        level: "advance"
        },
        {
        skillName: "CSS",
        level: "advance"
        },
        {
        skillName: "Javascript",
        level: "advance"
        },
        {
        skillName: "Golang",
        level: "beginner"
        }, //Array of Object       
    ],
    interestInCoding: true //boolean
}

console.log(biodata);
console.log(typeof(biodata));