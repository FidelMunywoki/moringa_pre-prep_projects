var animals = {
    zebra : {
        classfication : "Mammal",
        appearance : ["White with black stripes", "4 legs", "Looks like a donkey"],
        habitat: "Grasslands",
        diet : "Herbivore",
        friendly : true
    },

    crocodile :{
        classification : "Reptile",
        appearance : ["Long wide mouth with many teeth", "Close relatives to dinosaurs",
                      "Looks like a big lizard"],
        habitat : "Grasslands",
        lifespan : 100,
        diet : "Carnivore",
        friendly : false
        

    }
};


animals.ostrich = { 
    classification : "Bird",
    appearance : [ "Big, tall bird", "2 legs", "Has a long neck"],	
    habitat : "Grasslands",
    lifespan : 45,
    diet : "Herbivore",
    friendly : true
    };

animals.shark = {
    classification : "Fish", 
appearance : ["Sharp teeth", "Has fins", "Has gills"], 
habitat : "Water",
lifespan : 30, 
diet : "Carnivore", 
friendly : true

};

console.log(animals.shark)