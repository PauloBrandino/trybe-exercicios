function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth(){
    let getDayItem = document.getElementById("days"); 
    for (let index = 0; index < decemberDaysList.length; index += 1){
        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        
        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            dayItem.innerHTML = day;
            getDayItem.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday';
            dayItem.innerHTML = day;
            getDayItem.appendChild(dayItem);
        }   else if (day === 25) {
            dayItem.className = 'holiday friday';
            dayItem.innerHTML = day;
            getDayItem.appendChild(dayItem);
        }   else {
            dayItem.className = 'day';
            dayItem.innerHTML = day;
            getDayItem.appendChild(dayItem);
        }
    }
  }
  createDaysOfTheMonth();

  // Criando button Feriado.

  function createbuttonHoliday(name){
    let getBtnItem = document.querySelector('.buttons-container');
    let btnHoliday = document.createElement('button');
    btnHoliday.innerHTML = name;
    btnHoliday.id = 'btn-holiday';
    getBtnItem.appendChild(btnHoliday);
  }

  createbuttonHoliday('Feriados');

  // Mudando a cor de fundo dos dias que possuem a classe "Holiday".


  function changeColor(){
    let getHolidayBtn = document.getElementById('btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';

    getHolidayBtn.addEventListener('click', function () {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
                getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[index].style.backgroundColor = setNewColor;
            }
        }
    });
  }

  changeColor();


  // Criando button Sexta-Feira.

  function createButtonFriday(nameButton) {
    let getBtnItem = document.querySelector('.buttons-container');
    let btnFriday = document.createElement('button');
    btnFriday.innerHTML = nameButton;
    btnFriday.id = 'btn-friday';
    getBtnItem.appendChild(btnFriday);
  }

  createButtonFriday('Sexta-Feira');


  // Modificando o texto a ser exibido nos dias que são sextas-feiras. Adicionando evento click no Button Friday.

  function changeText(arrayFridays){
    let getFridayBtn = document.getElementById('btn-friday');
    let getFridays = document.querySelectorAll('.friday');
    let newText = "Sextou!!";
    
    getFridayBtn.addEventListener('click', function(){
        for (let index = 0; index < getFridays.length; index += 1){
            if (getFridays[index].innerHTML !== newText)     {
                getFridays[index].innerHTML = newText;
            } else {
                getFridays[index].innerHTML = arrayFridays[index];
            }
        }
    })
  }
  let decemberFridays = [4, 11, 18, 25];
  changeText(decemberFridays);



  // Implemente duas funções que criem um efeito de “zoom”.


 function dayMouseOver() {
    let days = document.getElementById('days');
    days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
    });
 }

 function dayMouseOut() {
    let days = document.getElementById('days');
    days.addEventListener('mouseout', function (event){
        event.target.style.fontSize = '20px';
    });
 }
 dayMouseOver();
 dayMouseOut();

 