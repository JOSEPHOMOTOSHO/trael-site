import throttle from "lodash/throttle"

class RevealOnScroll{
constructor(els,per){
    this.percent = per
    this.itemToReveal = els
    this.browserHeight = window.innerHeight
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
    this.events()
}

events(){
   window.addEventListener("scroll", this.scrollThrottle);
}

calcCaller(){
    console.log("scroll dey run");
    this.itemToReveal.forEach(el => {
        if(el.isRevealed == false){
            this.calculateScroll(el)
        }
    })
}
calculateScroll(el){
   if(window.scrollY + this.browserHeight > el.offsetTop){
    console.log("Element is being calculated")
    let scrollPercent = (el.getBoundingClientRect().y/this.browserHeight) * 100;
    if(scrollPercent < this.percent){
        el.classList.add("reveal-item--is-visible")
        el.isRevealed = true;
        if (el.isLastItem){ 
            window.removeEventListener("scroll",this.scrollThrottle)
        }
    }
   }
}

hideInitially(){
    this.itemToReveal.forEach(el =>{
        el.classList.add("reveal-item")
        el.isRevealed = false;
    } );
    this.itemToReveal[this.itemToReveal.length- 1].isLastItem = true;
}




}

export default RevealOnScroll;