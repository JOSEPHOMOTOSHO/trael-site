class MobileMenu{
    constructor(){
        this.MenuIcon = document.querySelector(".site-header__menu-btn");
        this.MenuContent = document.querySelector(".site-header__menu-section")
        this.siteHeader = document.querySelector(".site-header") 
        this.events()
    }

    events(){
        this.MenuIcon.addEventListener("click", () => this.toggleMenuIcon())
    }

    toggleMenuIcon(){
        this.MenuContent.classList.toggle("site-header__menu-section--is-visible")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.MenuIcon.classList.toggle("site-header__menu-btn--close-x")
    }
}

export default MobileMenu;