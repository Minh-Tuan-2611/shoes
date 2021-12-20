

const getBtn_show_now = document.querySelectorAll(".btn_shop_now")
for (let i = 0; i < getBtn_show_now.length; i++) {

    getBtn_show_now[i].addEventListener('click', function (e) {
        let product = {
            id: i + 1,
            name: e.target.parentElement.children[1].textContent,
            price: e.target.parentElement.children[2].innerText,
            img: e.target.parentElement.children[0].className,
            no: 0
        }
        totalCost(product)
        cartNumber(product);

    })

}




function CheckCarNumbers() {
    let productNumber = localStorage.getItem('Numbers')
    if (productNumber) {
        document.querySelector(".container_cars span").textContent = productNumber
    }

}


function cartNumber(product) {
    let productNumber = localStorage.getItem('Numbers')
    productNumber = parseInt(productNumber)

    if (productNumber) {
        localStorage.setItem('Numbers', productNumber + 1)
        document.querySelector(".container_cars span").textContent = productNumber + 1
    }
    else {
        localStorage.setItem('Numbers', 1)
        document.querySelector(".container_cars span").textContent = 1
    }
    // console.log(product)
    setItem(product)

}

function setItem(product) {
    // console.log(product)
    let itemNumbers = localStorage.getItem("itemStorage")
    itemNumbers = JSON.parse(itemNumbers)
    if (itemNumbers !== null) {
        if (itemNumbers[product.name] === undefined) {
            itemNumbers = {
                ...itemNumbers,
                [product.name]: product
            }
        }
        itemNumbers[product.name].no += 1;
    }
    else {
        product.no = 1;
        itemNumbers = {
            [product.name]: product
        }
    }
    localStorage.setItem("itemStorage", JSON.stringify(itemNumbers));

}

function totalCost(product) {
    let costItem = localStorage.getItem("totalCostItem")
    if (costItem !== null) {
        costItem = parseInt(costItem)
        localStorage.setItem("totalCostItem", costItem + parseInt(product.price))
    }
    else {
        localStorage.setItem("totalCostItem", parseInt(product.price))
    }

}

function displayCard() {
    let costItem = localStorage.getItem("totalCostItem")
    let itemStotage = localStorage.getItem("itemStorage")
    itemStotage = JSON.parse(itemStotage)
    let productContainer = document.querySelector(".row_product");
    if (itemStotage && productContainer) {
        productContainer.innerHTML = ''
        Object.values(itemStotage).map(item => {
            productContainer.innerHTML +=
                `<div class="row container_product">
            <i class="close_x fas fa-window-close"></i>
            <div class="col  l-3 m-3 c-3 col_pro">
                <div class="product">
                    <div id="product_list_item_img " class="item_img  ${item.img}"></div>
                </div>
            </div>
            <div class="info_product col col_item l-2 m-2 c-2">
                <div class="name">
                    <div class="name_in">${item.name}</div>
                </div>
            </div>
            <div class="col col_item l-2 m-2 c-2">

                <div class="price">
                    <div class="price_in">${item.price}</div>
                </div>
            </div>
            <div class="col col_item l-2 m-2 c-2">

                <div class="quantity">
                    <div class="quantity_in">${item.no}</div>
                </div>
            </div>
            <div class="col col_item l-2 m-2 c-2 col-total">

                <div class="total">
                    <div class="total_in">$${parseInt(item.price) * parseInt(item.no)},00</div>
                </div>
            </div>
        </div>`

        })


        productContainer.innerHTML += `<div class="row totalCots">
        <div class="col col_totalCost">
            <div class="itemCost"><span>Total Cost = $${costItem}</span></div>
        </div>
        <div class="row wide removeAll">
        <div id='removeAllItem' class="col">Remove All</div>
     </div>
     </div>`
        productContainer.innerHTML += ` <div class="">
     <a  class="payment_cart" href="../html/payment.html" class="">Payment</a>
 </div>`


    }
}
CheckCarNumbers()
displayCard()

///Remove allItem

let removeALL = document.getElementById("removeAllItem")
removeALL.addEventListener("click", () => {
    let numberitem = localStorage.getItem("Numbers")
    numberitem = parseInt(numberitem)
    if (numberitem !== 0) {
        let getIteminLocal = localStorage.getItem("itemStorage")
        getIteminLocal = JSON.parse(getIteminLocal)
        let numBeritem = localStorage.getItem("Numbers")
        numBeritem = JSON.parse(numBeritem)
        let totalCost = localStorage.getItem("totalCostItem")
        totalCost = JSON.parse(totalCost)
        getIteminLocal = {}
        numBeritem = 0
        totalCost = 0
        localStorage.setItem("itemStorage", JSON.stringify(getIteminLocal))
        localStorage.setItem("Numbers", JSON.stringify(numBeritem))
        localStorage.setItem("totalCostItem", JSON.stringify(totalCost))
        location.reload()

    }


})


////removeItem

function removeItemCost(product) {

    let totalCost = localStorage.getItem("totalCostItem")
    totalCost = parseInt(totalCost);
    totalCost = localStorage.setItem("totalCostItem", totalCost - (parseInt(product.price) * parseInt(product.no)))
    let totalCost2 = localStorage.getItem("totalCostItem")
    document.querySelector(".itemCost").textContent = `Total Cost = $${totalCost2}`
    // delete item in itemlocalStorage
    let getIteminLocal = localStorage.getItem("itemStorage")
    getIteminLocal = JSON.parse(getIteminLocal)
    let namePro = product.name
    delete getIteminLocal[namePro]
    localStorage.setItem("itemStorage", JSON.stringify(getIteminLocal))
    emtyCart()


}

const deleteIcon = document.querySelectorAll(".fa-window-close")
deleteIcon.forEach(function (e) {

    e.addEventListener('click', function (e) {
        let itemList = []
        remove_Pro(e)
        let product = {
            name: e.target.parentElement.querySelector(".name_in").textContent,
            price: e.target.parentElement.querySelector(".price_in").textContent,
            no: e.target.parentElement.querySelector(".quantity_in").textContent
        }
        itemList.push(product.name)
        let getNumberCart = localStorage.getItem("Numbers")
        localStorage.setItem("Numbers", parseInt(getNumberCart) - parseInt(product.no))
        document.querySelector(".container_cars span").textContent = parseInt(getNumberCart) - parseInt(product.no)
        removeItemCost(product)

    })
})

function remove_Pro(e) {
    e.target.parentElement.remove()
}



/// handle up/down quantity Btn
// const upQuantityBtn = document.querySelectorAll(".fa-chevron-circle-right")
// upQuantityBtn.forEach(btn => {
//     btn.addEventListener('click', () => {

//         let getNumberCart = localStorage.getItem("Numbers")
//         localStorage.setItem("Numbers", parseInt(getNumberCart) + 1)
//         document.querySelector(".container_cars span").textContent = parseInt(getNumberCart) + 1

//     })
// })
// const downQuantityBtn = document.querySelectorAll(".fa-chevron-circle-left")
// downQuantityBtn.forEach(btn => {

//     btn.addEventListener('click', () => {
//         let getNumberCart = localStorage.getItem("Numbers")
//         localStorage.setItem("Numbers", parseInt(getNumberCart) - 1)
//         document.querySelector(".container_cars span").textContent = parseInt(getNumberCart) - 1

//     })
// })

//  check emty cart
function emtyCart() {
    let numberitem = localStorage.getItem("Numbers")
    numberitem = parseInt(numberitem)
    if (numberitem === 0 || numberitem == 'undefined' || numberitem == 'null')
        return document.querySelector(".emty_cart").innerHTML += `<img src="../img/empty-cart.png" alt="">`
}

emtyCart()

