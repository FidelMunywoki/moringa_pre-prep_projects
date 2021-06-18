 /*     working with Strings 
 
 
 let fruit = "banana, apple, berry,mango";
 console.log(fruit.charAt(2));
 x=fruit.split(',');

for(let i =0; i< x.length; i++){
    console.log(x[i])
}

console.log(x.toString());
console.log(x.join());
console.log(x.join('-'));
console.log(x.push('blackberry'),x);
console.log(x.unshift("Kiwi"), x)

let veggies =['tomato', 'broccoli'];
let morefruits =['x','F','G','K'];
let AllItems = x.concat(veggies, morefruits)
console.log(AllItems)
console.log(AllItems.slice(2,6))
console.log(AllItems.reverse())
console.log(AllItems.sort());

//sorting numbers
let someNumbers = [5,10,2,25,45,77,2,2,4,6,6,7,68,99,44,55,32]
console.log(someNumbers.sort(function(a,b){return a-b}));


let emptyArry = new Array();
for (let num =0; num<11; num++){
    emptyArry.push(num);
}

console.log(emptyArry)



//===========OBJECTS =====================================//

let student = {
    first: "first",
    last: "ledif",
    age: 25,
    height: 170,
    studentInfo: function(){
        return this.first + '\n'+ this.last + '\n'+ this.age +'\n'
    }
}

//console.log(student.studentInfo())

function studentInformation(){
    console.log(student.studentInfo());
}


// getting the user input and storing it in a variable.
function fn1(){
    let str = document.getElementById("text1").value
    alert("Value entered is: "+str);

}


function sum(a,b){
    return a+b;
}

console.log(sum(4,5))


//conditionals, control flows(switch)
// 0 sunday
let day = 5
switch(day){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday'
}

console.log(text)

 var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
  trees.splice(3,1);
  
  console.log(trees); // ["redwood", "bay", "cedar", "maple"]
  console.log(trees.length); // 4

  */






 