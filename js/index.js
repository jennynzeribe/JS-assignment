// create a person object with the following properties:

// name = Jennifer
// age = 21
// address = Maghodo
// sex = female
// state = imo.
// school = otueke
// function faaji = console.log("otueke fine pass imo state jor")


// using the above person object print the following sentences to console (Note the object references are in quotes)
// 1. "Jennifer" is an intelligent "21" year old wizkid schooling at "otueke"
// 2. "Imo" state has a lot of "female" indigenes who stay at "maghodo" in lagos state
// 3. otueke fine pass imo state jor (call this using the function faaji in the person object)
                    // ANSWER
var person = {
    name : "Jennifer",
    age : 21 ,
    address : "Maghodo",
    sex : "female",
    state : "imo",
    school : "otueke",
    faaji : function(){
        console.log( this.school + ' fine pass ' + this.state + ' jor ');
    }
};
console.log(person.state + " state has a lot of " + person.sex + " indigenes who stay at " + person.address + " in lagos state ");

console.log( person.name + " is an intelligent " + person.age + " year old wizkid schooling at " + person.school);

console.log(person.faaji());

