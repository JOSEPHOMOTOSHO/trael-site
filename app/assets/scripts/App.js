import "../styles/style.css"
import MobileMenu from "./Modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"

let revealOnScroll = new RevealOnScroll();

let mobileMenu = new MobileMenu();

if(module.hot){
    module.hot.accept()
}





