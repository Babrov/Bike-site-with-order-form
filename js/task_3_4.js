
// Name Object
const userName = {
    firstName: '',
    lastName: '',
    set name(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
}

// Date Object 

let date = new Date();

const userDate = {
    firstDay: '',
    firstMonth: '',
    firstYear: '',
    nextDay: '',
    nextMonth: '',
    nextYear: '',

    set firstBuyDate(value) {
        [this.firstDay, this.firstMonth, this.firstYear] = value.split(" ");
    },
    get firstBuyDate(){
        return `${this.firstDay} ${this.firstMonth} ${this.firstYear}`
    },
    
    set nextBuyDate(value) {
        [this.nextDay, this.nextMonth, this.nextYear] = value.split(" ");

    },
    get nextBuyDate(){
        return `${this.nextDay} ${this.nextMonth} ${this.nextYear}`
    },
    
    dateCheck: function(day,month,year){

        let currentMonth = date.getMonth()+1;
        let currentYear = date.getFullYear();
    
        if (year.value == currentYear && month.value < currentMonth){
            
            year.selectedIndex = 0;
            month.selectedIndex = 0;
            day.selectedIndex = 0;
            alert("Choose correct Date");
            return false;
    
        } else if (year.value %2 != 0 && month.value == 2 
                    && (day.value == 29 || day.value == 30 || day.value == 31)) {
    
            year.selectedIndex = 0;
            day.selectedIndex = 0;
            month.selectedIndex = 0;
            alert("Choose correct Date");
            return false;
    
        } else if ( year.value >= currentYear && year.value %2 == 0 
                    && month.value == 2 && day.value == 29) {
            return true;
    
        } else if(year.selectedIndex == 0 || month.selectedIndex == 0 || day.selectedIndex == 0){
            alert("Choose correct Date");
            return false;
        } else {
            return true;
        }
    },
    dateAdd: function(daySelect,monthSelect,yearSelect){

        for (let i = 0; i<=3;i++){
    
            let option = document.createElement('option');
            option.setAttribute("id","year_option");
            option.value = date.getFullYear()+ i;
            option.innerHTML = date.getFullYear()+ i;
            yearSelect.appendChild(option);
        } 
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
    
        for (let i=1; i<=31; i++) {
            let option = document.createElement('option');
            option.setAttribute("id","day_option");
            option.value = i;
            option.innerHTML = i;
            daySelect.appendChild(option);
        }
    }
}

// Calculator 

const calculator = {
    saleAmount: 5,
    price: 45,
    priceWithSale: function(){
        return this.price - this.price/100 * this.saleAmount 
    }
    
}

// payment 

const payment = {
    checked: '',
    checkSelected: function(){
        let checkboxVisa = document.getElementById("visa");
        let checkboxMc = document.getElementById("mastercard");
        let checkboxCash = document.getElementById("cash");
        if (checkboxVisa.checked == true) {
            return this.checked = checkboxVisa.value;
        } else if (checkboxMc.checked == true) {
            return this.checked = checkboxMc.value;
        } else {
            return this.checked = checkboxCash.value;
        }
    }
}

let firstDaySelect = document.getElementById("first_day");
let firstMonthSelect = document.getElementById("first_month");
let firstYearSelect = document.getElementById("first_year");

let nextDaySelect = document.getElementById("next_day");
let nextMonthSelect = document.getElementById("next_month");
let nextYearSelect = document.getElementById("next_year");

const validation = {
    nameValidation: () => {
        let firstName = document.getElementById("first_name");
        let lastName = document.getElementById("last_name");
        if(firstName.value.length <3 && lastName.value.length <3) {
            alert("Write correct Name")
            return false;
        } else {
            userName.name = `${firstName.value} ${lastName.value}`;
            return true;
        }
    },
    dateValidation: () => {
        if(userDate.dateCheck(firstDaySelect,firstMonthSelect,firstYearSelect) 
        &&userDate.dateCheck(nextDaySelect,nextMonthSelect,nextYearSelect)){

            userDate.firstBuyDate = `${firstDaySelect.value} ${firstMonthSelect.value} ${firstYearSelect.value}`;
            userDate.nextBuyDate = `${nextDaySelect.value} ${nextMonthSelect.value} ${nextYearSelect.value}`;
            let firstPrice = document.getElementById("first_price");
            let nextPrice = document.getElementById("next_price");
            firstPrice.value = `$${calculator.price}`;
            nextPrice.value = `$${calculator.priceWithSale()}`;
            payment.checkSelected();
            return true;
        } 
    }
}

const confirmButton = document.getElementById("confirm_button");

confirmButton.onclick = () => {

    if(validation.nameValidation()&& validation.dateValidation()) {
    
        const User = {
            name: userName.name,
            date: ` First Buy: ${userDate.firstBuyDate} Next Buy: ${userDate.nextBuyDate}`,
            payment: payment.checked,
            price: `First Buy : ${calculator.price} Next Buy: ${calculator.priceWithSale()}`
        }
        sessionStorage.setItem("new User", JSON.stringify(User));
        const newUser = sessionStorage.getItem("new User");
        console.log(JSON.parse(newUser));
    } else {
        alert("Form error");
    }
}

window.onload =() => {
    userDate.dateAdd(firstDaySelect,firstMonthSelect,firstYearSelect);
    userDate.dateAdd(nextDaySelect,nextMonthSelect,nextYearSelect);
};




