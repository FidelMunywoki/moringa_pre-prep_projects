if (confirm("Ready?")){
    for(var steps = 10; steps >=0; steps-- ){
        console.log("I am " +steps+ " to the door");
    
        if ( steps == 5){
            console.log("Turn Left");
        }
    }
}