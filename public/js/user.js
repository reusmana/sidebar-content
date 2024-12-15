const headeruser = document.querySelector(".header-menu");
const drawerToggleMenu = document.querySelector(".drawer-button");

drawerToggleMenu.addEventListener("click", () => {
    headeruser.classList.toggle("open");
});
