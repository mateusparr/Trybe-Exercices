function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // Exercicio 1

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
function createDaysOfTheMonth() {
  let getDayList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
      
      if (day === 24 || day === 31) {
          dayItem.className = 'day holliday';
          dayItem.innerHTML = day;
          getDayList.appendChild(dayItem);
      } else if (day === 4 || day === 11) {
          dayItem.className = 'day fiday';
          dayItem.innerHTML = day;
          getDayList.appendChild(dayItem);
      }  else if (day === 25) {
          dayItem.className = 'day holiday friday';
          dayItem.innerHTML = day;
          getDayList.appendChild(dayItem);
      } else {
          dayItem.className = 'day';
          dayItem.innerHTML = day;
          getDayList.appendChild(dayItem);
      }
  };
};
createDaysOfTheMonth();

// Exercicio 2

function createButton(buttonName) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let btn  = document.createElement('button');
    let btnID = 'btn-holiday';

    btn.innerHTML = buttonName;
    btn.id = btnID;
    buttonsContainer.appendChild(btn);
};
createButton('Feriados');

// Exercicio 3

function hollidayColors() {
    let button = document.querySelector('#btn-holiday');
    let days = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';

    button.addEventListener('click', function() {
        for (let i = 0; i < days.length; i += 1) {
            if (days[i].style.backgroundColor === setNewColor) {
            days[i].style.backgroundColor === backgroundColor;
            } else {
                days[i].style.backgroundColor === setNewColor;
            }
        }
    })
};

hollidayColors();