function lineBreak()										// function which returns a linebreak
{
	return document.createElement("br");
}

function createLabel(string, stringFor)						// take 2 parameters which are used for the textContent and the 'for' attribute of a newly created label, then returns it
{
	let newLabel = document.createElement("label");
	newLabel.textContent = string;
	newLabel.setAttribute("for", stringFor);

	return newLabel;
}

function createTextInput(nameAndID)							// create a new text input with the parameter as the value of the id and name attribute, then returns the new text input
{
	let newTextInput = document.createElement("input");
	newTextInput.setAttribute("type", "text");
	newTextInput.setAttribute("name", nameAndID);
	newTextInput.id = nameAndID;

	return newTextInput;
}

function createNumberInput(nameAndID)						// create a new number input with a parameter used as value for the id and name attribute, then returns the new number input
{
	let newNumInput = document.createElement("input");
	newNumInput.setAttribute("type", "number");
	newNumInput.setAttribute("name", nameAndID);
	newNumInput.id = nameAndID;

	return newNumInput;
}


/************************************************************************** EXERCISE 1 **************************************************************/

function createNameForm()																		
{
	let newDiv = document.createElement('div');									// create a div container

	let firstLabel = createLabel('Quel est votre prénom ?', 'firstNameInput');	// create a new label for the first name	
	let firstInput = createTextInput('firstNameInput');							// create a new input for the first name

	let secondLabel = createLabel('Quel est votre nom ?', 'lastNameInput');		// create a new label for the last name
	let secondInput = createTextInput('lastNameInput');							// create a new input for the last name

	let newButton = document.createElement('button');							// create a button
	newButton.id = 'nameButton';												// set an id for the button
	newButton.textContent = 'OK';												// set the button's textContent

	let resultLabel = document.createElement('label');							// create a new label
	resultLabel.textContent = 'Veuillez remplir tous les champs';				// contains an error message to be sent if any of the 2 input is empty
	resultLabel.style.display = 'none';											// hide this new label

	newDiv.appendChild(firstLabel);												// add the first label, first input, and a linebreak to the container
	newDiv.appendChild(firstInput);
	newDiv.appendChild(lineBreak());

	newDiv.appendChild(secondLabel);											// same with the second label and input
	newDiv.appendChild(secondInput);
	newDiv.appendChild(lineBreak());

	newDiv.appendChild(newButton);												// add the button and a linebreak inside of the container
	newDiv.appendChild(lineBreak());

	newDiv.appendChild(resultLabel);											// add the label with the error message

	newButton.addEventListener('click', function() {							// add a click eventListener to the button

		if (firstInput.value != undefined && firstInput.value != null &&  firstInput.value != '' && secondInput.value != undefined && secondInput.value != null && secondInput.value != '') 
		{																		
			resultLabel.textContent = 'Bonjour ' + firstInput.value + ' ' + secondInput.value;	// if the 2 input values aren't null undefined or an empty string, change the content of the message
		}
		resultLabel.style.display = 'block';									// then display the message

	}, false);

	return newDiv;																// return the div container
}



/************************************************************************** EXERCISE 2 **************************************************************/

function salaryConverter()																	
{
	let newDiv = document.createElement('div');									// create a new div container

	let monthlyGrossLabel = createLabel('Salaire mensuel brut', 'monthlyGross');	// create a label and a number input for the monthly gross salary
	let monthlyGrossInput = createNumberInput('monthlyGross');

	let monthlyNetLabel = createLabel('Salaire mensuel net', 'monthlyNet');		// create a label and a number input for the monthly net salary
	let monthlyNetInput = createNumberInput('monthlyNet');

	let yearlyGrossLabel = createLabel('Salaire annuel brut', 'yearlyGross');	// create a label and a number input for the yearly gross salary
	let yearlyGrossInput = createNumberInput('yearlyGross');

	let yearlyNetLabel = createLabel('Salaire annuel net', 'yearlyNet');		// create a label and a number input for the yearly net salary
	let yearlyNetInput = createNumberInput('yearyNet');

	newDiv.appendChild(monthlyGrossLabel);										// append to the div container the monthly gross salary label and input, and a linebreak
	newDiv.appendChild(monthlyGrossInput);
	newDiv.appendChild(lineBreak());

	newDiv.appendChild(monthlyNetLabel);										// append to the div container the monthly net salary label and input, and a linebreak
	newDiv.appendChild(monthlyNetInput);
	newDiv.appendChild(lineBreak());

	newDiv.appendChild(yearlyGrossLabel);										// append to the div container the yearly gross salary label and input, and a linebreak
	newDiv.appendChild(yearlyGrossInput);
	newDiv.appendChild(lineBreak());

	newDiv.appendChild(yearlyNetLabel);											// append to the div container the yearly net salary label and input
	newDiv.appendChild(yearlyNetInput);

	monthlyGrossInput.addEventListener('input', function() {					// add an input event listener to the monthly gross salary input
		monthlyNetInput.value = monthlyGrossInput.value/1.298;
		yearlyGrossInput.value = monthlyGrossInput.value*12;					// if its value is changed, the other input's values will change accordingly
		yearlyNetInput.value = monthlyGrossInput.value/1.298*12;
	}, false);

	monthlyNetInput.addEventListener('input', function() {						// same here for the monthly net salary input
		monthlyGrossInput.value = monthlyNetInput.value*1.298;
		yearlyGrossInput.value = monthlyNetInput.value*1.298*12;
		yearlyNetInput.value = monthlyNetInput.value*12;
	}, false);

	yearlyGrossInput.addEventListener('input', function() {						// same for the yearly gross salary input
		monthlyGrossInput.value = yearlyGrossInput.value/12;
		monthlyNetInput.value = yearlyGrossInput.value/1.298/12
		yearlyNetInput.value = yearlyGrossInput.value/1.298;
	}, false);

	yearlyNetInput.addEventListener('input', function() {						// and for the yearly net salary input
		monthlyGrossInput.value = yearlyNetInput.value*1.298/12;
		monthlyNetInput.value = yearlyNetInput.value/12
		yearlyGrossInput.value = yearlyNetInput.value*1.298;
	}, false);


	return newDiv;																// finally, returns the div container
}



/************************************************************************** EXERCISE 3 **************************************************************/

function getEvenNumbers(intArray)									// function which take a number array and returns the even number only in a new array
{
	let currentElt;													// create a variable variable to use for the current element							
	let newArray = [];												// create a new array

	for (var i = 0; i < intArray.length; i++) 						// loops through all the elements in the array
	{
		currentElt = intArray[i];									// store the current element

		if (!(currentElt % 2)) 										// if the modulo result is false (0), the number is even
		{
			newArray.push(currentElt);								// push the number into the newArray
		}
	}

	return newArray;												// returns the newArray
}



/************************************************************************** EXERCISE 4 **************************************************************/

function getCoordinationConjunctions(stringArray)						
{
	let conjunction = ['mais', 'ou', 'et', 'donc', 'or', 'ni', 'car'];	// store the conjunctions
	let newArray = [];													// create a new array to return at the end of the function
	let currentElt;														// variable which will be used to store the current element of the parameter
	let currentConjunction;												// variable which will be used to store the current element of the conjunction array

	for (var i = 0; i < stringArray.length; i++) 						// loops through the parameters array
	{
		currentElt = stringArray[i];									// store the current element of this array

		for (var j = 0; j < conjunction.length; j++) 					// loops through the conjunction array
		{
			currentConjunction = conjunction[j]							// store the current element of the conjunction array

			if (currentElt === currentConjunction) 						// if both the current elements are the same
			{
				newArray.push(currentElt);								// push it into the newArray
			}
		}
	}

	return newArray;													// after the loops, returns the newArray;
}



/************************************************************************** EXERCISE 5 **************************************************************/
																		
function getRandomNumbers()												// returns 128 whole numbers between 0 and 100 included
{
	let newArray = [];													// create a newArray

	for (var i = 0; i < 128; i++) 										// loops 128 times
	{
		let newNumber = Math.floor(Math.random() * 101);				// store a random number between 0 and 100 included

		newArray.push(newNumber);										// push it into the newArray
	}

	return newArray;													// returns the newArray
}