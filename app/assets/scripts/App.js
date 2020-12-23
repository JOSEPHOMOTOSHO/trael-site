import "../styles/style.css"
import Person from "./modules/Person"

if(module.hot){
    module.hot.accept()
}

/* PrACTICING CONSTRUCTORS AND OBJECT ORIENTED PROGRAMMING */

class Adult extends Person{
    paytaxes(){
        console.log(this.name + "DOESNT OWE ANYMORE TAXES")
    }
}


let Joseph = new Person("Joseph","black");
Joseph.greet()

let Josephine = new Adult("Josephine","pink");
Josephine.greet()
Josephine.paytaxes();

