// JS OPERATORS
// JS ARITHMETIC => +, -, *, /, % (BODMAS)
// LOGICAL OPERATOR => ||, &&, !, ?, ??
// TENARY OPERATOR => a ? b : c

//CONDITIONALS

/*
if(condition) {
    //does something
}
//else is optional
else{
    //does this thing 
}
// always executes
*/
//LOOPS
let counter = 0 + 1;
while(counter <= 10) {
    console.log("counter is ", counter);
    counter ++;
}

// STACKS and QUEUES
let drum = [] //STACKS
let items = 20;
let labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",""]

for (let item = 1; item <= items; item++){
    drum.push(item)
    console.log("finally drum is ", drum);
}

for (let counter = 0 + 1; counter <= 10; counter++){
    console.log("counter in for is ", counter);
}
/* 
// FOR LOOP
for(initialization;condition;increment/decrement){}
for(;true;){}

initialization
for(;condition;){
    increment/decrement
}*/