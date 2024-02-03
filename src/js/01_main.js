const nowTime = new Date(),
date = nowTime.getDate(),
month = nowTime.getMonth(),
monthLast = (nowTime.getMonth() - 1 == -1) ? 11 : nowTime.getMonth() - 1,
monthNext = (nowTime.getMonth() + 1 == 12) ? 0 : nowTime.getMonth() + 1,
year = nowTime.getFullYear(),
daysInMonth = new Date(year,month + 1, 0).getDate(),
daysInMonthLast = new Date(year,month, 0).getDate(),
daysInMonthBeforeLast = new Date(year,month, 0).getDate(),
daysInMonthNext = new Date(year,month + 2, 0).getDate(),
daysWeek0 = new Date(`${year}-${month + 1}-1`).getDay(),
daysWeek1 = new Date(`${year}-${month + 2}-1`).getDay(),
daysWeek2 = new Date(`${year}-${month}-1`).getDay(),
daysWeekCurrent = (daysWeek0 == 0) ? 7 : daysWeek0,
daysWeekNext = (daysWeek1 == 0) ? 7 : daysWeek1,
daysWeekLast = (daysWeek2 == 0) ? 7 : daysWeek2,
tableDate = document.querySelectorAll('.calendar_day'),
calendar = document.querySelector('.calendar_days'),
calendarMonth = document.querySelector(".calendar_month"),
strelkaLast = document.querySelectorAll(".calendar_strelka")[0],
strelkaNext = document.querySelectorAll(".calendar_strelka")[1],
dataTitle = document.querySelector('.invent_title'),
nameMonth = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Октября',
    10: 'Ноября',
    11: 'Декабаря' 
},
nameMonthTitle = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабарь' 
};


let monthCount = 0;



// отрисовка дат и месяца

const calendarFunc = () => {

    function fullDate(mas, elementLast, currentMonth, elementDaysLast) {
        let count = 1,
        countMinus = elementLast + 2 - elementDaysLast,
        countPlus = 1;

        for (let i = 1; i <= mas.length; i++) {
            const element = mas[i-1];
            if (i >= elementDaysLast && currentMonth >= count) {
                element.textContent = count++;
            } else  if (i < elementDaysLast) {
                element.textContent = countMinus++;
                element.classList.add('othermonth')
            } else {
                element.textContent = countPlus++;
                element.classList.add('othermonth')
            }            
        }        
    }

    function calendarMonthVisible(element) {
        calendarMonth.textContent = nameMonthTitle[element]
    }

    function ClearningText(mas) {
        for (let i = 0; i < mas.length; i++) {
            const element = mas[i];
            element.textContent = "";
            element.classList.remove('othermonth')
        }
        ClearningBackground(tableDate)
    }

    function ClearningBackground(mas) {
        for (let i = 0; i < mas.length; i++) {
            const element = mas[i];
            element.classList.remove('background_date')
        }
    }
    

    calendarMonthVisible(month)
    fullDate(tableDate, daysInMonthLast, daysInMonth, daysWeekCurrent)
    
    strelkaLast.addEventListener('click', function() {
        ClearningText(tableDate);
        if (strelkaNext.classList.contains('display_none')) {
            fullDate(tableDate, daysInMonthLast, daysInMonth, daysWeekCurrent)
            strelkaNext.classList.remove('display_none')
            calendarMonthVisible(month)
            monthCount--
        } else {
            fullDate(tableDate, daysInMonthBeforeLast, daysInMonthLast, daysWeekLast);
            strelkaLast.classList.add('display_none')
            calendarMonthVisible(monthLast)
            monthCount--
        }
    })

    strelkaNext.addEventListener('click', function() {
        ClearningText(tableDate);
        if (strelkaLast.classList.contains('display_none')) {
            fullDate(tableDate, daysInMonthLast, daysInMonth, daysWeekCurrent)
            strelkaLast.classList.remove('display_none')
            calendarMonthVisible(month)
            monthCount++
        } else {
            fullDate(tableDate, daysInMonth, daysInMonthNext, daysWeekNext);
            strelkaNext.classList.add('display_none')
            calendarMonthVisible(monthNext)
            monthCount++
        }
        
    })


    calendar.addEventListener("mousedown", (event) => {
        let data = event.target.textContent;
        ClearningBackground(tableDate)
        if (!event.target.classList.contains('othermonth') && event.target.classList.contains('calendar_day')) {
            dataTitle.textContent = `${data} ${nameMonth[month + monthCount]}`;
            event.target.classList.add('background_date');
        } 
    });


    dataTitle.textContent = `${date} ${nameMonth[month]}`;


}


calendarFunc()






/*
const calendar = document.querySelector('.calendar'),
popup = document.querySelector('.popup'),
buttonAdd = document.querySelector('.addEvent_button'),
buttonSave = document.querySelector('.popup_button'),
popupInput = document.querySelectorAll('.popup_input')
inventDate = document.querySelector('.invent_data'),
invent = document.querySelector('.invent'),
inventList = document.querySelector('.invent_list'),
nameMonth = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Октября',
    10: 'Ноября',
    11: 'Декабаря' 
},
inventObgect = {};


//календарь

const calendarFunc = () => {
    function fullDate(mas) {
        let count = 1,
        countMinus = daysInMonthLast + 2 - daysWeek,
        countPlus = 1;
        for (let i = 1; i <= mas.length; i++) {
            const element = mas[i-1];
            if (i >= daysWeek && daysInMonth >= count) {
                element.textContent = count++;
            } else  if (i < daysWeek) {
                element.textContent = countMinus++;
                element.classList.add('othermonth')
            } else {
                element.textContent = countPlus++;
                element.classList.add('othermonth')
            }            
        }
    }
    
    fullDate(tableDate)

    // добавление событий

    buttonAdd.addEventListener('click', function () {
        popup.classList.add('popup_button_active')
    })

    buttonSave.addEventListener('click', function () {
        debugger;
        let dataObject = popupInput[0].value,
        timeObject = popupInput[1].value,
        locationObject = popupInput[2].value;
        popupInput[0].value = "";
        popupInput[1].value = "";
        popupInput[2].value = "";
        popup.classList.remove('popup_button_active');
        if(inventObgect[dataObject] == undefined) {
            inventObgect[dataObject] = [timeObject, locationObject];
        } else {
            inventObgect[dataObject].push(timeObject, locationObject)
        }
    })
    
    calendar.addEventListener("mousedown", (event) => {
        let data = event.target.textContent;
        if (!event.target.classList.contains('othermonth')) {
            inventDate.textContent = `${data} ${nameMonth[month]}`;
            listInvent(data)
        } 

    });

    const listInvent = (data) => {
        if (inventObgect.hasOwnProperty(data)) {
            let obj = inventObgect[data];
            inventList.innerHTML = "";
            for (let i = 0; i < obj.length; i++) {
                listInventShow(obj[i])
            } 
        } else {
            inventList.innerHTML = "";
            listInventNone();
        }
    }

    const listInventShow = (text) => {
        let li = document.createElement('li');
        li.textContent = text
        li.classList.add('invent_list_element')
        inventList.appendChild(li);
    }

    const listInventNone = () => {
        let li = document.createElement('li');
        li.textContent = 'на эту дату нет событий';
        li.classList.add('invent_none');
        inventList.appendChild(li);
    }


    listInvent()
}

calendarFunc()

// отображение текущей даты

inventDate.textContent = `${date} ${nameMonth[month]}`;



*/


//header формы

const buttonMenu = document.querySelector('.mini-header_burger'),
headerlist = document.querySelector('.mini-header_list'),
burgerImg = document.querySelectorAll('.mini-header_burger-img'),
burgerImgChange = () => {
    headerlist.classList.toggle('burger-visible')
    burgerImg[0].classList.toggle('burger-active')
    burgerImg[1].classList.toggle('burger-active')
}

if (buttonMenu != null) {
    buttonMenu.addEventListener('click', burgerImgChange);
}


// другой header

let menuBtn = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu__list');

if (menuBtn != null) {
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
}