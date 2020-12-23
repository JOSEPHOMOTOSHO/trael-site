


class Person{
    constructor(fullName, FullfaveColor){
    this.name = fullName,
    this.favColor = FullfaveColor

    }

    greet(){
        console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favColor + ".");
    }
}

export default Person