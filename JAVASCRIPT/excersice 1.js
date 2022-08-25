// EMPTY CARTON
/*
let carton = []

let names = ["Alpha Milk", "Baby Food", "Best Milk", "BMIC", "OMIM"];
for (let ele = 1; ele <=10; ele++) {
    // RANDOMLY SELECT NAMES FROM DATASET
    let name = names[Math.floor(Math.random() * names.length)];
    // ASSIGN THE NAME AS LABEL FOR THE TIN OF MILK
    let tinOfMilk = {
        [name] : ele 
    }
    //FILL THIS CARTOON WITH LABELED TINS OF MILK
    carton.push(tinOfMilk)

    if (ele % 2 === 0) {
        tinOfMilk.color = "red";
    } else {
        tinOfMilk.color = "green";
    }
}
console.log("This is the cartoon", carton);


// WRITE A CODE WC CAN GIVE GRADES TO STUDENTS ACCORDING TO THEIR SCORES
     -80 - 100, A
     *70 - 89, B
     *60 - 69, C
     *50 - 59, D
     *0 - 49, F

     if (marks >=80) {
        grades = A
     } else





// QUICK EXERCISE
let str = ["A","B","C","D","E"];
// str = ["E","D","C","B","A"]
 
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}
*/
let str = ["A","B","C","D","E"];
let rstr = [];
for(let index = (str.length-1); index >= 0; index--){
    rstr.push(str[index]);
}
console.log("rstr", rstr);


// FUNCTIONS IN JS

// FUNCTION LITERAL NOTATION

// FUNCTION DEFINATION
function printName(name){
    console.log(name)
}


//FUNCTION EXPRESSION ( first class functions)
    const printName2 = function() {

}
printName2()




//FUNCTION INVOCKATION
printName("undefined")



for (let counter = 60 - 5; counter <= 60; counter--){
    console.log(" ", counter);
}