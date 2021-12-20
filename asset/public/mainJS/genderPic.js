////// render big picture

let btn_buy = document.querySelectorAll(".Buy_now")

for (i = 0; i < btn_buy.length; i++) {

    btn_buy[i].addEventListener('click', (e) => {
        let product = {
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
        localStorage.removeItem("item_buy")
        localStorage.setItem("item_buy", JSON.stringify(product))
    }
}



