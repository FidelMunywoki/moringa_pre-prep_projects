console.log("Hello");
//alert("Javascript trial");
var b = " Javascript study"
console.log(b)
//changing contents.




//document.getElementById('change').innerHTML = age;
function greeting(yourName) {
    
    var result = 'Hello '+yourName;
    console.log(result);
  
};
var officialName = prompt("What is your name?");
greeting(officialName);

/*
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}

sumNumbers(10,'20');
*/

//loop through function

var jumpingJacks = function (numberOfTimes){
    for(var i = 1; i < numberOfTimes; i++){
        console.log(i + " Jumping Jacks !");
    }

};

jumpingJacks(20);