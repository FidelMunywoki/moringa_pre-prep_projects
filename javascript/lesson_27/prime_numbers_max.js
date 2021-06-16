var array1 = [45, -76, 86, 7, 1, 0, 1024, 67, -346]
console.log(Math.max(...array1))

//prime numbers
primeNums=[];
for (var counter =0; counter <= 100; counter++){
  
    var notPrime = false;
    for(var i = 2; i <=counter; i++){
        if (counter%i ===0 && i !==counter){
            notPrime = true;
        }
    }

    if (notPrime === false){
        primeNums.push(counter)
        
    }

   
}

console.log(primeNums)
console.log("The maximum prime number is "+Math.max(...primeNums)+" !")