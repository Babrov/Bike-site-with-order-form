
let checkboxDelivery = document.getElementById("checkbox");
let confirmButton = document.getElementById("confirm_button");
let letters = /^[A-Za-z]+$/;
let numbers = /^[0-9]+$/;

window.onload = function(){
    monthAdd();
    yearAdd();
    dayAdd();
};



function numberContainCheck(item){
    if (!item.value.match(numbers)) {
        return false; 
    } else {
        return true;
    }
}

function lengthCheck(item, itemLength){
    if (item.value.length < itemLength){
        return false;
    } else {
        return true;
    }
}

function letterContainCheck(item){
    if (!item.value.match(letters)) {
        return false; 
    } else {
        return true;
    }
}

// bike choose block

let bikeSelect = document.getElementById("bike_select");
let userComment = document.getElementById("comment");

function bikeBlockCheck(){
    if (bikeSelect.selectedIndex == 0 ) {
        bikeSelect.style.borderBottom = "2px solid red";
        document.getElementById("bike_error").innerHTML = "Required";
        return false;
    } else {
        bikeSelect.style.borderBottom = "2px solid lightgreen";
        document.getElementById("bike_error").classList.add("hide");
        return true;
    }
}

// date block 

let daySelect = document.getElementById("day");
let monthSelect = document.getElementById("month");
let yearSelect = document.getElementById("year");
let date = new Date();


function yearAdd(){
    for (let i = 0; i<=3;i++){

        let option = document.createElement('option');
        option.setAttribute("id","year_option");
        option.value = date.getFullYear()+ i;
        option.innerHTML = date.getFullYear()+ i;
        yearSelect.appendChild(option);
    } 
}
function monthAdd(){
    let monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
        for (let i=0; i < 12; i++) {
        let option = document.createElement('option');
        option.setAttribute("id","month_option");
        option.value = i+1; // value сохраняется в числах равным номеру месяца
        option.innerHTML = monthList[i]; 
        monthSelect.appendChild(option);
        }
}

function dayAdd() {
    for (let i=1; i<=31; i++) {
        let option = document.createElement('option');
        option.setAttribute("id","day_option");
        option.value = i;
        option.innerHTML = i;
        daySelect.appendChild(option);
    }
}

function currentDateCheker() {

    let currentMonth = date.getMonth()+1;
    let currentYear = date.getFullYear();

    if (yearSelect.value == currentYear && monthSelect.value < currentMonth){
        
        yearSelect.selectedIndex = 0;
        daySelect.selectedIndex = 0;
        monthSelect.selectedIndex = 0;
        errorDate();
        return false;

    } else if (yearSelect.value %2 != 0 && monthSelect.value == 2 
                && (daySelect.value == 29 ||daySelect.value == 30 || daySelect.value == 31)) {

        yearSelect.selectedIndex = 0;
        daySelect.selectedIndex = 0;
        monthSelect.selectedIndex = 0;
        errorDate();
        return false;

    } else if ( yearSelect.value >= currentYear && yearSelect.value %2 == 0 
                && monthSelect.value == 2 && daySelect.value == 29) {

        correctDate();
        return true;

    } else if(yearSelect.selectedIndex == 0 || monthSelect.selectedIndex == 0 || daySelect.selectedIndex == 0){
        errorDate();
        return false;
    } else {

        correctDate();
        return true;
    }
}
function errorDate (){
    yearSelect.style.borderBottom = "2px solid red";
    monthSelect.style.borderBottom = "2px solid red";
    daySelect.style.borderBottom = "2px solid red";
    document.getElementById('date_error').innerHTML = "Select Correct Date";
}
function correctDate(){
    yearSelect.style.borderBottom = "2px solid lightgreen";
    monthSelect.style.borderBottom = "2px solid lightgreen";
    daySelect.style.borderBottom = "2px solid lightgreen";
    document.getElementById('date_error').classList.add("hide");
}

// billing block
let firstNameBilling = document.getElementById("first_name");
let lastNameBilling = document.getElementById("last_name");
let regionBilling = document.getElementById("region");
let streetBilling = document.getElementById("street");
let zipBilling = document.getElementById("zip");
let phoneBilling = document.getElementById("phone");

function billingNameCheker(){

    if (letterContainCheck(firstNameBilling) == false || letterContainCheck(lastNameBilling) == false
        || lengthCheck(firstNameBilling,3) == false || lengthCheck(lastNameBilling,3) == false) {
        firstNameBilling.style.borderBottom = "2px solid red";
        lastNameBilling.style.borderBottom = "2px solid red";
        return false;
    } else {
        firstNameBilling.style.borderBottom = "2px solid lightgreen";
        lastNameBilling.style.borderBottom = "2px solid lightgreen";
        return true;
    }
}

function billingRegionChecker(){

    if (regionBilling.selectedIndex == 0 ) {
        regionBilling.style.borderBottom = "2px solid red";
        return false;
    } else {
        regionBilling.style.borderBottom = "2px solid lightgreen";
        return true;
    }
}

function billingStreetChecker(){

    if (lengthCheck(streetBilling,5) == true) {
        streetBilling.style.borderBottom = "2px solid lightgreen";
        return true;
    } else {
        streetBilling.style.borderBottom = "2px solid red";
        return false;
    }
}

function billingZipChecker(){

    if (numberContainCheck(zipBilling) == true && lengthCheck(zipBilling,5) ==true){
        zipBilling.style.borderBottom = "2px solid lightgreen";
        return true;
    } else {
        zipBilling.style.borderBottom = "2px solid red";
        return false;
    }
}

function billingPhoneChecker(){
    if (numberContainCheck(phoneBilling) == true && lengthCheck(phoneBilling,10) ==true){
        phoneBilling.style.borderBottom = "2px solid lightgreen";
        return true;
    } else {
        phoneBilling.style.borderBottom = "2px solid red";
        return false;
    }
}

function billingAddressChecker() {

    if (billingNameCheker() == true && billingRegionChecker() == true  
    && billingStreetChecker() == true && billingZipChecker() == true && billingPhoneChecker() == true) {
        return true;
    } else {
        return false;
    }
}

// delivery block 
let firstNameDelivery = document.getElementById("first_name_delivery");
let lastNameDelivery = document.getElementById("last_name_delivery");
let regionDelivery = document.getElementById("region_delivery");
let streetDelivery = document.getElementById("street_delivery");
let zipDelivery = document.getElementById("zip_delivery");
let phoneDelivery = document.getElementById("phone_delivery");

function deliveryNameCheker(){

    if (letterContainCheck(firstNameDelivery) == false || letterContainCheck(lastNameDelivery) == false
        || lengthCheck(firstNameDelivery,3) == false || lengthCheck(lastNameDelivery,3) == false) {
        firstNameDelivery.style.borderBottom = "2px solid red";
        lastNameDelivery.style.borderBottom = "2px solid red";
        return false;
    } else {
        firstNameDelivery.style.borderBottom = "2px solid lightgreen";
        lastNameDelivery.style.borderBottom = "2px solid lightgreen";
        return true;
    }
}

function deliveryRegionChecker(){

    if (regionDelivery.selectedIndex == 0 ) {
        regionDelivery.style.borderBottom = "2px solid red";
        return false;
    } else {
        regionDelivery.style.borderBottom = "2px solid lightgreen";
        return true;
    }
}

function deliveryStreetChecker(){

    if (lengthCheck(streetDelivery,5) == true) {
        streetDelivery.style.borderBottom = "2px solid lightgreen";
        return true;
    } else {
        streetDelivery.style.borderBottom = "2px solid red";
        return false;
    }
}

function deliveryZipChecker(){

    if (numberContainCheck(zipDelivery) == true && lengthCheck(zipDelivery,5) ==true){
        zipDelivery.style.borderBottom = "2px solid lightgreen";
        return true;
    } else {
        zipDelivery.style.borderBottom = "2px solid red";
        return false;
    }
}

function deliveryPhoneChecker(){
    if (numberContainCheck(phoneDelivery) == true && lengthCheck(phoneDelivery,10) ==true){
        phoneDelivery.style.borderBottom = "2px solid lightgreen";
        return true;
    } else {
        phoneDelivery.style.borderBottom = "2px solid red";
        return false;
    }
}

function deliveryAddressChecker() {
    if (deliveryNameCheker() == true && deliveryRegionChecker() == true  
    && deliveryStreetChecker() == true && deliveryZipChecker() == true && deliveryPhoneChecker() == true) {
        return true;
    } else {
        return false;
    }
}

 function checkboxOn() { 
    firstNameDelivery.value = firstNameBilling.value;
    lastNameDelivery.value = lastNameBilling.value;
    regionDelivery.value = regionBilling.value;
    streetDelivery.value = streetBilling.value;
    zipDelivery.value = zipBilling.value;
    phoneDelivery.value = phoneBilling.value;
  };

//payment block 

let checkboxVisa = document.getElementById("visa");
let checkboxMc = document.getElementById("mastercard");
let cardNumber = document.getElementById("card_number");
let cvvPass = document.getElementById("cvv");
let cardMonth = document.getElementById("month_card");
let cardYear = document.getElementById("year_card");

function selectedCard(){
    if (checkboxVisa.checked == true) {
        return checkboxVisa.value;
    } else {
        return checkboxMc.value;
    }
}

function cardNumberChecker() { 

   if (numberContainCheck(cardNumber) == true && lengthCheck(cardNumber,16) == true){
        cardNumber.style.borderBottom = "2px solid lightgreen";
        document.getElementById('card_error').classList.add("hide");
        return true;
    } else {
        cardNumber.style.borderBottom = "2px solid red";
        document.getElementById('card_error').innerHTML = "card number is not valid";
        return false;
    }
}
function cardDateChecker(){
    if (numberContainCheck(cardMonth) == true && numberContainCheck(cardYear) == true
        && lengthCheck(cardMonth,2) == true && lengthCheck(cardYear,2) == true) {
        cardMonth.style.borderBottom = "2px solid lightgreen";
        cardYear.style.borderBottom = "2px solid lightgreen";
        document.getElementById('card_date_error').classList.add("hide");
        return true;
    } else {
        cardMonth.style.borderBottom = "2px solid red";
        cardYear.style.borderBottom = "2px solid red";
        document.getElementById('card_date_error').innerHTML = "card number is not valid";
        return false;
    }
}
function cvvChecker(){
    if (numberContainCheck(cvvPass) == true && lengthCheck(cvvPass,3) == true) {
        cvvPass.style.borderBottom = "2px solid lightgreen";
        document.getElementById('cvv_error').classList.add("hide");
        return true;
    } else {
        cvv.style.borderBottom = "2px solid red";
        document.getElementById('cvv_error').innerHTML = "required";
        return false;
    }
}
function paymentCheker() { 
    if (cardNumberChecker() ==true && cardDateChecker() == true && cvvChecker() == true) {
        return true;
    } else {
        return false;
    }
}
// create acc block 

let userName = document.getElementById("user_name");
let userPass = document.getElementById("user_pass");
let userPassConfirm = document.getElementById("user_pass_confirm");

function newAccountCheck() { 

    if( userName.value != "") {

        if(lengthCheck(userName,3) == true && userPass.value.length != 0 && userPassConfirm.value.length != 0
         && userPassConfirm.value == userPass.value){
            userPass.style.borderBottom = "2px solid lightgreen";
            document.getElementById('user_pass_error').classList.add("hide");
            userName.style.borderBottom = "2px solid lightgreen";
            document.getElementById('user_name_error').classList.add("hide");
            userPassConfirm.style.borderBottom = "2px solid lightgreen";
            document.getElementById('user_pass_confirm_error').classList.add("hide");
            return true;
        }  else {
            userPass.style.borderBottom = "2px solid red";
            document.getElementById('user_pass_error').innerHTML = " 6 symbols minimum";
            userName.style.borderBottom = "2px solid red";
            document.getElementById('user_name_error').innerHTML = " 3 symbols minimum";
            userPassConfirm.style.borderBottom = "2px solid red";
            document.getElementById('user_pass_confirm_error').innerHTML = "Passwords should be same";
            return false;
        }
    } 
}

function formCheck() { 
    newAccountCheck();
    if (bikeBlockCheck() == true && currentDateCheker() == true && billingAddressChecker() == true
        && deliveryAddressChecker() == true && paymentCheker() == true) {
            return true;
        } else if (newAccountCheck() == false) {

            return false;
        } else {
            return true;
        }
 }
 
function resultSend(){
    
    
    
    if (formCheck() == true) {
        
        let orderDetails = {
            bike : bikeSelect.value,
            comment: comment.value,
            deliveryDate : yearSelect.value + "/" + monthSelect.value + "/" + daySelect.value,
            billingName: firstNameBilling.value + " " + lastNameBilling.value,
            billingAddress: regionBilling.value + "," + streetBilling.value + "," + zipBilling.value,
            billingPhone: phoneBilling.value,
            deliveryName : firstNameDelivery.value + " " + lastNameDelivery.value,
            deliveryAddress: regionDelivery.value + "," + streetDelivery.value + "," + zipDelivery.value,
            deliveryPhone: phoneDelivery.value,
            cardSelected: selectedCard(),
            cardNumber: cardNumber.value,
            cvvPass: cvvPass.value,
            cardDate: cardYear.value + " " + cardMonth.value,
            userName: userName.value,
            userPass: userPass.value,
        }
        sessionStorage.setItem("order",JSON.stringify(orderDetails));
        window.location = "result.html";
    }
}

confirmButton.addEventListener("click",resultSend);
document.getElementById("checkbox").addEventListener("change", checkboxOn);
