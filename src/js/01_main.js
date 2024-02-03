// const nowTime = new Date(),
// date = nowTime.getDate(),
// month = nowTime.getMonth(),
// year = nowTime.getFullYear(),
// daysInMonth = new Date(year, month + 1, 0).getDate(),
// daysInMonthLast = new Date(year, month, 0).getDate(),
// daysWeek0 = new Date(`${year}-${month + 1}-1`).getDay(),
// daysWeek = (daysWeek0 == 0) ? 7 : daysWeek0;
// tableDate = document.querySelectorAll('.calendar_day'),
// calendar = document.querySelector('.calendar'),
// popup = document.querySelector('.popup'),
// buttonAdd = document.querySelector('.addEvent_button'),
// buttonSave = document.querySelector('.popup_button'),
// popupInput = document.querySelectorAll('.popup_input')
// inventDate = document.querySelector('.invent_data'),
// invent = document.querySelector('.invent'),
// inventList = document.querySelector('.invent_list'),
// nameMonth = {
//     0: 'Января',
//     1: 'Февраля',
//     2: 'Марта',
//     3: 'Апреля',
//     4: 'Мая',
//     5: 'Июня',
//     6: 'Июля',
//     7: 'Августа',
//     8: 'Сентября',
//     9: 'Октября',
//     10: 'Ноября',
//     11: 'Декабаря'
    
// },
// inventObgect = {};


// //календарь

// const calendarFunc = () => {
//     function fullDate(mas) {
//         let count = 1,
//         countMinus = daysInMonthLast + 2 - daysWeek,
//         countPlus = 1;
//         for (let i = 1; i <= mas.length; i++) {
//             const element = mas[i-1];
//             if (i >= daysWeek && daysInMonth >= count) {
//                 element.textContent = count++;
//             } else  if (i < daysWeek) {
//                 element.textContent = countMinus++;
//                 element.classList.add('othermonth')
//             } else {
//                 element.textContent = countPlus++;
//                 element.classList.add('othermonth')
//             }            
//         }
//     }
    
//     fullDate(tableDate)

//     // добавление событий

//     buttonAdd.addEventListener('click', function () {
//         popup.classList.add('popup_button_active')
//     })

//     buttonSave.addEventListener('click', function () {
//         debugger;
//         let dataObject = popupInput[0].value,
//         timeObject = popupInput[1].value,
//         locationObject = popupInput[2].value;
//         popupInput[0].value = "";
//         popupInput[1].value = "";
//         popupInput[2].value = "";
//         popup.classList.remove('popup_button_active');
//         if(inventObgect[dataObject] == undefined) {
//             inventObgect[dataObject] = [timeObject, locationObject];
//         } else {
//             inventObgect[dataObject].push(timeObject, locationObject)
//         }
//     })
    
//     calendar.addEventListener("mousedown", (event) => {
//         let data = event.target.textContent;
//         if (!event.target.classList.contains('othermonth')) {
//             inventDate.textContent = `${data} ${nameMonth[month]}`;
//             listInvent(data)
//         } 

//     });

//     const listInvent = (data) => {
//         console.log(inventObgect.hasOwnProperty(data), inventObgect);
//         if (inventObgect.hasOwnProperty(data)) {
//             let obj = inventObgect[data];
//             inventList.innerHTML = "";
//             for (let i = 0; i < obj.length; i++) {
//                 listInventShow(obj[i])
//             } 
//         } else {
//             inventList.innerHTML = "";
//             listInventNone();
//         }
//     }

//     const listInventShow = (text) => {
//         let li = document.createElement('li');
//         li.textContent = text
//         li.classList.add('invent_list_element')
//         inventList.appendChild(li);
//     }

//     const listInventNone = () => {
//         let li = document.createElement('li');
//         li.textContent = 'на эту дату нет событий';
//         li.classList.add('invent_none');
//         inventList.appendChild(li);
//     }


//     listInvent()
// }

// calendarFunc()

// отображение текущей даты

// inventDate.textContent = `${date} ${nameMonth[month]}`;


// popups личного кабинета

// Редактирование онформации
// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e)=>{
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
})
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener("click", event => {
    event._isClickWithModal=true;
});
document.getElementById("my-modal").addEventListener("click", event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove("open");
});

// Добавить социальные сети
// Открыть модальное окно
document.getElementById("open-modal-btn-social-networks").addEventListener("click", function () {
    document.getElementById("my-modal-social-networks").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn-social-networks").addEventListener("click", function () {
    document.getElementById("my-modal-social-networks").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e)=>{
    if (e.key === "Escape") {
        document.getElementById("my-modal-social-networks").classList.remove("open")
    }
})
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-social-networks .modal__box-social-networks").addEventListener("click", event => {
    event._isClickWithModal=true;
});
document.getElementById("my-modal-social-networks").addEventListener("click", event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove("open");
});

// Добавить выступления
// Открыть модальное окно
document.getElementById("open-modal-btn-add-performances").addEventListener("click", function () {
    document.getElementById("my-modal-add-performances").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn-add-performances").addEventListener("click", function () {
    document.getElementById("my-modal-add-performances").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e)=>{
    if (e.key === "Escape") {
        document.getElementById("my-modal-add-performances").classList.remove("open")
    }
})
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-add-performances .modal__box-add-performances").addEventListener("click", event => {
    event._isClickWithModal=true;
});
document.getElementById("my-modal-add-performances").addEventListener("click", event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove("open");
});

// Посмотреть все выступления
// Открыть модальное окно
document.getElementById("open-modal-btn-more-performances").addEventListener("click", function () {
    document.getElementById("my-modal-more-performances").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn-more-performances").addEventListener("click", function () {
    document.getElementById("my-modal-more-performances").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e)=>{
    if (e.key === "Escape") {
        document.getElementById("my-modal-more-performances").classList.remove("open")
    }
})
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-more-performances .modal__box-more-performances").addEventListener("click", event => {
    event._isClickWithModal=true;
});
document.getElementById("my-modal-more-performances").addEventListener("click", event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove("open");
});

// Загрузка фото с выступлений
// Открыть модальное окно
document.getElementById("open-modal-btn-download-photos").addEventListener("click", function () {
    document.getElementById("my-modal-download-photos").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn-download-photos").addEventListener("click", function () {
    document.getElementById("my-modal-download-photos").classList.remove("open")
})
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e)=>{
    if (e.key === "Escape") {
        document.getElementById("my-modal-download-photos").classList.remove("open")
    }
})
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-download-photos .modal__box-download-photos").addEventListener("click", event => {
    event._isClickWithModal=true;
});
document.getElementById("my-modal-download-photos").addEventListener("click", event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove("open");
});