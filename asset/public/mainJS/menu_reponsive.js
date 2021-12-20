// Menu
const btn_menu = document.getElementById("container_menu_reponsive");
const menu_list = document.querySelector(".container_nav_list");
btn_menu.addEventListener("click", () => {
    if (!menu_list.classList.contains("menu_active")) {
        menu_list.classList.add("menu_active");
    } else {
        menu_list.classList.remove("menu_active");
    }
});

//suv_menu men and women

const men_menu = document.querySelector(".nav_men");
const men_list = document.querySelector(".men_list");

men_menu.addEventListener("click", () => {
    if (!men_list.classList.contains("suv_menu_active")) {
        men_list.classList.add("suv_menu_active");
    } else {
        men_list.classList.remove("suv_menu_active");
    }
});
//
const women_menu = document.querySelector(".nav_women");
const women_list = document.querySelector(".women_list");

women_menu.addEventListener("click", () => {
    if (!women_list.classList.contains("suv_menu_active")) {
        women_list.classList.add("suv_menu_active");
    } else {
        women_list.classList.remove("suv_menu_active");
    }
});