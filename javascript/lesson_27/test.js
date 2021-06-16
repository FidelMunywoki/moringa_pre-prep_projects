const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};

//creaing a new object
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();


me.name = 'Mukul Mukurungezi';
me.isStudying = true;
me.printIntroduction();