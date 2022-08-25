class Aliens{
    prop = "This is the prop within Aliens";
}
let people = new Aliens();
console.log(people.prop);

function Aliens2(prop){
    this.prop = prop;
    //implicit return "this"
}
//let people2 = new Aliens2("This is a man created from Aliens2")
//console.log(people2.prop);

let mark = new Aliens2("This is a man created from Aliens");
let Julius = new Aliens2("This is a man created from Aliens");
julius.name = "names";
console.log(mark.prop)