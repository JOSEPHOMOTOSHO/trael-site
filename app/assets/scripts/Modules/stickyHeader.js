import throttle from "lodash/throttle"

class StickyHeader{
    constructor(){
        this.SiteHeader = document.querySelector(".site-header");
        this.pageSection = document.querySelectorAll(".padding-section");
        this.browserHeight = window.innerHeight
        this.prevScrollY = window.scrollY
        this.events()
    }

    events(){
        window.addEventListener("scroll",throttle(() => this.changeBackground(), 200))
    }

    changeBackground(){
        this.detScrolldir()
        if(window.scrollY > 60){ 
            this.SiteHeader.classList.add("site-header--dark-bg")

        }else{
            this.SiteHeader.classList.remove("site-header--dark-bg")
        }

        this.pageSection.forEach(el => this.CalcSection(el))
    }

    detScrolldir(){
        if(window.scrollY > this.prevScrollY){
            this.scrolldir = "down";
        }else{
            this.scrolldir = "up"
        }

        this.prevScrollY = window.scrollY

    }

    CalcSection(el){
        if(window.scrollY +  this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let scrollPercent = (el.getBoundingClientRect().y/this.browserHeight) * 100;
            if(scrollPercent < 18 && scrollPercent > -0.1 && this.scrolldir == "down" || scrollPercent < 33 && this.scrolldir == "up" ){
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
                document.querySelector(matchingLink).classList.add("is-current-link");
            }
        }
    }
    
}

export default StickyHeader