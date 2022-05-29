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

// Escreva seu código abaixo.

// 1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
	let getDaysList = document.querySelector('#days');

	for (let index = 0; index < dezDaysList.length; index += 1) {
		let day = dezDaysList[index];
		let dayItem = document.createElement('li');

		if (day === 24 || day === 31) {
			dayItem.className = 'day holiday';
			dayItem.innerText = day;
			getDaysList.appendChild(dayItem);
		} else if (day === 4 || day === 11 || day === 18) {
			dayItem.className = 'day friday';
			dayItem.innerText = day;
			getDaysList.appendChild(dayItem);
		} else if (day === 25) {
			dayItem.className = 'day holiday friday';
			dayItem.innerText = day;
			getDaysList.appendChild(dayItem);
		} else {
			dayItem.className = 'day';
			dayItem.innerText = day;
			getDaysList.appendChild(dayItem);
		}
	}
}
createDaysOfTheMonth();

// 2.
function holidays(feriados) {
	let button = document.createElement('button');
	button.innerHTML = feriados;
	button.id = 'btn-holiday';
	let buttonLocal = document.getElementsByClassName('buttons-container')[0];
	buttonLocal.appendChild(button);
}
holidays('Feriados');

// 3.
function addClick() {
	let button = document.getElementById('btn-holiday');
	let holidays = document.getElementsByClassName('holiday');

	button.addEventListener('click', changeColor);
	function changeColor() {
		for (let index = 0; index < holidays.length; index += 1) {
			if (holidays[index].style.backgroundColor === 'lightgreen') {
				holidays[index].style.backgroundColor = 'rgb(238,238,238)';
			} else {
				holidays[index].style.backgroundColor = 'lightgreen';
			}
		}
	}
}
addClick();

// 4.
function fridayButton(sexta) {
	let button = document.getElementsByClassName('buttons-container');
	let newButton = document.createElement('button');
	newButton.id = 'btn-friday';
	newButton.innerHTML = sexta;
	button[0].appendChild(newButton);
}
fridayButton('Sexta-feira');

// 5.
function clickFriday() {
	let newButton = document.getElementById('btn-friday');
	let fridays = document.getElementsByClassName('friday');
	let fridaysArray = [4, 11, 18, 25];

	newButton.addEventListener('click', mudaTexto);

	function mudaTexto() {
		for (let index = 0; index < fridays.length; index += 1) {
			if (fridays[index].innerHTML !== 'Sextou!!') {
				fridays[index].innerHTML = 'Sextou!!';
			} else {
				fridays[index].innerHTML = fridaysArray[index];
			}
		}
	}
}
clickFriday();

// 6.
function dayMouseOver() {
	let days = document.querySelectorAll('.day');
	for (let i = 0; i < days.length; i += 1) {
		days[i].addEventListener('mouseover', function (event) {
			event.target.style.fontSize = '30px';
			event.target.style.fontWeight = '600';
		});
	}
};

function dayMouseOut() {
	let days = document.querySelectorAll('.day');
	for (let i = 0; i < days.length; i += 1) {
		days[i].addEventListener('mouseout', function (event) {
			event.target.style.fontWeight = '200';
			event.target.style.fontSize = '20px';
		});
	}
};
dayMouseOver();
dayMouseOut();

// 7.
function taskAdd(tarefa) {
	let newTask = document.createElement('span');
	let newTaskContainer = document.querySelector('.my-tasks');
	newTask.innerHTML = tarefa;
	newTaskContainer.appendChild(newTask);
}
taskAdd('Projeto Verão!')

// 8.
function taskColor(cor) {
	let newTaskColor = document.createElement('div');
	let newTaskColorContainer = document.querySelector('.my-tasks');
	newTaskColor.className = 'task';
	newTaskColor.style.backgroundColor = cor;
	newTaskColorContainer.appendChild(newTaskColor);
}
taskColor('orange');

// 9.
function selectTask() {
	let getTask = document.querySelector('.task');
	getTask.addEventListener('click', function() {
		if (getTask.className === 'task') {
		getTask.className = 'task selected';
		} else {
			getTask.className = 'task';
		}
	});
}
selectTask();

// 10.
function paintDay() {
	let days = document.querySelectorAll('.day');
	let selected = document.querySelector('.task');
	selected.addEventListener('click', function() {
		selected = document.querySelector('.selected');
		let selectedColor = selected.style.backgroundColor;
		for (let i = 0; i < days.length; i += 1) {
			days[i].addEventListener('click', function() {
				if (days[i].style.color == selectedColor) {
					days[i].style.color = 'rgb(119,119,119)';
				} else {
					days[i].style.color = selectedColor;
				}
			})
		}
	})
}
paintDay();