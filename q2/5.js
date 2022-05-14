// what is the different between localStorage and sessionStorage?
// please open a site and Try to save name and family on sectionStorage on Devtools
// then copy the Url of that site and open another Tab of browser.
// Try to get name and family that save before.
// Why this problem is occurred?!
// q5

// let student = {
//     name: "kimia",
//     family: 'goudarzi'
// }
// function add(student){
//     sessionStorage.setItem("stu", JSON.stringify(student))
// }

// console.log(sessionStorage.getItem("stu")); 
// add(student);


// at First please get all property of document.cookie and split them and log them
// add your name and family and your age to document.cookie
// create function that get name and value then add them to cookie
// now we want to add expire date to this cookie . please create function that get a number(n) and then Set the expiration day n days after today

// q6

    let str = "kimia goudarzi 19"
    function setCookie(str){
       let arr = str.split(" ")
       console.log(arr);
        document.cookie = `name=${arr[0]}; expires=Thu, 01 Jan 2030 00:00:00 UTC;`;
        document.cookie = `family=${arr[1]}`;
        document.cookie = `age=${arr[2]}`;

    }
    console.log(setCookie(str));
    console.log(document.cookie);
   

















//q3
// please create An object with Animal name. this object should have some property such as getAge , 
// getHeight , getWeight, Then create Another Object with this properties age,height,weight,
// now with set __proto__ try to call getAge , getHeight , getWeight with new object for example I created this object:
// rabbite = {
// weight:"5Kg",
// height:"30cm",
// age:2
// }
// We wants call rabbite.getAge How we can do that.


// const animal = {
//     getAge(){
//         return this.age
//     },
//     getWeight(){
//         return this.weight
//     },
//     getHeight(){
//         return this.height
//     }
// }

// const rabbit = {
//     weight:"5Kg",
//     height:"30cm",
//     age:2,
//     proto : animal
// }

// console.log(rabbit.getWeight());
// console.log(rabbit.getHeight());