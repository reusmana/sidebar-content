const header = document.getElementById("header");
const sidebar = document.getElementById("sidebar");
const drawerToggle = document.querySelector(".drawer-toggle");
const arrow = document.querySelector(".drawer-toggle i");
const sidebarMenu = document.querySelector(".sidebar-menu");
const menuItems = document.querySelectorAll(".sidebar-menu li a");
const buttonLogout = document.querySelector(".btn-logout");

const headeruser = document.querySelector(".header-menu");
const drawerToggleMenu = document.querySelector(".drawer-button");
console.log(menuItems);

drawerToggleMenu.addEventListener("click", () => {
    headeruser.classList.toggle("open");
});

const viewportWidth = window.innerWidth;
if (viewportWidth < 768) {
    sidebar.classList.add("open-mobile");
} else {
    sidebar.classList.remove("open-mobile");
}
console.log(`Viewport width: ${viewportWidth}px`);

if (header) {
    sidebar.classList.add("is-header-exits");
} else {
    sidebar.classList.remove("is-header-exits");
}

drawerToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuItems.forEach((item) => {
        item.classList.toggle("open");
    });
    sidebarMenu.classList.toggle("open");
    buttonLogout.classList.toggle("open");

    if (sidebar.classList.contains("open")) {
        arrow.classList.remove("fa-chevron-right");
        arrow.classList.add("fa-chevron-left");
    } else {
        arrow.classList.remove("fa-chevron-left");
        arrow.classList.add("fa-chevron-right");
    }
});
