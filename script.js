

function togglemenu(){
    console.log("Btn is clicked")
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}