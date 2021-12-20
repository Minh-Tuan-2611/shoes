let container_left = document.querySelector(".container_left")
function genderProduct() {
    let getCostItem = localStorage.getItem("totalCostItem")
    let getItem = localStorage.getItem("itemStorage")
    getItem = JSON.parse(getItem)
    console.log(getItem)
    container_left.innerHTML += `<div class="row pay_shop">
        <div class="totalCost">
            <p class="">Pay MyShop</p>
            <h1>US$${getCostItem}</h1>
        </div>
    </div>`
    for (const item in getItem) {

        container_left.innerHTML += ` <div class="row container_product">
            <div class="col l-2 m-5 c-3">
            <img  style='height:60px' class="${getItem[item].img}" alt="">
            </div>
            <div class="col l-4 content_text">
            <h5 class="">${getItem[item].name}</h5>
            <h6>Qty ${getItem[item].no}, this is the best product</h6>
            </div>
            <div class="cost">
            <h6>US$${getItem[item].price}</h6>
            </div>
            </div>`
    }


}

genderProduct()




let pay_btn = document.querySelector(".pay")
let finish_pay = document.querySelector(".finish_pay")
let btn_yes = document.querySelector(".yes")
let btn_no = document.querySelector(".no")
let btn_close = document.querySelectorAll(".fa-window-close")
let submit_yes = document.querySelector(".submit_yes")
let submit_no = document.querySelector(".submit_no")
let inputGmail = document.querySelector(".input_gmail")
let inputName = document.querySelector(".input_name")
let inputAdd = document.querySelector(".input_address")
let inputCard = document.querySelector(".input_numberVisa")
let inputDate = document.querySelector(".input_date")
let inputCVC = document.querySelector(".input_CVC")

function checkMail() {

    let gmailVal = inputGmail.value
    if (gmailVal.length === 0 || typeof gmailVal !== 'string' || Number.isFinite(parseInt(gmailVal))) { document.querySelector(".email_warning").style.display = 'block' }
    else {
        return 1;
    }
}
function checkName() {

    let nameVal = inputName.value
    if (nameVal.length === 0 || Number.isFinite(parseInt(nameVal))) { document.querySelector(".name_warning").style.display = 'block' }
    else {

        return 1;
    }
}

function checkAdd() {

    let addVal = inputAdd.value
    if (addVal.length === 0 || Number.isFinite(parseInt(addVal))) { document.querySelector(".address_warning").style.display = 'block' }
    else {
        return 1;
    }
}


function checkCard() {

    let cardVal = inputCard.value
    if (cardVal.length === 0 || !Number.isFinite(parseInt(cardVal))) { document.querySelector(".card_warning").style.display = 'block' }
    else {

        return 1;
    }
}

function checkDate() {

    let dateVal = inputDate.value
    if (dateVal.length === 0 || !Number.isFinite(parseInt(dateVal))) { document.querySelector(".card_warning").style.display = 'block' }
    else {

        return 1;
    }
}

function checkCVC() {

    let cvcVal = inputCVC.value
    if (cvcVal.length === 0 || !Number.isFinite(parseInt(cvcVal))) { document.querySelector(".card_warning").style.display = 'block' }
    else {
        return 1;
    }
}






pay_btn.addEventListener('click', () => {
    checkMail()
    checkName()
    checkAdd()
    checkCard()
    checkDate()
    checkCVC()

    if (checkMail() === 1 && checkName() === 1 && checkAdd() === 1
        && checkCard() === 1 && checkDate() === 1 && checkCVC() === 1) {
        finish_pay.style.display = 'block'
        submit_yes.style.display = 'none'
        submit_no.style.display = 'none'
        document.querySelector(".email_warning").style.display = 'none'
        document.querySelector(".name_warning").style.display = 'none'
        document.querySelector(".address_warning").style.display = 'none'
        document.querySelector(".card_warning").style.display = 'none'

    }

})
btn_yes.addEventListener('click', () => {
    submit_yes.style.display = 'block'


})
btn_no.addEventListener('click', () => {
    submit_no.style.display = 'block'


})

for (i = 0; i < btn_close.length; i++) {
    btn_close[i].addEventListener('click', () => {
        finish_pay.style.display = 'none';
        submit_yes.style.display = 'none';
        submit_no.style.display = 'none';
    })
}