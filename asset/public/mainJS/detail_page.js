// picture detail page
const pic_big = document.querySelector(".container_picture_big");
const pic1 = document.querySelector(".pic1");
pic1.addEventListener("click", () => {
    pic_big.style.backgroundImage = "url(../img/fashion/air/men/am3.webp)";
});
const pic2 = document.querySelector(".pic2");
pic2.addEventListener("click", () => {
    pic_big.style.backgroundImage = "url(../img/fashion/air/men/am2.webp)";
});
const pic3 = document.querySelector(".pic3");
pic3.addEventListener("click", () => {
    pic_big.style.backgroundImage = "url(../img/fashion/air/men/am6.webp)";
});
const pic4 = document.querySelector(".pic4");
pic4.addEventListener("click", () => {
    pic_big.style.backgroundImage = "url(../img/fashion/air/men/am7.webp)";
});
// description_ feedback
//get container_star
let cont_star = document.getElementById('container_star')
let cont = document.getElementById("content");
const desc = document.querySelector(".desc");
desc.addEventListener("click", () => {
    if (!cont.classList.contains("content_active")) {
        cont.classList.add("content_active");
        desc.style.color = "#FF6347";
        cont_star.style.display = 'none'
        btn_feedback.style.color = "#000";
    }

});
//// start_rating
let btn_feedback = document.querySelector('.feed')
btn_feedback.addEventListener('click', () => {
    cont_star.style.display = 'block'
    btn_feedback.style.color = "#FF6347";
    cont.classList.remove("content_active");
    desc.style.color = "#000";

})
////// render big picture

let btn_buy = document.querySelectorAll(".Buy_now")

for (i = 0; i < btn_buy.length; i++) {

    btn_buy[i].addEventListener('click', (e) => {
        let product = {
            id: i + 1,
            name: e.target.parentElement.children[1].textContent,
            price: e.target.parentElement.children[2].textContent,
            img: e.target.parentElement.children[0].className.slice(22)
        }


        saveItemBuy(product)


    })

}


function saveItemBuy(product) {

    let getItemBuy = localStorage.getItem("item_buy")
    getItemBuy = JSON.parse(getItemBuy)
    if (!getItemBuy) {
        localStorage.setItem("item_buy", JSON.stringify(product))
    }
    else {

    }
}
// gender BigPicture


function gender_BigPicture() {
    console.log("work")
    let big_picture = document.querySelector(".container_picture_big")
    let name_pro = document.querySelector(".name_pro")
    let price_pro = document.querySelector(".price_pro")
    let Itembuy = localStorage.getItem("item_buy")
    Itembuy = JSON.parse(Itembuy)
    let imgItemBuy = Itembuy.img;
    big_picture.classList.add(imgItemBuy)
    name_pro.textContent = Itembuy.name
    price_pro.textContent = Itembuy.price + '$'
}

gender_BigPicture()





