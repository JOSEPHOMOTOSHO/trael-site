class MobileMenu{
    constructor(){
        this.MenuIcon = document.querySelector(".site-header__menu-btn");
        this.MenuContent = document.querySelector(".site-header__menu-section")
        this.events()
    }

    events(){
        this.MenuIcon.addEventListener("click", () => this.toggleMenuIcon())
    }

    toggleMenuIcon(){
        this.MenuContent.classList.toggle("site-header__menu-section--is-visible")
    }
}

export default MobileMenu;