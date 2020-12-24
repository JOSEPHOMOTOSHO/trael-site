import "../styles/style.css"
<<<<<<< HEAD
import Person from "./modules/Person"
=======
import MobileMenu from "./Modules/MobileMenu"

let mobileMenu = new MobileMenu();
>>>>>>> header

if(module.hot){
    module.hot.accept()
}

<<<<<<< HEAD
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
=======



>>>>>>> header

